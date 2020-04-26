import { combineReducers } from 'redux';
import product from './product';

const appReducer = combineReducers({
    product: product
});

export default appReducer;


