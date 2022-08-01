const Cita = (props) => {
    return (
        <div>
            <p><strong>Mascota: </strong>{props.mascota}</p>
            <p><strong>Dueño: </strong>{props.owner}</p>
            <p><strong>Fecha: </strong>{props.fecha}</p>
            <p><strong>Hora: </strong>{props.hora}</p>
            <p><strong>Sintomas: </strong>{props.sintomas}</p>
        </div>
    )
}

export default function ListadoCitas({ citas }) {
    return (
        <div className="flex-1 px-4">
            <h2 className="text-2xl font-semibold text-center py-4">ADMINISTRA TUS CITAS</h2>
            <div>{citas.map((cita, i) => <Cita {...cita} key={i} />)}</div>
        </div>
    )
}