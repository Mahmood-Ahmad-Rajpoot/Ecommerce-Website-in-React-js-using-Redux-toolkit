import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products: [],
    filter:false,
}
const filterSlice = createSlice({
    initialState,
    name:'filteredProducts',
    reducers:{
        addFilteredProducts:(state,action)=>{
            state.filter=true;
            state.products.push(action.payload)

        }
    }
})
export const {addFilteredProducts} = filterSlice.actions;
export default filterSlice.reducer;