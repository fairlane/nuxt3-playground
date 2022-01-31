import { User } from "@prisma/client";
import { getRuntimeConfig } from "~/config/settings"

const customConfig = getRuntimeConfig();
const listUsers = async (): Promise<User[]> => {
    return fetchMany('/list-users');
}

const searchUsers = async (searchTerm: string): Promise<User[]> => {
   return fetchMany(`/search-users?s=${searchTerm}`);
}

const fetchMany = async <T>(url: string): Promise<T[]> => {
    const endpoint = customConfig.API_URL + url;
    return await (await fetch(endpoint)).json();
}
export {listUsers, searchUsers}