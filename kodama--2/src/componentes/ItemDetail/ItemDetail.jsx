import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, cat, detalle, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad]= useState (0);
    
    const {agregarProducto}= useContext(CarritoContext);
    
    const manejadorCant=(cantidad)=> {
        setAgregarCantidad (cantidad);
        console.log("Productos agregados al carrito:" + cantidad);

        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);

    }
           
    return (

        <div className="card text-center contenedorDetail">
            <h5 className="card-header">
                {nombre}
            </h5>
            <div className="card-body">
                <img src={img} alt={nombre} />
                <p>ID: {id} Categoria: {cat} </p>
                <p className="card-title"> {detalle} </p>
                <strong className="card-text">Precio:${precio} </strong>
            </div>
            <div className="card-footer text-muted">
                {
                    agregarCantidad > 0 ? ( <Link to="/cart" className="btn btn-dark btnCarrito"> Terminar Compra</Link>) : <ItemCount stock={stock} inicial={1} funcionAgregar ={manejadorCant} />
                    
                    
                 
                }
                
                <Link to="/" className="btn btn-success btnCarrito"> Continuar Compra</Link>


            </div>
        </div>

    )
}

export default ItemDetail
