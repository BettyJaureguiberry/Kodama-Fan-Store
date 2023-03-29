import React from 'react'


const ListaDesplegable = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{props.a} </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.a2}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.a3}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.a4}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.a5}</a>
                </li>
                
            </ul>
        </div>
    )
}

export default ListaDesplegable