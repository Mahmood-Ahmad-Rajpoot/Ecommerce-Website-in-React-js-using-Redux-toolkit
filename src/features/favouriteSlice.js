import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isFav: [],
};

const favouriteSlice = createSlice({
  initialState,
  name: "favouriteProducts",
  reducers: {
    checkFavourite: (state, action) => {
      const { id } = action.payload;
      const p = state.products.find((p) => p.id === id);

      if (p) state.isFav.push(action.payload.id);
    },
    addFavouriteProduct: (state, action) => {
      state.products.push(action.payload);
      state.isFav.push(action.payload.id);
     },
    removeFavouriteProduct: (state, action) => {
      const { id } = action.payload;
      const filteredArray = state.products.filter((item) => item.id !== id);
      state.products = filteredArray;
      const filterFav = state.isFav.filter((item) => item !== id);
      state.isFav = filterFav;
    },
  },
});
export const { addFavouriteProduct, removeFavouriteProduct, checkFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
