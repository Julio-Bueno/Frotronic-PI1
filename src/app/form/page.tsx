'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Footer from '../components/footer'
import { Router } from 'next/router'

export default function Form() {
    
    const [driver, setDriver] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [destination, setDestination] = useState('')
    const [departure, setDeparture] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    function getApproved(request: Request){
        return console.log("approved")
    }
    function getDenied(request: Request){
        return console.log("denied")
    }
    function getPending(request: Request){
        return console.log("pending")
    }
    async function handleForm(driver: String, vehicle: String, destination: String, departure: String){
        try {
            const response = fetch('api/form/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applicatin/json'
                },
                body: JSON.stringify({
                    driver,
                    vehicle,
                    destination,
                    departure
                })
            })

            const schedule = (await response).json()

            if(schedule.success){
                setSuccess(schedule.message || 'Agendado!')
                setTimeout(() => {
                    router.push('/form')
                }, 2000)
            }
        }catch (error){
            setError('Erro de rede. Por favor, tente novamente ou envie um email.')
        }
 
    }
    
    async function approved(){
        const response = fetch('api/forms/approved', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    }

    return (
        <>
            <div className = "top-0 flex items-left justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-black box-border p-4">
                <div className = "flex gap-6">
                    <button onClick = {(e) => getApproved} className = "bg-white rounded-full p-2 align-middle text-center transition duration-700 hover:bg-gray-300"> Aprovados </button>
                    <button onClick = {(e) => getDenied} className = "bg-white rounded-full p-2 align-middle text-center transition duration-700 hover:bg-gray-300"> Rejeitados </button>
                    <button onClick = {(e) => getPending} className = "bg-white rounded-full p-2 align-middle text-center transition duration-700 hover:bg-gray-300 "> Pendentes </button>
                </div>
            </div>
            <div className="grid flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-black font-bold">
                <form onSubmit = {
                    (e) => {e.preventDefault()
                            handleForm(driver, vehicle, destination, departure)
                    }

                }
                    className = "bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <label className = 'block text-sm font-medium text-gray-700'>
                        Motorista
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "text"
                        placeholder = "Quem vai dirigir?"
                        required
                        value = {driver}
                        onChange = {(e) => setDriver(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700'>
                        Veículo
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type = "text"
                        placeholder = "Qual carro?"
                        required
                        value = {vehicle}
                        onChange = {(e) => setVehicle(e.target.value)}>

                    </input>
                    <label className = 'pt-2 block text-sm font-medium text-gray-700 '>
                        Destino
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
                        Saída
                    </label>
                    <input
                        className = "text-black w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        type = "text"
                        placeholder = "Data da ida"
                        required
                        value = {departure}
                        onChange = {(e) => setDeparture(e.target.value)}>
                            
                    </input>

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