import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

import CartItem from "../CartIem/CartItem"
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);


    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <>
                <h5 className="alert alert-dark alerta">No hay productos en el carrito. Desea ver mas <Link to='/'className="textoProd"> Productos </Link></h5>
                

            </>
        )
    }

    return (
      <div className="card-footer text-muted cartButtons">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <button  className="btn btn-danger button" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            
            <Link to='/checkout' className="btn btn-secondary button"> Finalizar Compra </Link>
        </div>
    )
 
}

export default Cart
