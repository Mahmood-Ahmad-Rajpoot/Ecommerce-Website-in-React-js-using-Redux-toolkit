import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
}

const orderSlice = createSlice({
    initialState,
    name:'orders',
    reducers:{
        addOrder :(state, action)=>{
            const {product, quantity} = action.payload;
            state.products.push({product:product, quantity: quantity});

        }

    }
})

export const {addOrder} = orderSlice.actions
export default orderSlice.reducer;