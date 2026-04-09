import Footer from "../components/footer";
import Link  from 'next/link'


export default function Dashboard(){

    return (
        <>
            
            <div className="grid flex text-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-black text-2xl font-bold">
                Olá! - Bem vindo ao seu painel! <br/>
                Aqui você pode acompanhar as requisições.
                <div>
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}