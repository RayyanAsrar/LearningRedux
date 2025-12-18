import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        counterValue:0
    },
    reducers:{
        addTodo:(state,action)=>{
            console.log("addTodo(line:10)",action,state)
            state.counterValue +=1
        },
        minusTodo:(state,action)=>{
            state.counterValue -=1
        }
    }
})
const {reducer,actions}=counterSlice
const CounterSlice=reducer
const { addTodo,minusTodo }=actions
export {CounterSlice,addTodo,minusTodo}