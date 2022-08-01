import { useState } from "react";
import Formulario from './Formulario';
import ListadoCitas from './ListadoCitas';
import './App.css';

function App() {
  const [citas, setCitas] = useState([{
    mascota: "Nina",
    owner: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  }])

  return (
    <div className="text-white bg-gradient-to-bl from-[#A446B2] to-[#FF0066] min-h-[100vh]">
      <h1 className='text-3xl font-bold text-center tracking-tighter py-4'>ADMINISTRADOR DE PACIENTES</h1>
      <div className="flex justify-around">
        <Formulario setCitas={setCitas} />
        <ListadoCitas citas={citas} />
      </div>
    </div>
  );
}

export default App;
