import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: [
    {
      product: {
        id: 123,
        title: "What a product",
        price: 499,
        rating: 4.5,
        discountPercentage: 12,
        images: ["https://source.unsplash.com/random"],
        description: `Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services.`,
      },
      quantity: 2,
    },
    {
      product: {
        id: 1234,
        title: "Great tea ",
        price: 600,
        rating: 3.5,
        discountPercentage: 10,
        images: ["https://source.unsplash.com/random/2"],
        description: `Natural user behavior: In the interaction In the interaction with the system, the designer should fully understand the with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services.`,

      },
      quantity: 1,
    },
  ],
  noOfItems: 3,
  total: 0,
};
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;

      let found = false; //to check the existence of same product in the cart
      state.cartItems.map((item) => {
        if (item.product.id === product.id) {
          item.quantity += quantity;
          state.noOfItems += quantity;
          state.total += quantity * product.price;
          found = true;
          return;
        }
      });
      //
      if (found) {
        return;
      } else {
        state.noOfItems += quantity;
        state.total += quantity * product.price;
        state.cartItems.push({ product: product, quantity: quantity });
      }
    },

    removeItem: (state, action) => {
      // eliminating quantity and total of the removed item
      let quantityToRemove = 0;
      let totalAmountRemove = 0;
      state.cartItems.map((item, index) => {
        if (action.payload === index) {
          quantityToRemove = item.quantity;
          totalAmountRemove = item.product.price * item.quantity;
        }
      });
      // removing item
      const items = state.cartItems.filter((p, i) => {
        return action.payload !== i;
      });
      // Update the state with the filtered items
      state.cartItems = items;
      state.noOfItems -= quantityToRemove;
      state.total -= totalAmountRemove;
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.map((p) => {
        const { product, quantity } = p;
        total += product.price * quantity;
      });
      state.total = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      state.noOfItems = 0;
    },
  },
});
export const { addToCart, removeItem, calculateTotal, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
