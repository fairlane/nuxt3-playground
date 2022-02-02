import pkg from '@prisma/client';
const { PrismaClient } = pkg;

import type { IncomingMessage, ServerResponse } from 'http'

const prisma = new PrismaClient();
export default async (req: IncomingMessage, res: ServerResponse): Promise<any> => {
  const createRoles = await prisma.role.createMany({
      data: [
        {name: 'USER'},
        {name: 'SUPER_ADMIN'},
        {name: 'ADMIN'}
      ],
      skipDuplicates: true
  });
  const createUsers = await prisma.user.createMany({
    data: [
      { username: 'bob', name: 'Bob', email: 'bob@prisma.io', password: 'poks', roleId: 1 },
      { username: 'peter', name: 'Peter', email: 'peter@prisma.io', password: 'ok', roleId: 1 },
      { username: 'annie', name: 'Annie', email: 'annie@prisma.io', password: 'admin', roleId: 1 },
      { username: 'jack', name: 'Jack', email: 'jack@prisma.io', password: 'yeah', roleId: 3 },
      { username: 'steve', name: 'Steve', email: 'steve@prisma.io', password: 'allrighty', roleId: 3 },
      { username: 'ford', name: 'Ford', email: 'ford@prisma.io', password: 'yes', roleId: 2 },
      { username: 'sue',  name: 'Sue', email: 'sue@prisma.io', password: 'yes', roleId: 2 },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
  return {result: "All good"}
}