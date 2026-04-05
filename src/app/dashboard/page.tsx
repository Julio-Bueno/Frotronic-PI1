import Footer from "../components/footer";
import Link  from 'next/link'


export default function Dashboard(){

    return (
        <>
            <div className = "top-0 flex items-left justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-black box-border p-4">
                <div className = "flex gap-6">
                    <Link href="/approved" className = "bg-white rounded-full p-2 align-middle text-center"> Aprovados </Link>
                    <Link href = "/denied" className = "bg-white rounded-full p-2 align-middle text-center"> Rejeitados </Link>
                    <Link href = "/pending" className = "bg-white rounded-full p-2 align-middle text-center"> Pendentes </Link>
                </div>
            </div>
            <div className="flex text-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-black text-2xl font-bold">
                Olá! - Bem vindo ao seu painel! <br/>
                Aqui você pode acompanhar as requisições.
                <div>
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}