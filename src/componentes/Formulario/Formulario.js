import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {

    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFoto] = useState("")
    const[equipo, actualizarEquipo]=useState("")

    const {registrarColaborador} =props 
    
    const manejarEnvio= (evento)=>{
        evento.preventDefault()
        console.log("Manejar el Envio")
        let datosAEnviar={
            nombre: nombre,
            puesto: puesto,
            foto:foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            required valor={nombre} 
            actualizarValor={actualizarNombre}/>
            
            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar Puesto" 
            required
            actualizarValor={actualizarPuesto}/>
            
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de Foto" 
            required
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones
            valor = {equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>

    </section>
}

export default Formulario;