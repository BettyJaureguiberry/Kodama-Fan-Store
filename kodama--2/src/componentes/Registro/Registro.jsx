import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import './Registro.css'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/config'
import MenuLat from '../MenuLat/MenuLat'


const Registro = () => {
    const [color, setColor] = useState("")

    const [user, setUser] = useState([])

    const style = color

    const pForm = useRef(null)

    const [input, setInput] = useState({ name: "", lastname: "", pass: "", passTwo: "", dni: "", cellphone: "", email: "", adress: "" })

    useEffect(() => {
        const myUsers = collection(db, "Usuarios")

        getDocs(myUsers)
            .then((user) => {
                const newUser = user.docs.map((client) => {
                    const data = client.data()
                    return { ...data }
                })
                setUser(newUser)
            })
            .catch(error => console.log(error))
    }, [])

    const compareDni = (dni) => {
        return user.find(user => user.dni == dni)
    }

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (compareDni(input.dni)) {

            pForm.current.textContent = "El usuario se encuentra registrado"
        } else if (input.pass.valueOf() === input.passTwo.valueOf()) {
            addDoc(collection(db, "Usuarios"), {
                name: input.name,
                lastname: input.lastname,
                dni: input.dni,
                pass: input.pass,
                passTwo: input.passTwo,
                cellphone: input.cellphone,
                email: input.email,
                adress: input.adress,
            })
            setInput({ name: "", lastname: "", dni: "", pass: "", passTwo: "", cellphone: "", email: "", adress: "" })

            pForm.current.textContent = "Se registro correctamente"
        } else {
            pForm.current.textContent = "Por favor verifique las contraseñas."
            setInput({ pass: "", passTwo: "" })

        }
    }

    return (
        <>
        
        <div className='contenedorForm'>
<div>< MenuLat /></div>

            <fieldset className=''>
            <h5 className='titulo'>Registra tu cuenta</h5>
                <form className='form' onSubmit={handleSubmit}>

                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre:</span>
                        <input type="text" className='form-control' required name='name' placeholder='Ingresa tu nombre' value={input.name} onChange={handleInput} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Apellido:</span>
                        <input type="text" className='form-control' required name='lastname' placeholder='Ingresa tu apellido' value={input.lastname} onChange={handleInput} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">DNI:</span>
                        <input type="number" className='form-control' required name='dni' placeholder='Ingresa tu DNI' value={input.dni} onChange={handleInput} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Contraseña:</span>
                        <input type='password' className='form-control' required name='pass' placeholder='Ingresa tu contraseña' value={input.pass} onChange={handleInput} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Repeti tu Contraseña:</span>
                        <input type="password" className='form-control' required name='passTwo' placeholder='Repeti tu contraseña' value={input.passTwo} onChange={handleInput} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Telefono:</span>
                        <input type="number" className='form-control' required name='cellphone' placeholder='Ingresa tu telefono' value={input.cellphone} onChange={handleInput} />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Direccion:</span>
                        <input type="text" className='form-control' required name='adress' placeholder='Ingresa tu dirección' value={input.adress} onChange={handleInput} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email:</span>
                        <input type="email" className='form-control' required name='email' placeholder='Ingresa tu mail' value={input.email} onChange={handleInput} />
                    </div>
                    

                    <button type='submit' className='btn btn-secondary'>Registrarse</button>

                    <p ref={pForm} ></p>

                </form>

            </fieldset>
           <img src="../imagenes/registrarse.jpg" alt="" />

        </div>
        </>
    )
}

export default Registro