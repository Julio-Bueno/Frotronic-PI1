import { prisma } from "../lib/prisma"
// consultar usuários
export async function getUsers(name: string){
    const user = await prisma.user.findUnique({
        where: {
            name: name,
        }
    })
    return user
}

export async function getAllUsers(){
    const users = await prisma.user.findMany()
    return users
}