import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/LOGO.png'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsCart2} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const showCartItem = useSelector((state) => state.counter.cartItems)

    // function to close and open mobile menu
    const [toggleMenu, setToggleMenu] = React.useState(false)
    function toggle(prev){
        setToggleMenu(true)
    }

    const [hideSignup, setHideSignup] = React.useState(true)
    function hideSignUpButton(){
       return setHideSignup(false)
    }

    const [makeBold, setMakeBold] = useState(false)
    const cart =  showCartItem

  return (
    <div className=''>
        <div className='w-5/6 mx-auto py-5'>
            {/* Desktop Header */}
            <div className='hidden lg:flex justify-between items-center'>
                <div className=''>
                    <Link to='/'><img src={logo} alt='' className='h-20' /></Link>
                </div>
                <div className='flex gap-10 items-center text-lg'>
                    <Link to='bonds'><p style={{fontWeight: makeBold ? "bold" : "normal"}} onClick={() => setMakeBold(true)} className='hover:border-b hover:border-green-700 pb-2'>Bond Offer</p></Link>
                    <p className='hover:border-b cursor-pointer hover:border-green-700 pb-2'>DMO</p>
                    <p className='hover:border-b cursor-pointer hover:border-green-700 pb-2'>Features</p>
                    <motion.p whileTap={{scale:0.7}} onClick={() => setMakeBold(false)} className='px-5 py-2 border border-lime-500 hover:bg-lime-500 rounded-md cursor-pointer'>Log In</motion.p>
                    {hideSignup && <Link to='signup' onClick={() => {hideSignUpButton; setMakeBold(false)}}><motion.p whileTap={{scale:0.7}} className='px-5 py-2 text-white rounded-md hover:bg-gray-700 bg-black'>Sign Up</motion.p></Link>}
                    <div onClick={() => setMakeBold(false)} className='relative'>
                        <Link to='cart'>
                            <motion.p whileTap={{scale:0.5}}>
                                <BsCart2 className='text-2xl'/>
                            </motion.p>
                        </Link>
                        {cart.length > 0 && <div className='text-red-500 bg-red-500 rounded-full h-4 w-4 absolute flex items-center justify-center -top-1 -right-1'><p className='text-white text-sm'>{cart.length}</p></div>}
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className='flex lg:hidden items-center justify-between'>
                <div className=''>
                <Link to='/'><img src={logo} alt='' className='h-14' /></Link>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <Link to='cart'>
                            <motion.p whileTap={{scale:0.5}}>
                                <BsCart2 className='text-2xl'/>
                            </motion.p>
                        </Link>
                        {cart.length > 0 && <div className='text-red-500 bg-red-500 rounded-full h-4 w-4 absolute flex items-center justify-center -top-1 -right-1'><p className='text-white text-sm'>{cart.length}</p></div>}
                    </div>
                    <div className='relative'>
                        {toggleMenu ? <motion.p whileTap={{scale:0.7}}><IoMdClose className='text-3xl text-black cursor-pointer' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p> : 
                        <motion.p whileTap={{scale:0.7}}><GiHamburgerMenu className='text-xl cursor-pointer text-black' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p>}  
                    </div>
                </div>
                {toggleMenu && <div className='bg-green-50 z-50 text-gray-700 h-max w-40 absolute top-20 right-8 py-4 rounded-xl shadow-md'>
                    <div className='flex flex-col gap-3 items-center w-5/6 mx-auto text-lg font-semibold '>
                        <Link to='bonds' className='hover:bg-lime-500 hover:text-white w-full text-center rounded-md'><p className='px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Bond Offer</p></Link>
                        <Link className='hover:bg-lime-500 w-full hover:text-white text-center rounded-md'><p className=' hover:border-green-700 px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>DMO</p></Link>
                        <Link className='hover:bg-lime-500 w-full hover:text-white text-center rounded-md'><p className='px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Features</p></Link>
                        <Link to='signup' className='hover:bg-lime-500 hover:text-white w-full text-center rounded-md'><p className='px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Sign Up</p></Link>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Header
