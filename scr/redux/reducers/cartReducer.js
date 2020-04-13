import {ADD_TO_CART} from '../types';
import {DELETE_FROM_CART} from '../types';


const initialState = {
    cartItems: [
        {
            amount: '2',
            name: 'Crispy Chicken Sandwich Meal',
            img: 'https://toppng.com/uploads/preview/spicy-crispy-chicken-sandwich-11549663243blu5lqepri.png',
            description: '1 Crispy Chicken Sandwich, 1 Small French Fries, 1 Small Soft Drink',
            price: '4',
            id: '4',
        },
        {
            amount: '4',
            name: '2 Original Chicken Sandwich & 2 Small Fries',
            img: 'https://hip2save.com/wp-content/uploads/2012/09/screen-shot-2012-09-07-at-1-04-05-pm.png?resize=478%2C138&strip=all',
            description: 'very tasty',
            price: '4.99',
            id: '5',
        }],
};
export const cartReducer = (state = initialState, action) => {
    console.log(state, ' store');


    switch (action.type) {
        case ADD_TO_CART:
            if (state.cartItems.some((item) => item.name === action.payload.name)) {
                state.cartItems.forEach(function (element) {
                    if (element.name === action.payload.name) {
                        element.amount = Number(element.amount) + Number(action.payload.amount);
                        console.log(state, ' added amount');
                    }
                });
                return {
                    ...state,
                };
            } else {
                console.log(state, ' not added amount');

                return {
                    ...state,
                    cartItems: state.cartItems.concat(action.payload),
                };
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};
