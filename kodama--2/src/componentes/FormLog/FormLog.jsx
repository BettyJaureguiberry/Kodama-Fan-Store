import React, { useContext, useEffect } from 'react'
import { useState, useRef } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './formLog.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/config'
import { Link, useNavigate } from 'react-router-dom'

const FormLog = () => {
  const { loginUser } = useContext(LoginContext)




  const pForm = useRef(null)

  const [user, setUser] = useState([])
  const navigate = useNavigate();
  const [input, setInput] = useState({ dni: "", pass: "" })

  useEffect(() => {
    const myUsers = collection(db, "Usuarios")

    getDocs(myUsers)
      .then((user) => {
        const newUser = user.docs.map(client => {
          const data = client.data()
          return { ...data }
        })
        setUser(newUser)
      })
      .catch(error => console.log(error))
  })

  const checkUser = (dni, pass) => {
    setUser([...user, (dni, pass)])

    const findDni = user.find(client => client.dni == dni)
    const findPass = user.find(client => client.pass == pass)


    if (findDni && findPass) {
      loginUser(findDni)
    } else {
      pForm.current.textContent = "Los datos ingresados no coinciden con las registrados. Por favor ingrese nuevamente."

    }
  }

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    checkUser(input.dni, input.pass)
    navigate("/");
  }

  return (
    <div className='contenedorFormLog'>

     

      <form className='formLog' onSubmit={handlerSubmit}>
       <h5>いらっしゃいませ.</h5>
        <h7>Bienvenidos!. Por favor ingresa los siguientes datos para poder acceder a tu cuenta:</h7>

        <input type="number" value={input.dni} placeholder='Ingresa tu DNI' name='dni' required onChange={handleInput} className='form-control' />

        <input type="password" value={input.pass} placeholder='Ingresa tu contraseña' name='pass' required onChange={handleInput} className='form-control' />

        <button type="submit" className='btn btn-secondary'>Ingresar</button>

        <p ref={pForm} ></p>

      </form>
      <img src="../imagenes/login.jpg" alt="" className='imgLogin' />


    </div>
  )
}

export default FormLog