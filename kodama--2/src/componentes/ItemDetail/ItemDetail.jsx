import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, cat, detalle, stock, img }) => {
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
                <ItemCount stock={stock} inicial={1} />
            </div>
        </div>

    )
}

export default ItemDetail