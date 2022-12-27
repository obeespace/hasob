import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
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

  return (
    <div className='relative pb-20'>
      <div className={`${localStorage.getItem('firstName') == null ? 'w-5/6' : 'w-11/12'} mx-auto my-20 ${localStorage.getItem('firstName') == null ? 'gap-20' : 'gap-2'} lg:flex scrollbar-hide overflow-x-scroll`}>
        {bondsData.map(n => {
           return <SavingsBond key={n.id} {...n}/>
        })}
      </div>

      <BsChevronRight className='hidden lg:flex text-5xl absolute right-6 top-52'/>
    </div>
  )
}

export default Bonds
