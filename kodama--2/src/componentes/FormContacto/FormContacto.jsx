import React from 'react'
import Boton from '../Boton/Boton';
import './FormContacto.css'

const FormContacto = () => {
    return (
        <div className="FormContacto">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Contacto</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido" />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Telefono de contacto" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
            <Boton button="Enviar"/>
        </div>
    );
    
}

export default FormContacto