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
                    <NavLink to={`/categoria/Ofertas`}>
                    <li className="nav-link titMenu" onClick={() => handleClick('Ofertas')}>{props.a3}</li>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={`/categoria/Remeras`}>
                    <li className="nav-link titMenu" onClick={() => handleClick('Remeras')}>{props.a4}</li>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={`/categoria/Figuras`}>
                    <li className="nav-link titMenu" onClick={() => handleClick('Figuras')}>{props.a5}</li>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <Link to={`/Nosotros`}>
                    <li className="nav-link titMenu" onClick={() => handleClick('')}>Nosotros</li>
                    </Link>
                </div>
                
            </ul>
        </div>
    )
}

export default ListaDesplegable