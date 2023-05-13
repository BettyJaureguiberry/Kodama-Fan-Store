import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'


const UsuarioLog = () => {
    const { loged } = useContext(LoginContext)
  
    const [shown, setShown] = useState(false)

    const switchShown = () => setShown(!shown)

    return (
        <div className=''>
          
          

        </div>
    )
}

export default UsuarioLog