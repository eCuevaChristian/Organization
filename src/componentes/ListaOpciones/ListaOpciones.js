import "./ListaOpciones.css"

const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y  Gestión"
]

const arreglo ={}

const ListaOpciones = () => {
    return <div className="lista-opciones"> 
        <label >Equipos</label>
        <select>
            {equipos.map((equipo, ListaOpciones)=>{
                return <option key={ListaOpciones}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;