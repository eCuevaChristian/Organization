import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Colaborador from './componentes/Colaborador/Colaborador';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState (true);
  const [colaboradores, actualizarColaboradores] = useState([]);
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo Colaborador", colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  } 

  //lista de equipos
  const equipos = [
    
    {
      titulo : "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },

    {
      titulo : "Front End",
      colorPrimario: "#82CFFA ",
      colorSecundario: "#E8F8FF"
    },
    
    {
      titulo : "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      titulo : "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      titulo : "UX y Diseño",
      colorPrimario: "#DB6EBF ",
      colorSecundario: "#FAE9F5"
    },

    {
      titulo : "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      titulo : "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
]

  return (
    <div>
      <Header/>
      {/*mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      />}
      
      <MiOrg  cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo)=>{
          return <Equipo 
          datos={equipo}  
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo)}/>
        } )
      }

    </div>
  );
}

export default App;
