import React from 'react'
import './ListaDesplegable.css'
import { useState, useEffect } from 'react'
import { NavLink, Link} from 'react-router-dom'

const ListaDesplegable = (props) => {
    const [categoria, setCategoria]=useState("");

    useEffect(() => {
        document.title=`${categoria}`;}, [categoria])

        const handleClick = (categoria)=> {setCategoria(categoria);
        }
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <div className="nav-item">
                    <NavLink to={`/categoria/Nosotros`}>
                    <li className="nav-link" aria-current="page"  onClick={() => handleClick('Nosotros')}>{props.a} </li>
                    </NavLink>
                </div>
                
                <div className="nav-item">
                    <NavLink to={`/categoria/4`}>
                    <li className="nav-link" onClick={() => handleClick('Ofertas')}>{props.a3}</li>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={`/categoria/3`}>
                    <li className="nav-link" onClick={() => handleClick('Remeras')}>{props.a4}</li>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={`/categoria/2`}>
                    <li className="nav-link" onClick={() => handleClick('Figuras')}>{props.a5}</li>
                    </NavLink>
                </div>
                
            </ul>
        </div>
    )
}

export default ListaDesplegable