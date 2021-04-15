import React from 'react';
import '../right-banner/cart.css';

const Cart = ({id, imageUrl, name, price, amount}) => {
    console.log(name)
    return(
        <div className="right-banner">
            <div className="cart-content">
                <img src={imageUrl} alt={name}/>
                <div className="item-details">
                    <p>{name}</p>
                    <p>UGX {price}</p>
                </div>
                
                <div className="count">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;