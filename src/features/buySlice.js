import { createSlice } from "@reduxjs/toolkit";
const initialState={
    product:'',
    quantity:0,
    index:0,
}
const buySlice = createSlice({
    name:'BuyProduct',
    initialState,
    reducers:{
        addBuyProducts:(state,action)=>{
            const {product, quantity,index} =action.payload
            state.product = product;
            state.quantity = quantity;
            state.index = index;
            

        }
    }

})
export const {addBuyProducts} = buySlice.actions;
export default buySlice.reducer;