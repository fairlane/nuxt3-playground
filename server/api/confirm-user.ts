import { User } from '@prisma/client'
import type { IncomingMessage, ServerResponse } from 'http'
import {confirmUser} from '~/server/service/UserService';
import {useBody} from 'h3';

export default async (req: IncomingMessage, res: ServerResponse): Promise<any> => {
  const {name, email, username, password, confirmationCode} = await useBody(req);
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
    const confirmedUser = await confirmUser(user, confirmationCode);
    return {confirmedUser};
  } catch(e) {
    // Todo - add exception wrapper utility
    res.statusCode = 400;
    res.setHeader('X-Exception', e.name)
    res.end(e.toString());
  }
}