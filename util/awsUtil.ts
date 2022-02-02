import {ICognitoUserPoolData} from "amazon-cognito-identity-js";
const parseCognitoConfig = (runtimeConfig: any): ICognitoUserPoolData => {
    return {
		UserPoolId: runtimeConfig.AWS.COGNITO_POOL_ID,
		ClientId: runtimeConfig.AWS.COGNITO_CLIENT_ID
    }
}   

export {parseCognitoConfig}