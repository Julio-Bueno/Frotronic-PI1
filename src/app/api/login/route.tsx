import { getUsers } from "../../../../scripts/queries"

export async function POST(request: Request){
    try{
        const { name, password } = await request.json();
        
        const userExists = await getUsers(name)

        if(!name || !password) {
            return new Response(JSON.stringify({
                success: false,
                error: 'Usuário e senha são obrigatórios.'
            }),{
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        if(userExists){
            return new Response(JSON.stringify({
                success: true,
                user: userExists
            }),{
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }else{
            return new Response(JSON.stringify({
                success: false,
                error: 'Verifique os dados e tente novamente.'
            }),{
                status: 401,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }catch(error){
        return new Response(JSON.stringify({error: 'Um erro ocorreu durante a entrada!'}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}