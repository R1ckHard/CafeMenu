import {combineReducers} from 'redux';
import {cartReducer} from './reducers/cartReducer';

export const rootReducer = combineReducers({
    cartStore: cartReducer,
});
