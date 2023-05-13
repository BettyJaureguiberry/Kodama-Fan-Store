import React from 'react'
import { NavLink } from 'react-router-dom'
import Registro from '../Registro/Registro'
import LoginUser from '../LoginUser/LoginUser'
import './LinkCondicional.css'

const LinkCondicional = () => {
  return (
    <>
      <div>
        <NavLink to={"/Registro"} className="titLog">Registrarse</NavLink>
      </div>

      <div>
        <NavLink className="titLog" to={"/LoginUser"}>Inicia sesión</NavLink>
      </div>

    </>
  )
}

export default LinkCondicional