// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import excuteQuery from "../../lib/db";
import crypto from "crypto";
import { v4 } from "uuid"

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "POST") {
		const { email, password, name } = req.body;
		const salt = crypto.randomBytes(16).toString("hex");
		const hash = crypto
			.pbkdf2Sync(password, salt, 1000, 64, "sha512")
			.toString("hex");
		const user = {
			id: v4(),
			email,
			hash,
			name,
			salt
		};
		try {
			const result: any = await excuteQuery({
				query: "INSERT INTO users (id, email, password, name, salt) VALUES(?, ?, ?, ?, ?)",
				values: [user.id, user.email, user.hash, user.name, user.salt],
			});
		} catch (error) {
			console.log({ error });
		}
	}


}
