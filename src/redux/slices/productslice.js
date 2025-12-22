import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        addToCart: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state, action) => {
            const foundItem = state.addToCart.find((item) => {  
                if (item.id === action.payload.id) {
                    return true
                }
            })
            console.log(foundItem);
            if (!foundItem) {
                state.addToCart.push(action.payload)   
            }
        }
    }
})
const {reducer,actions}=productSlice
const ProductReducer=reducer
const {setProducts,addToCart}=actions
export {ProductReducer,setProducts,addToCart}