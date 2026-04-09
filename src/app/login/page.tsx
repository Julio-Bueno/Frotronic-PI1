'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Footer from "../components/footer"


export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleLogin(name: string, password: string) {
        setError('');
        setLoading(true);
    }
    
    return (
        <>
            <div className="grid flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Frotronic</h1>
                    <h2 className="text-xl font-semibold text-center text-gray-600 mb-8">Entrar</h2>

                    <form  onSubmit= {(e) => {
                        e.preventDefault()
                        handleLogin(name, password);
                    }} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nome
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(named) => setName(named.target.value)}
                                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Seu nome de usuário"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Senha
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(passwored) => setPassword(passwored.target.value)}
                                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                                required
                                disabled={loading}
                            />
                        </div>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            {loading ? 'Checando...' : 'Entrar'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">Não tem uma conta?</p>
                        <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                            Registre-se aqui
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}