import pkg from '@prisma/client';
const { PrismaClient } = pkg;

import type { IncomingMessage, ServerResponse } from 'http'
import type { User } from '~/types/types'

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
      { name: 'Bob', email: 'bob@prisma.io', password: 'poks', roleId: 1 }
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
  return {jee: "poks"}
}