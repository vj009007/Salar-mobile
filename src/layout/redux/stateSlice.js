/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: "",
  orderSummary: "",
  payment: "",
};

export const stateSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cart: (state, action) => {
      state.cart = action.payload;
    },
    orderSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
    payment: (state, action) => {
      state.payment = action.payload;
    },
    extraReducers: builder => {
      builder
        .addCase(cart.pending, state => {
          state.status = "loading";
        })
        .addCase(cart.fulfilled, (state, action) => {
          state.status = "idle";
          state.cart += action.payload;
        });
    },
  },
});

export const { cart, orderSummary, payment, extraReducers } =
  stateSlice.actions;
// export const StateManagement = state => state.cart;
export default stateSlice.reducer;
