import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cartItems: [
    
  ]
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (!state.cartItems.includes(action.payload)) {
        // If it does not, add the item to the array
        state.cartItems.push(action.payload);

        // Save Cart items to local Strorage
      
      let cart = state.cartItems;
      localStorage.setItem('cart', JSON.stringify(cart));
      }
    },

    getCartItems: (state, action) => {
      
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(cart === null){
        state.cartItems=[]
      } else{
        state.cartItems = cart;
      }
      
    }
  },
})



// Action creators are generated for each case reducer function
export const { addItemToCart, getCartItems } = counterSlice.actions

export default counterSlice.reducer