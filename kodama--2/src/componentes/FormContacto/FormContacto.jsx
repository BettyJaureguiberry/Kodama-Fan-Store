import React from 'react'
import Boton from '../Boton/Boton';
import './FormContacto.css'
import { useState } from 'react';
import { db } from '../../services/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const FormContacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [texto, setTexto] = useState("");
    const [contactoID, setContactoID] = useState("");
    const [error, setError] = useState("");

    const manejadorForm = (event) => {
        event.preventDefault();
        setError("");

        if (!nombre || !telefono || !email || !texto) {
            setError("Por favor complete todos los campos");
            return;
        }


        const contacto = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            texto: texto,
        }

        addDoc(collection(db, "contacto"), contacto)
            .then((docRef) => {
                setContactoID(docRef.id)
                setNombre("");
                setEmail("");
                setTelefono("");
                setTexto("");
            })
            .catch((error) => {
                setError("すみません. Disculpe . Se produjo un error al cargar los datos. Intente nuevamente.Gracias.");
            })
    }


    return (
        <form >
            <div className="FormContacto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Contacto</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido" onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} />
                </div>


                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Telefono de contacto" onChange={(event) => setTelefono(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} onChange={(event) => setTexto(event.target.value)} />
                </div>

                {error && <p style={{ color: "red" }} className='alert alert-danger'> {error} </p>}
                <button onClick={manejadorForm} className='btn btn-secondary'>Enviar</button>
            </div>
            {
        contactoID && (
            <>
                <hr />
                <div className="alert alert-secondary" role="alert">
                    <h6 className="alert-heading">ありがとうございました。!</h6>
                    <p>Muchas Gracias, recibimos tu consulta <strong>N°:{contactoID}</strong>. </p>
                    <hr />
                    <p className="mb-0">A la brevedad estaremos respondiendo tu consulta.</p>
                </div>
            </>
        )
    }
        </form>
    


        

    );

}

export default FormContacto