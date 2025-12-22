import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        counterValue:0
    },
    reducers:{
        increment:(state,action)=>{
            console.log("increment(line:10)",action,state)
            state.counterValue +=1
        },
        decrement:(state,action)=>{
            state.counterValue -=1
        }
    }
})
const {reducer,actions}=counterSlice
const CounterSlice=reducer
const { increment,decrement }=actions
export {CounterSlice,increment,decrement}