
import { useState } from 'react';
import { db } from '../../services/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const LoginUser = () => {


        const [nombre, setNombre] = useState("");
        const [email, setEmail] = useState("");
        const [telefono, setTelefono] = useState("");
        const [contraseña, setContraseña] = useState("");
        const [contraseñaConfirmacion, setContraseñaConfirmacion] = useState("");
        const [usuario, setUsuario] = useState("");
        const [error, setError] = useState("");
        const [usuarioID, setUsuarioID] = useState("");
    
    
        const manejadorForm = (event) => {
            event.preventDefault();
    
            if (!nombre || !telefono || !email || !contraseña || !contraseñaConfirmacion || !usuario) {
                setError("Por favor complete todos los campos");
                return;
            }
    
            if (contraseña !== contraseñaConfirmacion) {
                setError("Las contraseñas no coinciden");
                return;
            }
    
            const loginUsuario = {
                nombre: nombre,
                email: email,
                telefono: telefono,
                contraseña:contraseña,
                contraseñaConfirmacion: contraseñaConfirmacion,
                usuario:usuario,
    
            }
    
            addDoc(collection(db, "Usuarios"), loginUsuario)
                .then((docRef) => {
                    setUsuarioID(docRef.id)
                    setNombre("");
                    setEmail("");
                    setTelefono("");
                    setContraseña("");
                    setContraseñaConfirmacion("");
                    setUsuario(docRef.usuario);
    
                })
                .catch((error) => {
                    setError("すみません. Disculpe . Se produjo un error al cargar los datos. Intente nuevamente.Gracias.");
                })
        }
    
    
        return (
            <form >
                <div className="FormContacto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Registrarse:</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido" onChange={(event) => setNombre(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Usuario: Totoro" onChange={(event) => setUsuario(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="********" onChange={(event) => setContraseña(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="********" onChange={(event) => setContraseñaConfirmacion(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Telefono de contacto" onChange={(event) => setTelefono(event.target.value)} />
                    </div>
                    
    
                    {error && <p style={{ color: "red" }} className='alert alert-danger'> {error} </p>}
                    <button onClick={manejadorForm} className='btn btn-secondary'>Registrarse</button>
                </div>
                {
            usuarioID && (
                <>
                    <hr />
                    <div className="alert alert-secondary" role="alert">
                        <h6 className="alert-heading">ありがとうございました。!</h6>
                        <p className="mb-0">Gracias por registrarse!.</p>
                    </div>
                </>
            )
        }
            </form>
        
    
    
            
    
        );
    
    }
    


export default LoginUser