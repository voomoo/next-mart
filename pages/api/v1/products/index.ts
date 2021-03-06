// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import excuteQuery from "../../../../lib/db";
import { ResponseData } from "../../../../dataTypes/types";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === "GET") {
        try {
            const result: any = await excuteQuery({
                query: "SELECT * FROM products",
                values: [],
            });
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            console.log({ error });
        }
    }


}
