import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

//REDUCERS
import {cartReducer} from './reducers/cartReducer'
import {getProductsReducer, getProductDetailsReducer} from './reducers/productReducers'


const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const addressFromLocalStorage = localStorage.getItem("billingAddress") ? JSON.parse(localStorage.getItem("billingAddress")) : {}
const shipaddressFromLocalStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}



const INITIAL_STATE = {
 
    cart: {
        cartItems: cartFromLocalStorage,
        billingAddress: addressFromLocalStorage,
        shippingAddress: shipaddressFromLocalStorage,
        paymentMethod: 'PayPal'
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
