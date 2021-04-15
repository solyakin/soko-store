import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../heading/header';
import LeftBannner from '../left-banner/left-banner';
import MiddleBannner from '../middle-banner/midddle-banner';
import Cart from '../right-banner/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../landing-page/landing-page.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BottomBanner from '../bottom-banner/bottom-banner';
import Footer from '../footer/footer';
import { cartProducts } from '../Redux/cart/cartActions';
                
const LandingPage = ({ localStorageProduct, state, cartProducts }) => {   
    const [cart, setCart] = useState([]);
    let bagCount = cart.length; 

    let handleClick = (event) => {
        event.preventDefault()
        let ButtonIndex = Number(event.target.id);
        let array = localStorageProduct.map(({items}) => {
            return items.filter(item => item.id === ButtonIndex)
        }).filter(y => y !== undefined);
        array.map(item => {
            setCart(prevState => [...prevState, item])
        })
    }        
    //storing user's selected item to local storage
    let storeCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

        return(
            <div className="landing-page">
                <Header/>
                <div className="main-content">
                    <div className="left">
                         <LeftBannner/>
                    </div>
    
                    <div className="middle">
                        <div className="search-bar">
                            <input type="text" placeholder="search for products.."/>
                            <FontAwesomeIcon icon={faSearch} color= {'#9c9c9c'} className="search-btn"/>
                        </div>

                        <div className="products-wrapper">
                            {
                                localStorageProduct.map(({id, title, items}) => (
                                    (id === state) ? 
                                    <div className="content">
                                        <h3>{title} <span>12</span></h3>
                                        {
                                            items.map(({id, ...otherProps}) => (
                                                <MiddleBannner  key={id} id={id} {...otherProps} handleClick={handleClick} localStorageProduct ={localStorageProduct}/>
                                            ))
                                        }
                                        
                                    </div> : ''
                                ))
                            }
                        </div>
                    </div>
                    <div className="right">
                        <h3>Bag <span>{bagCount}</span></h3>
                        {
                            // (cart) ? 
                            cart.map( item => {
                                return item.map(({id, ...otherCartProps}) => (
                                    <Cart key={id} id={id} {...otherCartProps}/>
                                ))
                            })

                            
                            // : 
                            // <div className="cart-content">
                            //     <h4>It's empty here</h4>
                            //     <p>Start shopping to add items to your bag</p>
                            // </div>
                            
                        }
                        <Link to="/checkout">
                            <button onClick={storeCart}>Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
                <BottomBanner/>
                <Footer/>
             </div>
        )
}

const mapStateToProps = product => {
    return{
    localStorageProduct : product.localStorage.localStorageProduct,
    state : product.render.state,
    cart : product.cart.cart
    } 
}
const mapDispatchToProps = dispatch => {
    return{
        cartProducts : cart => dispatch(cartProducts(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);