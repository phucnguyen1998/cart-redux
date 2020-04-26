import { combineReducers } from 'redux';
import products from './products';

const appReducer = combineReducers({
    products: products
});

export default appReducer;


