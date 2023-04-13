import React from 'react'
import { useState, useEffect } from 'react'
import './ItemCount.css'


const ItemCount = ( {stock, inicial}) => {
    //let inicial = 1;
    //let maximo = 10;

    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
     const agregarCarrito =() => {
        console.log (`Se agrego al Carrito ${contador} items`)
     }

    return (
        <>
             <button type="button" className="btn btn-secondary" onClick={decrementar}>-</button>
            <strong> {contador}  </strong>
            <button type="button" className="btn btn-secondary" onClick={incrementar}>+</button>
            <button type="button" className="btn btn-dark btnCarrito" onClick={agregarCarrito}>Agregar al Carrito</button>

        </>
    )
}

export default ItemCount