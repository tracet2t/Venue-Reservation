import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export const withAuth = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies.auth_token; 
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        try {
            const decoded = jwt.verify(token, SECRET_KEY) as { email: string };
            req.user = { email: decoded.email };
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
    };
};
