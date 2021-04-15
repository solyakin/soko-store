import React from 'react';
import { Link } from 'react-router-dom';
import './checkout.css';
import Header from '../heading/header';
import Cart from '../right-banner/cart';
import PhoneContact from '../phone-contact/phoneContact';
import CodeVerification from '../codeVerification/codeVerification';
import MobileCodeVerification from '../codeVerification/mobileCodeVerification';


class Checkout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contact: '',
            isLoggedIn : false,
            isAddress : false,
            color : '#d3d3d3',
            background : '#fffff',
            display : 'flex',
            show : 'none',
            userCart : [],
            RequestNumber : 'none',
            verifyCodeDisplay : 'none'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.oldAddress = this.oldAddress.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.RequestNumber = this.RequestNumber.bind(this);
        this.verifyCode = this.verifyCode.bind(this);
        this.closeVerifyCode = this.closeVerifyCode.bind(this);
    }
    handleChange = (event) => {
        this.setState({contact : event.target.value})
    }
    handleClick = (event) => {
        event.preventDefault();
        if(this.state.contact !== ''){
            this.setState({isLoggedIn : true, show : 'block'})
        }
    }
    closePopUp = () => {
        this.setState({show : 'none'})
    }
    hidePhoneContact = () => {
        this.setState({RequestNumber : 'none'})
    }
    oldAddress =(event) => {
       this.setState({ color : '#2766CC', background : "#E9EFF9", display : "none", isAddress : true })
    }
    RequestNumber = () => {
        this.setState({RequestNumber : 'block'})
    }
    verifyCode =() => {
        this.setState({RequestNumber: 'none', verifyCodeDisplay : 'block'})
    }
    closeVerifyCode = () => {
        this.setState({verifyCodeDisplay : 'none'})
    }
    componentDidMount() {
        this.setState({userCart : JSON.parse(localStorage.getItem('cart'))}, () => console.log(this.state.userCart))
    }

    render(){
        let isLoggedIn = this.state.isLoggedIn;
        let isAddress = this.state.isAddress;
        let userCart = this.state.userCart;
        let show = this.state.show
        let showPhoneContact = this.state.RequestNumber;

        // calcluating Total
        let Total = 0;
        if(userCart.length >= 1){
            userCart.map(cartItem => {
                return cartItem.forEach(item => {
                    Total += item.price;
                })
            })
        }
        // else{
        //     Total += userCart.price;
        // }
        

        return(
            <div className="account">
                <Header/>
                <div className="account-content">
                    <div className="left">
                        <div className="account-info">
                            <div className="number">
                                <span>1</span>
                            </div>
                            
                            <div className='user-number'>
                                <h2>Account</h2>
                                {
                                    (!isLoggedIn) ? <div>
                                        <p>To place your order, log in by entering your 10 digit mobile phone number</p>
                                        <h5>Mobile Number</h5>
                                        <input type="number" id="number" value={this.state.value} onChange={this.handleChange}/>
                                        <button onClick={this.handleClick}>Login</button>
                                    </div> : <div>
                                            <p>You are securely logged in</p>
                                        </div>
                                } 
                            </div>
                            <CodeVerification show={show} closePopUp={this.closePopUp}/>
                        </div>
    
                        <div className="delivery-address">
                            <div className="number">
                                <span>2</span>
                            </div>
                            <div>
                                <h2>Delivery Address</h2>
                                <p>Select your delivery address from the existing one or add new one</p>
                                {
                                    (isLoggedIn) ?
                                    <div className="select-address" style = {{display: this.state.display}}>
                                        <div className="old-address" style={{border: `2px solid ${this.state.color}`, background : this.state.background}} onClick={this.oldAddress}>
                                            <h3>Shrey Karah</h3>
                                            <p>Quench Ville, Plot 12 Nkruma Rd, Kampala, Uganda</p>
                                            <p className="mobile">
                                                +256 76 633 4574
                                            </p>
                                        </div>
                                        <div className="new-address">
                                            <p>+ Add New Address</p>
                                        </div>
                                    </div>: []
                                }
                                {
                                    (isAddress) ? 
                                    <div className="other-text">
                                        <h3>Shrey Karah</h3>
                                        <p>Quench Ville, Plot 12 Nkruma Rd, Kampala, Uganda</p>
                                    </div> : ''
                                }

                            </div>
                        </div>
    
                        
                        <div className="payment">
                            <div className="number">
                                <span>3</span>
                            </div>
                            <div className="payment-section">
                                <h2>Payment</h2>
                                <p>select your payment method</p>
    
                                <div>
                                    <input type="radio" name="Cash on delivery method" id=""/>
                                    <p>Cash on delivery method</p>
                                </div>
                                {/* {
                                    isLoggedIn && isAddress && <div>
                                        
                                    </div>
                                } */}
                                <Link to="/closing">
                                    <button>Place Order</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="right"> 
                        <div className="bag">
                            <h2>Bag <span>0</span></h2>
                            <a href="!#">clear bag</a>
                        </div>
                        <hr className="toggle-line"></hr>
                        <div className="bag-content">
                            {
                                
                                (userCart.length >= 1) ?
                                    userCart.map((cartItem) => {
                                        return cartItem.map(({id, ...otherProps}) => {
                                            return <Cart key={id} {...otherProps}/>
                                        })
                                        
                                    }) : ''
                            }
                        </div>
                        <hr className="top-total-line"/>
    
                        <div className="subtotal-container">
                            <div className="subtotal">
                                <p>subtotal</p>
                                <span>UGX {Total.toLocaleString("en")}</span>
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
                                <span>UGX {Total.toLocaleString("en")}</span>
                            </div>
                            <p>Inclusive of all taxes</p>
                        </div>
                        <hr className="dotted-line"/>
    
                        <p className="msg">You are about to save UGX 27,000 on this order</p>

                        <div className="buttons">
                            <button onClick={this.RequestNumber}>Checkout</button>
                        </div>
                    </div>
                </div>

                <PhoneContact RequestNumber={showPhoneContact} closePopUp={this.hidePhoneContact} handleClick={this.handleClick} verifyCode={this.verifyCode}/>
                <MobileCodeVerification verifyCodeDisplay={this.state.verifyCodeDisplay} closeVerifyCode={this.closeVerifyCode}/>
            </div>
        )
    }
};
   
export default Checkout;