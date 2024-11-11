// pages/api/locations.ts

import { NextApiRequest, NextApiResponse } from 'next';

const locations = [
  { id: 1, province: "Western Province", districts: ["Colombo", "Gampaha", "Kalutara"] },
  { id: 2, province: "Central Province", districts: ["Kandy", "Matale", "Nuwara Eliya"] },
  { id: 3, province: "Southern Province", districts: ["Galle", "Matara", "Hambantota"] },
  { id: 4, province: "Sabaragamuwa Province", districts: ["Kegalle", "Rathnapura"] },
  { id: 5, province: "Eastern Province", districts: ["Ampara", "Batticaloa", "Trincomalee"] },
  { id: 6, province: "Uva Province", districts: ["Badulla", "Monaragala"] },
  { id: 7, province: "North Western Province", districts: ["Kurunegala", "Puttalam"] },
  { id: 8, province: "North Central Province", districts: ["Anuradhapura", "Polonnaruwa"] },
  { id: 9, province: "Northern Province", districts: ["Jaffna", "Kilinochchi", "Mullaitivu", "Vavuniya", "Mannar"] },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return the locations data
    res.status(200).json(locations);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
