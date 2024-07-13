import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.items.push(product);
      }

      state.subtotal += product.price * product.quantity;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item) {
        state.subtotal -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== productId);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item) {
        state.subtotal += item.price * quantity;
        item.quantity += quantity;

        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== productId);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;