import Footer from "../app/components/footer"
import Link from "next/link"

export default function Home() {
  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      
      <div className  ="text-black text-center text-3xl bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        Bem vindo ao Frotronic
        <div className = " p-10 rounded-full">
          <Link href="/login" className = "text-black text-xl">
            Entrar
          </Link>
        </div>
        <div className = " p-10 rounded-full">
          <Link href="/register" className = "text-black text-xl">
            Registrar
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}