import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./features/CategoriesSlice";
import productPageDataSlice from "./features/productPageDataSlice";
import CartSlice from "./features/CartSlice";
import buySlice from "./features/buySlice";
import favouriteSlice from "./features/favouriteSlice";
import signInSlice from "./features/signInSlice";
import signUp from "./features/signUp";
import signInFirstModalSlice from "./features/signInFirstModalSlice";
import ordersSlice from "./features/ordersSlice";
import filterSlice from "./features/filterSlice";
import sortSlice from "./features/sortSlice";

export const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    productDataSlice: productPageDataSlice,
    cart: CartSlice,
    buyProduct: buySlice,
    favouriteProducts: favouriteSlice,
    signIn:signInSlice,
    signUp:signUp,
    signInFirstModal:signInFirstModalSlice,
    orders:ordersSlice,
    filtered:filterSlice,
    sorted:sortSlice,

  },
});
