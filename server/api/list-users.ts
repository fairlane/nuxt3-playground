import { User } from '@prisma/client';
import type { IncomingMessage, ServerResponse } from 'http'
import {listUsers} from "~/server/service/users"

export default async (req: IncomingMessage, res: ServerResponse): Promise<User[]> => {
  const users = await listUsers();
  return  users;
}