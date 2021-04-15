import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './component/landing-page/landingPage';
import SHOP_DATA from './assets/products';
import ProductDetail from './component/product-detail/product-detail';
import Checkout from './component/checkout-page/checkout';
import TrackOrder from './component/TrackOrder-Page/track-order';
import ClosingPage from './component/Closed-Page/closing-page';
import Account from './component/Account/Account';
import setLocalStorage from './component/Redux/localStorageProduct/localStorageAction';
import Category from './component/categories/categories';
import MobileMenu from './component/mobile-menu/mobile-menu'

class App extends React.Component {
  constructor(){
    super();
    this.state  = {
      products : SHOP_DATA
    }
    this.processCart = this.processCart.bind(this);
  }

  processCart = () => {
      //storing user's selected item to local storage
      let cartLocalStorage = localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }
  
  componentDidMount(){
      //storing all products to local storage and state
      localStorage.setItem('product', JSON.stringify(this.state.products));
      this.props.setLocalStorage(JSON.parse(localStorage.getItem('product')));
  } 
  
  render(){
    // let bagCount = this.state.cart.length;
    return(
      <div className='app'>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/product-detail'>
              <ProductDetail/>
            </Route> 
            <Route exact path='/checkout' component={Checkout}/>
            <Route exact path='/closing' component={ClosingPage}/>
            <Route exact path='/flags' component={TrackOrder}/>
            <Route exact path='/account' component={Account}/>
            <Route exact path='/category' component={Category}/>
          </Switch>
          <MobileMenu/>
      </div>
    )
  }
  
}

const mapStateToProps = product => {
  return{
  localStorageProduct : product.localStorage.localStorageProduct
  }
  
}

const mapDispatchToProps = dispatch => {
  return{
    setLocalStorage : products => dispatch(setLocalStorage(products))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);