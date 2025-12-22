import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./slices/productslice.js";
import { CounterSlice } from "./slices/counterSlice.js";
const store = configureStore({
    reducer:{
        ProductReducer,
        CounterSlice
    }
})
export default store;