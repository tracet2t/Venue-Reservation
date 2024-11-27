import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const withAuth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // Mock authentication for demonstration purposes
    req.user = { email: 'user@example.com' }; 

    return handler(req, res);
  };
};
