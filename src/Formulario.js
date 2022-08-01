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
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 px-4">
            <h2 className="text-2xl font-semibold text-center py-4">CREAR MI CITA</h2>
            <label htmlFor="Mascota">Nombre Mascota</label>
            <input required type="text" name="Mascota" value={mascota} onChange={e => setMascota(e.target.value)} />
            <label htmlFor="Owner">Nombre Dueño</label>
            <input required type="text" name="Owner" value={owner} onChange={e => setOwner(e.target.value)} />
            <label htmlFor="Fecha">Fecha</label>
            <input required type="date" name="Fecha" value={fecha} onChange={e => setFecha(e.target.value)} />
            <label htmlFor="Hora">Hora</label>
            <input required type="time" name="Hora" value={hora} onChange={e => setHora(e.target.value)} />
            <label htmlFor="Sintomas">Nombre Mascota</label>
            <textarea required name="Sintomas" value={sintomas} onChange={e => setSintomas(e.target.value)} />
            <button type="submit">Agregar Cita</button>
        </form>
    )
}