import type { IncomingMessage, ServerResponse } from 'http'
import {useCookie} from "h3";

export default async (req: IncomingMessage, res: ServerResponse) => {
    const authCookie = useCookie(req, "authCookie");
}