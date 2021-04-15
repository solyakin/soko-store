import { PRODUCT_DETAIL } from "./productType"

const setSingleProduct = product => {
    return{
        type : PRODUCT_DETAIL,
        payload : product
    }
}

export default setSingleProduct;