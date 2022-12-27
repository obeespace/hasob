import React from 'react'
import CartInfo from '../Components/CartInfo'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'


const Cart = () => {
  const showCartItem = useSelector((state) => state.counter.cartItems)
  const CartItems = (props) => {
    return(
      <CartInfo name={props.name}/>
    )
  }
  const hold = showCartItem.map(n => {
    return <CartItems {...n}/>
  })
  
  return (
    <div className=''>
      <div className='w-5/6 mx-auto py-20'>
        {hold}
        <div className='text-gray-700 flex justify-between items-center border border-green-600 mt-5 rounded-lg px-4 py-3'>
          <div>
            <div className='flex gap-7'>
              <select className='bg-green-100' name="cars" id="cars">
                <option value="volvo">Fees + Taxes</option>
              </select>
              <p>₦2.09</p>
            </div>
            <p className='mt-10 w-5/6'>This is a 730 days Saving Bond, you have a fixed income</p>
          </div>
          <div className='text-right'>
            <p>Total Buy</p>
            <p className='text-black font-bold mt-2'>₦600,000.00</p>
          </div>
        </div>
        <div className='flex justify-end'><motion.button whileTap={{scale:0.5}} className='bg-lime-600 mt-10 hover:bg-lime-800 cursor-pointer text-white gap-2 rounded-md px-5 py-3 flex justify-center items-center'>Check Out</motion.button></div>
      </div>
    </div>
  )
}

export default Cart
