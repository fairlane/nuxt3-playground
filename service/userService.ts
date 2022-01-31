import { User } from "~/types/types";
import { getRuntimeConfig } from "~/config/settings"

const customConfig = getRuntimeConfig();
const listUsers = async (): Promise<User[]> => {
    return callApi('/list-users');
}

const searchUsers = async (searchTerm: string): Promise<User[]> => {
   return callApi(`/search-users?s=${searchTerm}`);
}

const callApi = async (url: string) => {
    const endpoint = customConfig.API_URL + url;
    return await (await fetch(endpoint)).json();
}
export {listUsers, searchUsers}