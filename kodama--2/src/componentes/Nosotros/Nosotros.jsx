import React from 'react'
import "./Nosotros.css"
import { Link, NavLink } from 'react-router-dom'
import FormContacto from '../FormContacto/FormContacto'


const Nosotros = () => {
    return (
        <div className='contenedor'>
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
            <article className='text' >
                <h5>Que es un Manga Café</h5>
                <p>En la Ciudad, antes y después de la pandemia, el número de bares con temática de manga y anime aumentó. Algunos ofrecen gastronomía típicamente Argentina, otros se inclinan por los platos nipones, pero en todos es posible sentarse a disfrutar de la lectura de estas historias de la cultura japonesa, en medio de un espacio ambientado con sus personajes.

                    El manga es una revista de historietas en papel cuya tirada puede ser semanal, mensual o bimestral. Su autor se llama "mangaka". Si esta publicación tiene éxito, el manga puede convertirse en un anime, el dibujo seriado en capítulos que se ve por TV o ahora desde plataformas.</p>
                <img src="../imagenes/4diapo.webp" className="imgText" alt="" />
            </article>
            <article className='text2'>
                < FormContacto />
            </article>




        </div>

    )
}

export default Nosotros