import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    signIn:false,
    email:null,
    name:null,
    logOutModal:false, 
    password:null,
}

const signInSlice = createSlice({
    name:"signIn",
    initialState,
    reducers:{
        setSignIn:(state,action)=>{
            state.signIn =true;

        },

        setSignOut:(state)=>{
            state.signIn =false;


        },
        OpenLogOutModal:(state)=>{
            state.logOutModal = true;


        },
        closeLogOutModal:(state)=>{
            state.logOutModal = false;


        }

        
    }
})
export const  {setSignIn, setSignOut, OpenLogOutModal, closeLogOutModal} = signInSlice.actions
export default signInSlice.reducer;