import './CartItem.css'
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from 'react';



const CartItem = ({ item, cantidad }) => {

 const {eliminarProducto}=useContext (CarritoContext);
    
  return (

    <div className="card text-center mb-3 " style={{ width: '30rem' }}>

      <div className="card-body cardCart">
        <h4 className="card-title"> {item.nombre} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: $ {item.precio} </p>
        <button className="btn btn-danger" onClick={() => eliminarProducto(item.id)} > Eliminar </button>
      </div>
    </div>


  )
}

export default CartItem