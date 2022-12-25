import React from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { BiMinusCircle } from 'react-icons/bi'
import { BiPlusCircle } from 'react-icons/bi'
import mainLogo from '../assets/mainlogo.png'

const CartInfo = (props) => {
  return (
    <div className='flex flex-wrap justify-between mb-5 items-center border border-green-700 rounded-xl px-4 py-3'>
      <div className='flex items-center gap-3 mb-3'>
        <BsFillCheckSquareFill className='text-green-700' />
        <img src={mainLogo} alt='coat of arm' className='h-16' />
        <p className='font-bold text-xl'>{props.name}</p>
      </div>
      <div className='flex gap-2'>
        <button className='px-2 py-1 border text-green-600 border-black rounded-md'>Automatic</button>
        <button className='px-2 py-1 text-red-600 rounded-md'>Delete</button>
      </div>
      <div>
        <p>Value(₦)</p>
        <div className='flex gap-4 border border-black px-2 py-1 rounded-dm'>
            <p>300,000.00</p>
            <div className='flex gap-2 items-center'>
                <BiMinusCircle/>
                <p>01</p>
                <BiPlusCircle/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartInfo
