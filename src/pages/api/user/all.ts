import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return prisma.user.findMany({
        include: {
          _count: {
            select: { todos: true }
          }
        }
      })
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch(() => {
          return res.status(500).json({ error: "Failed to fetch all users" });
      });
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}