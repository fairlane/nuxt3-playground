import { User } from '@prisma/client';
import type { IncomingMessage, ServerResponse } from 'http'
import { searchUsers } from '../service/users';
import { useQuery } from "h3";
import * as url from "url";

export default async (req: IncomingMessage, res: ServerResponse): Promise<User[]> => {
  // TODO - there must be an earier & cleaner way to do this 
  const params = url.parse(req.url, true).query;
  const {s} = params
  return await searchUsers(s.toString());
}