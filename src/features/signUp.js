import { createSlice } from "@reduxjs/toolkit";
import { profile } from '../assets'

const initialState = {
  edit: false,
  profilePicture: profile,
  name: "root",
  email: "",
  password: "1234",
  pinCode: "",
  address: "",
  country: { code: "PK", label: "Pakistan", phone: "92" },
  bankNumber: "",
  bankName: "",
  IFCScode: "",
  city: "",
};
const signUpSlice = createSlice({
  initialState,
  name: "signUp",
  reducers: {
    setEdit:(state)=>{
        state.edit = !state.edit;

    },
    signUpData: (state, action) => {
      const { name, password, email } = action.payload;
      state.name = name;
      state.password = password;
      state.email = email;
     },
    setCountry: (state, action) => {
      state.country = action.payload;
    },

    setProfilePicture: (state, action) => {
         state.profilePicture = action.payload;
    },

    updateProfileData: (state, action) => {
      const {
        name,
        email,
        password,
        pinCode,
        address,
        city,

        bankNumber,
        bankName,
        IFCScode,
      } = action.payload;

      state.name = name;
      state.email = email;
      state.password = password;
      state.pinCode = pinCode;
      state.address = address;
      state.city = city;
      state.bankName = bankName;
      state.bankNumber = bankNumber;
      state.IFCScode = IFCScode;
    },
  },
});
export const {setEdit, signUpData, updateProfileData, setCountry, setProfilePicture } =
  signUpSlice.actions;
export default signUpSlice.reducer;
