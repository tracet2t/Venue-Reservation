import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../../middleware/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
}
  const { id } = req.query;
  const email = req.user?.email;

  if (!email) {
    return res.status(400).json({ error: 'Email not found' });
  }

  const reservation = {
    reservationId: id,
    email: email,
  };

  res.status(200).json(reservation);
}
export default withAuth(handler);