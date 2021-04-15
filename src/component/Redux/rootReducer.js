import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import localStorageReducer from './localStorageProduct/localStorageReucer';
import productReducer from './ProductDetail/productReducer';
import renderReducer from './render/renderReducer';

const rootReducer = combineReducers ({
    cart : cartReducer,
    localStorage : localStorageReducer,
    product : productReducer,
    render : renderReducer
});

export default rootReducer;