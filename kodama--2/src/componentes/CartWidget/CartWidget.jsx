import './CartWidget.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext} from '../../context/CarritoContext';
import LoginUser from '../LoginUser/LoginUser';
import Usuario from '../Usuario/Usuario';
import LinkCondicional from '../LinkCondicional/LinkCondicional';
import { LoginContext } from '../../context/LoginContext'



const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);
  const { loged } = useContext(LoginContext)
  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3394/3394009.png"
  





  return (
    <>
    <div className='conjunto'>

      {
            loged ? (<Usuario />) : (<LinkCondicional />)
          }
       </div> 
       <div className='loginCart'>
      <Link to='/cart'>
        <div className='conjunto'>
          <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
          <p className='cantCarrito'>{totalCantidad} </p>

        </div>

      </Link>
    </div>
  </>



  );
}



export default CartWidget

