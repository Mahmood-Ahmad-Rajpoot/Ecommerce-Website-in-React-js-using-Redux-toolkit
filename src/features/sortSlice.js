import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products: [],
    sort:false,
}
const sortSlice = createSlice({
    initialState,
    name:'filteredProducts',
    reducers:{
        addSortedProducts:(state,action)=>{
            state.sort =true;
            state.products.push(action.payload)

        }
    }
})
export const {addSortedProducts} = sortSlice.actions;
export default sortSlice.reducer;