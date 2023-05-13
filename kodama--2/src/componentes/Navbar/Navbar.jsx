import React from 'react'
import ListaDesplegable from '../ListaDesplegable/ListaDesplegable'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to= {"/"} >
                    <img className="logo" src="../imagenes/logo3.png" alt="" />
                </Link>
                <a className="navbar-brand" style={{ width: '15rem' }} href="www.kodamafanstore.com.ar">Kodama Fan Store</a>
                <ListaDesplegable a={"Nosotros"}  a3={"Ofertas"} a4={"Remeras"} a5={"Figuras"} />
              
                <CartWidget />
            </div>
        </nav>
        
    )
}

export default Navbar