import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers:{
        addItem: (state,action)=>{
            //console.log(action.payload)
            state.value.push(action.payload)
        },

    },
}) 

export const {addItem}=cartSlice.actions
export default cartSlice.reducer