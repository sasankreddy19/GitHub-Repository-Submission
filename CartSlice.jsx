// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []  // Each item can be an object with id, name, price, quantity, etc.
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds an item to the cart. If the item already exists, it increments the quantity.
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    // Removes an item from the cart based on its id.
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    // Updates the quantity of an existing item in the cart.
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

// Export the actions to use them in your components.
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to be included in your store.
export default cartSlice.reducer;

