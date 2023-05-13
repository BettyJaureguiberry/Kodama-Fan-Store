import { useState, useContext, useEffect } from 'react'

import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc, doc, query, updateDoc, onSnapshot } from 'firebase/firestore'
import "./Checkout.css"


const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const [productos, setProductos] = useState([])

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    useEffect(() => {
        const q = query(collection(db, "productos"))

        const modificar = onSnapshot(q, function (querySnapshot) {
            const docs = []
            querySnapshot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() })
            })
            setProductos(docs)
        })
        return () => {
            modificar()
        }
    }, [])

    const modificarStock = (id, cantidad) => {
        const productRef = doc(db, "productos", id)
        const producto = productos.find(prod => prod.id === id)
        if (producto) {
            updateDoc(productRef, { stock: producto.stock - cantidad })
                .then(() => console.log(`Se compro ${productRef}`))
                .catch((error) => console.error(error))

        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }


        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }



        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            direccion,
            telefono,
            email
        }
        orden.items.map(prod => (modificarStock(prod.id, prod.cantidad)))


        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);

                vaciarCarrito();

            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva más tarde");
            })

    }

    return (
        <div className='ordenCompra'>
            <h5> Orden de Compra</h5>
            <form onSubmit={handleSubmit}>
                {carrito.map((producto) => (
                    <div className="alert alert-light" key={producto.item.id}>
                        <h5 className="titulo">
                            {producto.item.nombre}
                        </h5>
                        <p>Cantidad: {producto.cantidad} unidades</p>
                        <p>Precio $: {producto.item.precio} </p>



                    </div>

                ))
                }
                <hr />
                <h5 className='alert alert-secondary'>Total $: {total} </h5>
                <hr />

               <p>Por favor complete los siguientes datos:</p>
                <div className='casillasForm'>
                    <div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre:</span>
                            <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" aria-describedby="basic-addon2" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            <span className="input-group-text" id="basic-addon2">Apellido:</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Direccion:</span>
                            <input type="text" className="form-control" placeholder="Direccion" aria-label="direccion" aria-describedby="basic-addon1" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="+54 11 1234 5678" aria-label="Telefono" aria-describedby="basic-addon2" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            <span className="input-group-text" id="basic-addon2">Telefono:</span>
                        </div>
                        <div className="mb-3">
                            
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon3">Email:</span>
                                <input type="email" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-text" id="basic-addon4">xxxxx@xxxx.com o xxxxx@xxxx.com.ar </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="basic-url" className="form-label">Confirmacion de Email</label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon3">Email:</span>
                                <input type="email" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                            </div>
                            <div className="form-text" id="basic-addon4">Verifique que los datos ingresados coincidan.</div>
                        </div>
                        
                    </div>
                </div>
                {error && <p style={{ color: "red" }} className='alert alert-danger'> {error} </p>}
                <button type='submit' className="btn btn-secondary">Finalizar Compra</button>
            </form>
            {
                ordenId && (
                    <>
                    <hr />
                        <div className="alert alert-secondary" role="alert">
                            <h4 className="alert-heading">ありがとうございました。!</h4>
                            <p>Muchas Gracias, recibimos tu pedido con el número de <strong>Orden:{ordenId}</strong>. </p>
                            <hr />
                            <p className="mb-0">Esperamos que vuelvas a visitarnos!.</p>
                        </div>

                    </>
                )
            }

        </div>
    )
}

export default Checkout