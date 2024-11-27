import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../../middleware/auth';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
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