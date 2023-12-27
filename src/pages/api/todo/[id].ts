import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';

interface UpdateTodoRequest {
  completed: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { completed } = req.body as UpdateTodoRequest || false;
  switch (req.method) {
    case 'PUT':
      return prisma.todo.update({
        where: {
          id: Number(id),
        },
        data: {
          completed: completed,
        },
      })
        .then((data) => {
          const invalidateQuery = ['User', data.userId]
          return res.status(200).json({
            shouldInvalidate: true,
            invalidateQuery,
            todo: data,
          });
        })
        .catch(() => {
          return res.status(500).json({ error: "Failed to update todo" });
      });

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}