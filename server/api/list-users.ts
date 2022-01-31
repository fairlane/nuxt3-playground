import type { IncomingMessage, ServerResponse } from 'http'
import type { User } from '~/types/types'

export default async (req: IncomingMessage, res: ServerResponse): Promise<User[]> => {
  return [
    {
      id: 1,
      username: "Hapi"
    },
    {
      id: 2,
      username: "Kakkonen"
    },
  ];
}