import React from 'react'
import { getUnProducto } from '../../asyncmock'
import  {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const[producto, setProducto]= useState(null);

    const {idItem} = useParams();


    useEffect(()=> {
        getUnProducto(idItem)
            .then (res => setProducto (res))
    }, [idItem])
    return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer