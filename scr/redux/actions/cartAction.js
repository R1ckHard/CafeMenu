import {ADD_TO_CART} from '../types';
import {DELETE_FROM_CART} from '../types';


export const setItemToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data
});
export const deleteItemFromCart = (data) => ({
    type: DELETE_FROM_CART,
    payload: data
});
