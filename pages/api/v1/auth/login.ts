// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { ResponseData } from "../../../../dataTypes/types";
import excuteQuery from "../../../../lib/db";
import crypto from "crypto";
import { v4 } from "uuid";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    //receiving data from the body
    const { email, password } = req.body;

    //checking if required data is available
    if (!(email && password)) {
      return res
        .status(422)
        .json({ success: false, data: "Email & Password is required" });
    }

    try {
      //searching for the user
      const user: any = await excuteQuery({
        query: "SELECT * FROM users WHERE email = ?",
        values: [email],
      });

      console.log(typeof user[0].salt);

      const userExists = user[0].length !== 0;

      if (userExists) {
        //hasing the password
        const hash = crypto
          .pbkdf2Sync(password, user[0].salt, 1000, 64, "sha512")
          .toString("hex");
        if (hash === user[0].password) {
          const token = jwt.sign(
            { id: user[0].id, email },
            process.env.TOKEN_KEY as string,
            {
              expiresIn: "2h",
            }
          );

          await excuteQuery({
            query: "UPDATE users SET token = ? WHERE email = ?",
            values: [token, email],
          });
          res.status(201).json({ success: true, data: { token: token } });
        } else {
          res.status(404).json({ success: false, data: "User not found" });
        }
      } else {
        res.status(409).json({ success: false, data: "Email does not Exists" });
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
