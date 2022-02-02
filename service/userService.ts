import { User } from "@prisma/client";
import { ApiService } from "./ApiService";


export class UserService extends ApiService<User>
{
    constructor(apiBase: string) {
        super(apiBase);
    }

    async addUser(user: User): Promise<User> {
        return await this.post('/add-user', user);
    }
 
    async confirmUser(user: User, confirmationCode: string): Promise<User> {
        const payload = {
            ...user,
            confirmationCode: confirmationCode
        };
        console.log("PAYLOAD", payload);
        return await this.post('/confirm-user', payload);
    }
 
    async listUsers(): Promise<User[]> {
        return this.fetchMany('/list-users');
    }

    async searchUsers(searchTerm: string): Promise<User[]> {
        return this.fetchMany(`/search-users?s=${searchTerm}`);
     }
}