import { prisma } from '../../../../lib/prisma'

export async function POST(request: Request){
    try {
        const { name, password } = await request.json();

        const userExists = await prisma.user.findFirst({
            where: {
                name: name,
                password: password
            }
        })

        if (!name || !password) {
            return new Response(JSON.stringify({
                success: false,
                error: 'Preencha todos os campos.'
            }),{
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }

        if (userExists){
            return new Response(JSON.stringify({
                success: false,
                error: 'Usuário já existente!'
            }),{
                status: 409,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            const user = await prisma.user.create({
                data:{
                    name: name,
                    password: password,
                }
            })
            return new Response(JSON.stringify({
                success: true,
                message: 'Usuário registrado com sucesso!',
                user: user
            }),{
                status: 201,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }catch (error){
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