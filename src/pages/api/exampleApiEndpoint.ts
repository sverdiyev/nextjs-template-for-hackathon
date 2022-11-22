import { type NextApiRequest, type NextApiResponse } from "next";

const endpointExample = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ helloFromEndpointExample: "Oh hey there" });
};

export default endpointExample;
