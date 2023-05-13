import React, { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'
import './Usuario.css'


const Usuario = () => {
  const { loged, logoutUser } = useContext(LoginContext)
  
  return (
    <>
      <div className='conjuntoLog'>

        <img src="../imagenes/kodama.jpg" alt={loged.name} className='login' />
        <strong className='nomUsuario'>{loged.name}</strong>
        <button onClick={() => logoutUser()} className='botonCS btn btn-secondary'>Cerrar sesión</button>

        
      </div>

    </>
  )
}

export default Usuario