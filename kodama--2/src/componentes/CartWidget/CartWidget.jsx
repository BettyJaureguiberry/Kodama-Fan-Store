import './CartWidget.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import LoginUser from '../LoginUser/LoginUser';




const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3394/3394009.png"
  const imglogin = "https://cdn.imgbin.com/1/11/16/imgbin-kodama-studio-ghibli-line-art-silhouette-totoro-vFtWDfFacX9m01qKXCsVEb01g.jpg"





  return (
    <div className='loginCart'>
      <Link to='/LoginUser'>
        <div className='conjunto'>
          <img className='login' src={imglogin} alt="Login" />
          <p>Registrarse</p>
          
        </div>
      </Link>
      


      <Link to='/cart'>
        <div className='conjunto'>
          <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
          <p className='cantCarrito'>{totalCantidad} </p>

        </div>

      </Link>
    </div>


  );
}



export default CartWidget

