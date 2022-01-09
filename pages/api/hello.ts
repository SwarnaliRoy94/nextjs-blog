import { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};

//req is an instance of http.IncomingMessage, plus some pre-built middlewares.
//res is an instance of http.ServerResponse, plus some helper functions.
