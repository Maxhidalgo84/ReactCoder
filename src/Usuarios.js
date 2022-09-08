import React,{useState} from 'react'

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([{nombre:'Nirvana'},{nombre:'Bianca'}])

    const nicolas = {nombre:'Nicolas'}

    const agregarNico = () => {
        setUsuarios([...usuarios,nicolas]); 
    }

    const listuser = usuarios.map((usuario,indice)=>
        <li key={indice}>
            {usuario.nombre}
        </li>
    )   

  return (
    <>
        <h1>Usuarios</h1>
        <button onClick={agregarNico}>Agregar</button>
        <div>{listuser}</div>
        
    </>
  )
}

export default Usuarios;