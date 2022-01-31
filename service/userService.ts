import { User } from "~/types/types";

const listUsers = async () => {
//    const endpoint = config.API_URL + '/list-users';
//    return callApi('/list-users');
}

const searchUsers = async (searchTerm: string) => {
//    const endpoint: string = config.API_URL + '/search?s=' + searchTerm;
//    return callApi(endpoint);
}

const callApi = async (url: string) => {
    return await (await fetch(url)).json();
}
export {listUsers, searchUsers}