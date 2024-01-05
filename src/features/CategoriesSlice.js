import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    category:'',
}

const categoriesSlice =createSlice({
    name:'categories',
    initialState,

    reducers:{
        categoryProducts:(state,action)=>{
            state.category = action.payload;
 
        }

    }
})
export const  {categoryProducts} = categoriesSlice.actions
export default categoriesSlice.reducer;