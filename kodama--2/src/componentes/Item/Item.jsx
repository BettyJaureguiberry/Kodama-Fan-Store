
import './item.css'
import { Link } from 'react-router-dom'





const Item = ({ id, nombre, precio, img, idCat,stock }) => {
  return (

    <div className="card text-center mb-3 cardProd" style={{ width: '18rem' }}>

      <div className="card-body">

        <img src={img} className="card-img-top" alt={nombre} />

        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: $ {precio} </p>
        <p className="card-text">Id: {id} Categoria: {idCat} </p>
        <p className="card-text">Stock {stock} </p>
        <Link to={`/item/${id}`} className="btn btn-secondary">Ver Detalles </Link>

      </div>

    </div >

  )
}


export default Item