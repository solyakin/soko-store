import { CART_PRODUCT} from './cartType';

export const cartProducts = cart => {
    return{
        type: CART_PRODUCT,
        payload: cart
        }
}