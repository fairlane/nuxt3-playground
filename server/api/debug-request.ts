import type { IncomingMessage, ServerResponse } from 'http'
import { useBody, useCookies, useQuery } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse): Promise<any> => {
  const {testq} = useQuery(req);
  const cookies = useCookies(req);
  const body = await useBody(req);

  return {
    test: testq,
    cookies, 
    body
  }
}