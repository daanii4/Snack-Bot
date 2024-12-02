import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { device } = req.query;

  if (device === "JetsonNanoBot") {
    // Mock successful connection
    res.status(200).json({ status: "Connected" });
  } else {
    res.status(500).json({ status: "Connection failed" });
  }
}