import React from 'react';
import { Link } from 'react-router-dom';
import './closing-page.css';
import image from '../../assets/images/43146.jpg';
import Header from '../heading/header';


const ClosingPage = (props) => {
    return(
        <div className="checkout">
            <Header/>
            <div className="checkout-content">
                <img src={image} alt="" width="150px"/>
                <h3>Thank You!</h3>
                <h3>Your order has been placed succesfully</h3>
                <p>Your will recieve a confirmation message as soon as your order is accepted</p>
                <p className="order-number">Order Number : <span>John-37e4</span></p>

                <div className="buttons">
                    <Link to="/flags">
                        <button>Track Order</button>
                    </Link>
                    <Link to="/">
                        <button>Continue Shopping</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default ClosingPage;