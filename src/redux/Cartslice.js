import { createSlice } from '@reduxjs/toolkit'



export const Cartslice = createSlice({
  name: 'cart',
  initialState:{
    cart:[]
  },
  
  reducers: {
    addtocart:(state,action)=>{
        state.cart.push(action.payload)
    }
  },
})


export const { addtocart } = Cartslice.actions

export default Cartslice.reducer