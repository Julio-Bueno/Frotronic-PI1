import {prisma} from '../lib/prisma'

export async function newSchedule(driver: string, vehicle: string, destination: string, departure: string){
    const okSchedule = await prisma.schedule.create({
        data:{
            driver: driver,
            vehicle: vehicle,
            destination: destination,
            leave: departure
        }
    })
    return okSchedule
}