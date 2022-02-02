import { User } from '@prisma/client';
import type { IncomingMessage, ServerResponse } from 'http'
import { searchUsers } from '../service/UserService';
import { useQuery } from "h3";

export default async (req: IncomingMessage, res: ServerResponse): Promise<User[]> => {
  const {s} = useQuery(req);
  return await searchUsers(s.toString());
}