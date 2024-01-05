import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:'',
}

const productDataSlice = createSlice({
    name:'productDataSlice',
    initialState,
    reducers:{
        setProduct:(state, action)=>{
           

            state.product = action.payload
           

        }

    }
})

 export const {setProduct} = productDataSlice.actions;

export default productDataSlice.reducer