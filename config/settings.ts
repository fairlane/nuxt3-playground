import { RuntimeConfiguration } from "~/types/types"

const getRuntimeConfig = (): RuntimeConfiguration => {
    return {
        API_URL: "http://localhost:3000/api"
    }    
}

export {getRuntimeConfig};