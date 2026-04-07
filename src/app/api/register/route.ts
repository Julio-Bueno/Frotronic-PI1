import { newUser } from '../../../../scripts/newUser'
import { getUsers } from '../../../../scripts/queries'

export async function POST(request: Request){
    try {
        const { name, password } = await request.json();

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
        const userExists = await getUsers(name)
        
        if (userExists){
            return new Response(JSON.stringify({
                success: false,
                error: 'Escolha outro nome de usuário!'
            }),{
                status: 409,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            const user = await newUser(name, password);

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
    } catch (error){
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