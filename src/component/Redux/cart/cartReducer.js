import { CART_PRODUCT } from "./cartType";

const initialState = {
    cart : []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CART_PRODUCT : return{
            ...state,
            cart : action.payload
        }
        default : 
            return state

    }
}

export default cartReducer;