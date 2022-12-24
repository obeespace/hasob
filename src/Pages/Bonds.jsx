import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import SavingsBond from '../Components/SavingsBond'

const Bonds = () => {
    const bondsData = [
        {
            id: 1,
            name: '730 days Savings Bond'
        },
        {
            id: 2,
            name: '830 days Savings Bond'
        },
        {
            id: 3,
            name: '930 days Savings Bond'
        },
        {
            id: 4,
            name: '630 days Savings Bond'
        }
    ]
    const showCartItem = useSelector((state) => state.counter.cartItems)
  return (
    <div className='relative'>
      {JSON.stringify(showCartItem)}
      <div className='w-5/6 mx-auto my-20 lg:flex gap-20 scrollbar-hide overflow-x-scroll'>
        {bondsData.map(n => {
           return <SavingsBond key={n.id} {...n}/>
        })}
      </div>

      <BsChevronRight className='hidden lg:flex text-5xl absolute right-6 top-52'/>
    </div>
  )
}

export default Bonds
