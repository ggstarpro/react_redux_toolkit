import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart/CartSlice"
import modalReducer from "./features/cart/ModalSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});