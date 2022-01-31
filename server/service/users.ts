import { User } from "@prisma/client";
import prisma from "./prisma";

const listUsers = async (): Promise<User[]> => {
    return await prisma.user.findMany({});
}

const searchUsers = async (s: string) => {
    return await prisma.user.findMany({
        where: {
            name: {
              startsWith: s,
              mode: 'insensitive'
            },
          },
    });
}

export {listUsers, searchUsers}
