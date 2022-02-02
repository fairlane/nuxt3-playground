import { User } from '@prisma/client';
import {
    CognitoUserAttribute,
    CognitoUserPool,
    ISignUpResult,
    ICognitoUserPoolData, 
    CognitoUser,
    ICognitoUserData
} from 'amazon-cognito-identity-js';

export class CognitoService
{
    userPool: CognitoUserPool;
    constructor(awsCconfig: ICognitoUserPoolData) {
        this.userPool = new CognitoUserPool(awsCconfig);
    }

    public async addUser(user: User): Promise<User> {
        const attributeList = [];
        attributeList.push(new CognitoUserAttribute({Name: 'email', Value: user.email}));
        attributeList.push(new CognitoUserAttribute({Name: 'name', Value: user.name}));
        return new Promise((resolve, reject) => {
            this.userPool.signUp(user.username, user.password, attributeList, null, (err: Error, result: ISignUpResult) => {
                if (err) {
                    reject(err);
                }
                resolve(user);
            });
        });
    }
    public async confirmUser(user: User, code: string): Promise<User> {
        const cognitoUserData: ICognitoUserData = {
            Username: user.username,
            Pool: this.userPool
        }; 
        const cognitoUser = new CognitoUser(cognitoUserData);
        return new Promise((resolve, reject) => {
            cognitoUser.confirmRegistration(code, true, (err: any, result: any) => {
                if (err) {
                    reject(err);
                }
                resolve(user);
            });
        });
    }
}