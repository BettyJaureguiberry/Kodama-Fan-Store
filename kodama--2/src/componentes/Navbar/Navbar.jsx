import React from 'react'
import ListaDesplegable from '../ListaDesplegable/ListaDesplegable'
import Carrito from '../Carrito/Carrito'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ width: '15rem' }} href="#">Kodama Fan Store</a>
                <ListaDesplegable a={"Nosotros"} a2={"Como Comprar"} a3={"Ofertas"} a4={"Remeras"} a5={"Figuras"}/> 
                <Carrito/>
            </div>
        </nav>
    )
}

export default Navbar