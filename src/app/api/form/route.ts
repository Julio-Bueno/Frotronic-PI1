import { newSchedule } from '../../../../scripts/newSchedule'

export async function POST(request: Request){
    try{
        const {driver, vehicle, destination, departure } = await request.json()

        if (!driver || !vehicle || !destination || !departure ){
            return new Response(JSON.stringify({
                success: false,
                error: 'Preencha todos os campos!'
            }),{
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            const schedule = await newSchedule(driver, vehicle, destination, departure)

            return new Response(JSON.stringify({
                success: true,
                message: 'Agendado!'
            }),{
                status: 201,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        
    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Ocorreu um erro durante o cadastro!'
        }),{
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}