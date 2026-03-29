import {prisma} from "./lib/prisma";

async function main(){
    //criar usuário de teste
    const user = await prisma.user.create({
        data:{
            name: "tester",
            password: "tester123",
            height: 3,
            description: "Usuário de teste para desenvolvimento"
        }
    })
    console.log("Usuário criado:", user);
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(error) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    })