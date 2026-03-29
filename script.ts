import {prisma} from "./lib/prisma";

async function main(){
    //criar usuário de teste
    const user = await prisma.user.create({
        data:{
            name: "recepcionista",
            password: "chiptronicFrota",
            height: 2,
            description: "Agendamento e controle de veículos da frota"
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