import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    openModal: false,
}
const signInFirstSlice = createSlice({
    initialState,
    name:'signInFirst',
    reducers:{
        setOpenSignInFirstModal:(state)=>{
            state.openModal = true;

        },
        setCloseSignInFirstModal:(state)=>{
            state.openModal = false;


        }
    }

})

export const {setOpenSignInFirstModal,setCloseSignInFirstModal} = signInFirstSlice.actions;

export default signInFirstSlice.reducer;