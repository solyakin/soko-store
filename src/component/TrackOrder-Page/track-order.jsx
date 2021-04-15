import React from 'react';
import '../TrackOrder-Page/track-order.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../heading/header';
import images4 from '../../assets/images/images4.jpg';
import images5 from '../../assets/images/images5.jpg';
import { faCheckCircle, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const TrackOrder = ({cart}) => {

    return(
        <div className="track-order">
            <Header/>
            <div className="track-wrapper">
                <div className="target">
                    <FontAwesomeIcon icon={faCheckDouble} className="order-target"/>
                    <div className="">
                        <h5>Target</h5>
                        <p>25/05/2021, 01:55 PM |3 Items|UGX 1,600</p>
                    </div>    
                </div>
                <hr></hr>
                <div className="target">
                    <FontAwesomeIcon icon={faCheckCircle} className="order-shipped"/>
                    <div className="">
                        <h5>Order Confirmed</h5>
                        <p>25/05/2021, 01:55 PM |3 Items|UGX 1,600</p>
                    </div>
                </div>
                <hr></hr>
                <div className="target">
                    <FontAwesomeIcon icon={faCheckCircle} className="order-shipped"/>
                    <div className="">
                        <h5>Shipped</h5>
                        <p>25/05/2021, 01:55 PM |3 Items|UGX 1,600</p>
                    </div>
                </div>
                <hr></hr>
                <div className="target">
                    <FontAwesomeIcon icon={faCheckCircle}/>
                    <div className="">
                        <h5>Delivered</h5>
                        <p>25/05/2021, 01:55 PM |3 Items|UGX 1,600</p>
                    </div>
                </div>
                <hr></hr>

                <div className="order-items">
                    <h3>3 ITEMS</h3>
                    <div className="single-item">
                        <div className="product">
                            <img src={images4} alt=""/>
                            <p>Holiday Print Flannel Sheet set...</p>
                        </div>
                        <p>UGX 12,400</p>
                    </div>
                    
                    <div className="single-item">
                        <div className="product">
                            <img src={images5} alt=""/>
                            <p>Holiday Print Flannel Sheet set...</p>
                        </div>
                        <p>UGX 8,112</p>
                    </div>
                    <hr></hr>
                    
                    <div className="subtotal-container">
                        <div className="subtotal">
                            <p>subtotal</p>
                            <span>UGX 12,700</span>
                        </div>
                        <div className="delivery">
                            <p>Delivery</p>
                            <span>Free</span>
                        </div>
                    </div>
                    <hr className="dotted-line"/>

                    <div className="total-container">
                        <div className="total">
                            <h4>Total</h4>
                            <span>UGX 12,700</span>
                        </div>
                        <p>Inclusive of all taxes</p>
                    </div>
                    <hr className="dotted-line"/>
                    <p className="msg">You are about to save UGX 27,000 on this order</p>
                    <hr></hr>
                </div>

                <div className="delivery-record">
                    <h3>YOUR DELIVERY DETAILS</h3>
                    <h4>Shrey Karan</h4>
                    <p>Cash on delivery</p>
                    <p className="mobile">+256 76 633 4574</p>
                    <p>Quench Ville, Plot 12 Nkruma Rd, Kampala, Uganda</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        cart : state.cart.cart
    }
}
export default connect(mapStateToProps)(TrackOrder);