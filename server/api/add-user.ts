import { User } from '@prisma/client'
import type { IncomingMessage, ServerResponse } from 'http'
import {addUser} from '~/server/service/UserService';
import {useBody} from 'h3';

export default async (req: IncomingMessage, res: ServerResponse): Promise<any> => {
  const {name, email, username, password} = await useBody(req);
  // ToDo - add a util to handle the mapping
  const user: User = {
    id: null,
    email: email,
    username: username,
    password: password,
    name: name,
    roleId: 1
  }
  try {
    const addedUser = await addUser(user);
    return {addUser};
  } catch(e) {
    // Todo - add exception wrapper utility
    res.statusCode = 400;
    res.setHeader('X-Exception', e.name)
    res.end(e.toString());
  }
}