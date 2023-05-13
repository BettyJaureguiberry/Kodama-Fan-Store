
import React, { useContext } from 'react'

import { LoginContext } from '../../context/LoginContext'

import UsuarioLog from '../UsuarioLog/UsuarioLog'
import FormLog from '../FormLog/FormLog'

const LoginUser = () => {

  const { loged } = useContext(LoginContext)

  return (
    <div className=''>
      {
        loged ? (<UsuarioLog />) : (<FormLog />)
      }
    </div>
  )
}

export default LoginUser