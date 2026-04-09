'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Footer from '../components/footer'
import { Router } from 'next/router'

export default function Form() {
    
    const [driver, setDriver] = useState('')
    const [user, setUser] = useState('')
    const [reason, setReason] = useState('')
    const [destination, setDestination] = useState('')
    const [error, setError] = useState('')
    const [date, setDate] = useState('')
    const [departureTime, setDepartureTime] = useState('')
    const [comeBackTime, setComeBackTime] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <>
            <div className="grid flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-black font-bold">
                <form onSubmit = {
                    (e) => {e.preventDefault()}

                }
                    className = "bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <label className = 'block text-sm font-medium text-gray-700'>
                        Digite seu nome completo:
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "text"
                        placeholder = "Nome do solicitante"
                        required
                        value = {user}
                        onChange = {(e) => setUser(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700'>
                        Digite o motivo:
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "text"
                        placeholder = "Pós-venda, suporte, visita a cliente..."
                        required
                        value = {reason}
                        onChange = {(e) => setReason(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700 '>
                        Destino:
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "text"
                        placeholder = "Para onde vai?"
                        required
                        value = {destination}
                        onChange = {(e) => setDestination(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700 '>
                        Quem irá junto? (se mais de um, coloque o nome de todos):
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        type = "text"
                        placeholder = "Nomes"
                        required
                        value = {driver}
                        onChange = {(e) => setDriver(e.target.value)}>
                            
                    </input>
                    <label className = 'block text-sm font-medium text-gray-700'>
                        Quando:
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "date"
                        required
                        value = {date}
                        onChange = {(e) => setDate(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700'>
                        Horário de saída:
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "time"
                        required
                        value = {departureTime}
                        onChange = {(e) => setDepartureTime(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700 '>
                        Horário de volta:
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "time"
                        required
                        value = {comeBackTime}
                        onChange = {(e) => setComeBackTime(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700 '>
                        Necessita de carretinha?
                    </label>
                    <input
                        type = 'radio'
                        value = '1'
                        name = 'carreta'>
                    </input>
                    <label className = "pr-2">Não</label>
                    <input
                        type = 'radio'
                        value = '1'
                        name = 'carreta'>
                    </input>
                    <label>Sim</label> <br/>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                            {success}
                        </div>
                    )}

                    <button
                        className = "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                        type = "submit">
                        {loading ? 'Carregando' : 'Enviar'}
                    </button>
                </form>
            </div>
            <Footer/>

        </>
    )
}