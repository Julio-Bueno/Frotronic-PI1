import { prisma } from "../lib/prisma";

// cria usuário 
export async function newUser(name: string, password: string) {
    return await prisma.user.create({
        data: {
            name,
            password
        }
    });
}
