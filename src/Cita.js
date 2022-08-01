export default function Cita (props) {
    return (
        <div className="bg-white rounded-md text-black py-4 px-6 shadow-sm">
            <p><strong>Mascota: </strong>{props.mascota}</p>
            <p><strong>Dueño: </strong>{props.owner}</p>
            <p><strong>Fecha: </strong>{props.fecha}</p>
            <p><strong>Hora: </strong>{props.hora}</p>
            <p><strong>Sintomas: </strong>{props.sintomas}</p>
            <button onClick={props.delete} className="text-center w-full border border-gray-500 rounded-sm my-2 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 transition">ELIMINAR ×</button>
        </div>
    )
}