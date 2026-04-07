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

export async function getApproved(){
    const approved = await prisma.schedule.findMany({
        where: {
            status: 'approved'
        }
    })
    return approved
}

export async function getDenied(){
    const denied = await prisma.schedule.findMany({
        where: {
            status: 'denied'
        }
    })
    return denied
}

export async function getPending(){
    const pending = await prisma.schedule.findMany({
        where: {
            status: 'pending'
        }
    })
    return pending
}