import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState (true); 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario ? <Formulario/> : <></>}
      <MiOrg  cambiarMostrar={cambiarMostrar}/>
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="UX Y Diseño"/>
    </div>
  );
}

export default App;
