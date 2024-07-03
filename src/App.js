import { useState } from 'react';
import {v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Colaborador from './componentes/Colaborador/Colaborador';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState (true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
        nombre: "Christian Cueva",
        puesto: "Desarrollador en Proceso",
        foto: "https://github.com/eCuevaChristian.png",
        equipo: "Front End"
    },
    {
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora"
    },
    
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    }
  ]);

  const [equipos,actualizarEquipos] = useState([  
    {
      id: uuid(),
      titulo : "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },

    {
      id: uuid(),
      titulo : "Front End",
      colorPrimario: "#82CFFA ",
      colorSecundario: "#E8F8FF"
    },
    
    {
      id: uuid(),
      titulo : "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo : "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo : "UX y Diseño",
      colorPrimario: "#DB6EBF ",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo : "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo : "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
]
)
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo Colaborador", colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  } 

  //Eliminar Colaborador
  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador")
  }

  //Actualizar Color equipo 
  const actualizarColor = (color, titulo) => {
    console.log("Actualizar:" , color, titulo)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo===titulo){
        equipo.colorPrimario=color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

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
        equipos.map( (equipo)=><Equipo 
          datos={equipo}  
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
