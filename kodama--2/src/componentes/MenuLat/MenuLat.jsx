import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuLat = () => {
    return (
        
            <article>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="../imagenes/3diapo.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">いらっしゃいませ</h5>
                        <p className="card-text">Bienvenidos a Kodama Fan Store.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <NavLink to={`/categoria/Ofertas`} className="list-group-item">Ofertas</NavLink>
                        <NavLink to={`/categoria/Remeras`} className="list-group-item">Remeras</NavLink>
                        <NavLink to={`/categoria/Figuras`} className="list-group-item">Figuras</NavLink>
                        <li className="list-group-item">Manga</li>
                        <li className="list-group-item">Comic</li>
                        <li className="list-group-item">Libros</li>
                        <li className="list-group-item">Contacto</li>
                    </ul>
                    <hr />
                    <article className='redes'>
                        <div className='ig'>
                            <img src="../imagenes/ig.png" alt="Instagram" className='imgRedes' />
                            <p>@kodamafanstore</p>
                        </div>
                        <div className='ws'>
                            <img src="../imagenes/ws.png" alt="Ws" className='imgRedes' />
                            <p>+54 11 3100 2909</p>
                        </div>
                        <div className='tiktok'>
                            <img src="../imagenes/tiktok.webp" alt="tiktok" className='imgRedes' />
                            <p>@kodamafanstore</p>
                        </div>

                    </article>
                    </div>
                    </article>
    )
      }
                 export default MenuLat