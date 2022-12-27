import React from 'react'
import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import mainLogo from '../assets/mainlogo.png'
import { addItemToCart } from '../redux/CounterSlice'

const SavingsBond = (props) => {
    const dispatch = useDispatch()
  
    const data = [
        {
            id: 1,
            name: "Minimum",
            value: 'N5000'
        },
        {
            id: 2,
            name: "% Per Year",
            value: '11.382%'
        },
        {
            id: 3,
            name: "Interest Payment",
            value: 'Quarterly'
        },
        {
            id: 4,
            name: "Opening",
            value: 'Oct/04/2022'
        },
        {
            id: 5,
            name: "Closing Date",
            value: 'Oct/07/2022'
        },
        {
            id: 6,
            name: "Settlement",
            value: 'Oct/12/2022'
        }
    ]

    const Savebonds = (props) =>{
      return ( 
      <div className='flex justify-between mt-5 text-sm'>
          <p>{props.name}</p>
          <p className='text-black font-semibold'>{props.value}</p>
      </div>)
    }

  
  return (
    <div className='text-gray-700 border mb-10 lg:mb-0 min-w-[300px] border-lime-500 rounded-xl px-6 py-3'>
      <div className='flex justify-between items-center'>
        <img src={mainLogo} alt='coat of arm' className='h-10'/>
        <p className='px-2 py-1 h-max bg-green-100 rounded-xl text-sm'>FGN Savings Bond</p>
      </div>

      <div className='mt-4 text-center'>
        <p className='text-2xl font-semibold text-black'>{props.name}</p>
        <p className='text-sm'>Due October 12, 2024</p>
      </div>

      {data.map(n => {
        return (<Savebonds key={n.id} {...n}/>)
      })}

      <div className='flex items-center mt-10 gap-5 justify-center'>
        <div className='flex justify-center'>
          <motion.button onClick={() => dispatch(addItemToCart(props))} 
            whileTap={{scale:0.5}} 
            className='bg-lime-600 hover:bg-lime-800 cursor-pointer text-white gap-2 
            rounded-md px-9 py-3 flex justify-center'
            >Add to cart
          </motion.button>
        </div>
        <FiHeart className='text-4xl'/>
      </div>
    </div>
  )
}

export default SavingsBond
