import React from 'react'
import logo2 from './assets/logo2.png'

const ItemListContainer = ({greeting}) => {
    
    return (
        
        <div className="card" style={{ width: '15rem' }}>
            <img src={logo2} className="card-img-top" alt="logo Kodama" />
            <div className="card-body">
                <p className="card-text">{greeting}</p>
            </div>
        </div>
    );


}

export default ItemListContainer