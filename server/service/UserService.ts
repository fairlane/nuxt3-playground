import { User } from "@prisma/client";
import { CognitoService } from "~/server/service/CongnitoService";
import prisma from "./PrismaService";
import config from "#config";
import { parseCognitoConfig } from "~~/util/awsUtil";

let cognitoService: CognitoService;
const getCognitoService = (): CognitoService => {
  if (cognitoService) {
    return cognitoService;
  }
  const cognitoServiceParams = parseCognitoConfig(config);
  cognitoService = new CognitoService(cognitoServiceParams);
  return cognitoService;
}

const listUsers = async (): Promise<User[]> => {
    return await prisma.user.findMany({});
}

const searchUsers = async (s: string): Promise<User[]> => {
    return await prisma.user.findMany({
        where: {
            name: {
              startsWith: s,
              mode: 'insensitive'
            },
          },
    });
}

const addUser = async (user: User): Promise<User> => {
  return await getCognitoService().addUser(user);
}

const confirmUser = async (user: User, confirmationCode: string): Promise<User> => {
  return getCognitoService().confirmUser(user, confirmationCode);
}

export {listUsers, searchUsers, addUser, confirmUser}
