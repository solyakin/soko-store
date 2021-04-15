import { PRODUCT_DETAIL } from "./productType"

const initialState = {
    singleProduct : []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_DETAIL : 
        return{
            ...state,
            singleProduct : action.payload
        }
        default:
            return state
    }
} 
export default productReducer;