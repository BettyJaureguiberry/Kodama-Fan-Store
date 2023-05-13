import React from 'react'
import "./Nosotros.css"
import { Link, NavLink } from 'react-router-dom'
import FormContacto from '../FormContacto/FormContacto'
import MenuLat from '../MenuLat/MenuLat'


const Nosotros = () => {
    return (
        <div className='contenedor'>
            < MenuLat />
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