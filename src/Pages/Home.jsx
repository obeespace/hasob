import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import landingPic from '../assets/Component 3.png'
import bubble from '../assets/bubble.png'
import commodityCard from '../assets/commodity card.jpg'

const Home = () => {
  return (
    <div className='relative'>
    <div className='h-6 w-14 bg-black'></div>
    <div className='w-5/6 mx-auto my-10 pb-96 lg:pb-40 lg:flex gap-40 text-gray-600'>
      <div className='text-center lg:text-left'>
        <p className='text-6xl '>Subscribe to FGN Saving Bond</p>
        <p className='text-3xl mt-5'>Loan and get paid with interest</p>
        <div className='flex gap-4 mt-16 justify-center lg:justify-start'>
          <motion.button whileTap={{scale:0.5}} className='bg-lime-600 hover:bg-lime-800 cursor-pointer text-white gap-2 text-xl rounded-md px-5 py-3 flex justify-center items-center'>Get Started <FiArrowRight /></motion.button>
          <motion.button whileTap={{scale:0.5}} className='flex justify-center items-center gap-2 cursor-pointer px-5 py-3 hover:border hover:border-lime-600 rounded-md'><BsFillPlayCircleFill className='text-2xl'/><span className='text-xl'>See Video</span></motion.button>
        </div>
      </div>
      <div className='flex mt-20 lg-mt-0 relative lg:w-4/6 justify-center'>
        <img src={bubble} alt='bubble' className='absolute lg:right-32 lg:-top-24 h-64 lg:h-96 md:h-80 opacity-60'/>
        <img src={landingPic} alt='landing page image' className='lg:scale-150 lg:min-h-80 lg:h-max lg:-top-10 absolute lg:right-32'/>
        <img src={commodityCard} alt='commodity card' className='absolute rounded-lg lg:h-14 h-8 md:h-10 md:top-32 md:right-44 top-20 right-24 lg:top-8 lg:right-40'/>
      </div>
    </div>
    <div className='h-6 w-14 bg-lime-500 absolute right-0 top-0'></div>
    </div>
  )
}

export default Home
