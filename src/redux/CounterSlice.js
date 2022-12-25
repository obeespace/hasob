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
      state.cartItems.push(action.payload)
    },
  },
})

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}


// Action creators are generated for each case reducer function
export const { increment, decrement, addItemToCart } = counterSlice.actions

export default counterSlice.reducer