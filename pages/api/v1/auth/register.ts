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
    const { name, email, phone, gender, address, password, role } = req.body;

    //checking if required data is available
    if (!(name && email && password)) {
      return res
        .status(422)
        .json({ success: false, data: "Name, Email & Password is required" });
    }

    //generating salt
    const salt = crypto.randomBytes(16).toString("hex");

    //hasing the password
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");

    //creating the user object
    const user = {
      id: v4(),
      name,
      email,
      phone,
      gender: "male",
      address,
      hash,
      salt,
      userRole: role === undefined ? "customer" : role,
    };

    try {
      //checking for exsiting user with same email
      const duplicateUser: any = await excuteQuery({
        query: "SELECT * FROM users WHERE email = ?",
        values: [user.email],
      });

      const userExists = duplicateUser.length !== 0;

      if (!userExists) {
        //if user does not exist add
        console.log(user);
        const result = await excuteQuery({
          query:
            "INSERT INTO users (id, name, email, phone, gender, address, password, salt, role) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
          values: [
            user.id,
            user.name,
            user.email,
            user.phone,
            user.gender,
            user.address,
            user.hash,
            user.salt,
            user.userRole,
          ],
        });

        const currentUser: any = await excuteQuery({
          query: "SELECT * FROM users WHERE email = ?",
          values: [user.email],
        });

        const token = jwt.sign(
          {
            id: currentUser[0].id,
            name: currentUser[0].name,
            email: currentUser[0].email,
            phone: currentUser[0].phone,
            role: currentUser[0].role,
            points: currentUser[0].points,
            firstLogin: currentUser[0].first_login,
          },
          process.env.TOKEN_KEY as string,
          {
            expiresIn: "2h",
          }
        );

        const addToken = await excuteQuery({
          query: "UPDATE users SET token = ? WHERE id = ?",
          values: [token, user.id],
        });

        const userObject: any = await excuteQuery({
          query: "SELECT token FROM users WHERE id = ?",
          values: [user.id],
        });
        res.status(201).json({ success: true, data: userObject[0] });
      } else {
        res.status(200).json({ success: false, data: "Email Already Exists" });
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
