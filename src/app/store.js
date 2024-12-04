
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice.js'
import  cartReducer  from "../features/cart/cartSlice.js";


export default configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer,
    }
})