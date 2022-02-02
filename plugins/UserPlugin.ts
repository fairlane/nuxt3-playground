import { defineNuxtPlugin } from '#app';
import { UserService } from '~~/service/UserService';

export default defineNuxtPlugin(nuxtApp => {
    const conf = useRuntimeConfig();
    const userService: UserService = new UserService(conf.API_URL);
    return {
        provide: {
            userService: userService as UserService
        }
    }    
})