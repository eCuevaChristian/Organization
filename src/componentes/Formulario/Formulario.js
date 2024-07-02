import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const manejarEnvio= (evento)=>{
    evento.preventDefault()
    console.log("Manejar el Envio", evento)
}
const Formulario = () => {
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto" required/>
            <ListaOpciones/>
            <Boton>Crear</Boton>
        </form>

    </section>
}

export default Formulario;