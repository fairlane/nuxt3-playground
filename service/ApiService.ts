import axios from "axios"

export abstract class ApiService<T>
{
    apiBase: string;
    constructor(apiBase: string) {
        this.apiBase = apiBase;
    }

    async fetchMany <T>(url: string): Promise<T[]> {
        const endpoint = this.apiBase + url;
        return await (await fetch(endpoint)).json();
    }    

    async post <T>(url: string, entity: T): Promise<any> {
        return await axios.post(this.apiBase + url, entity);
    }    
}