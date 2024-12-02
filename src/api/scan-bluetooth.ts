import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Mock response (replace with your server logic)
  const devices = [
    { name: "JetsonNanoBot", address: "00:11:22:33:44:55" },
    { name: "SnackBotPro", address: "66:77:88:99:AA:BB" },
  ];
  res.status(200).json({ devices });
}
