import { useState } from "react"

export default function Formulario({ setCitas }) {
    const [mascota, setMascota] = useState("")
    const [owner, setOwner] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("") 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCitas(prev => [...prev, {
            mascota,
            owner,
            fecha,
            hora,
            sintomas
        }])
        setMascota("")
        setOwner("")
        setFecha("")
        setHora("")
        setSintomas("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 px-16 max-w-[600px]">
            <h2 className="text-3xl font-semibold text-center py-16">CREAR MI CITA</h2>
            <label htmlFor="Mascota">Nombre Mascota</label>
            <input placeholder="Nombre Mascota" required type="text" name="Mascota" value={mascota} onChange={e => setMascota(e.target.value)} />
            <label htmlFor="Owner">Nombre Dueño</label>
            <input placeholder="Nombre dueño de la mascota" required type="text" name="Owner" value={owner} onChange={e => setOwner(e.target.value)} />
            <label htmlFor="Fecha">Fecha</label>
            <input required type="date" name="Fecha" value={fecha} onChange={e => setFecha(e.target.value)} />
            <label htmlFor="Hora">Hora</label>
            <input required type="time" name="Hora" value={hora} onChange={e => setHora(e.target.value)} />
            <label htmlFor="Sintomas">Nombre Mascota</label>
            <textarea required name="Sintomas" value={sintomas} onChange={e => setSintomas(e.target.value)} />
            <button type="submit" className="text-xs font-medium tracking-wider text-center w-full border border-cyan-700 rounded-sm my-2 py-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 transition">AGREGAR CITA</button>
        </form>
    )
}