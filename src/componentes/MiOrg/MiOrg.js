import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado - hooks
    //useState------
    //useState()
    
    //const [mostrar,actualizarMostrar]= useState(true)
    //const manejarClick= () =>{
      //  console.log(" Mostrar/Ocultar", !mostrar)
        //actualizarMostrar();
    //}
    return <section className="orgSection">
        <h3 className="title">Mi Organization</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg