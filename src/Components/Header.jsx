import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/LOGO.png'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsCart2} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {

    // function to close and open mobile menu
    const [toggleMenu, setToggleMenu] = React.useState(false)
    function toggle(prev){
        setToggleMenu(true)
    }

    const [hideSignup, setHideSignup] = React.useState(true)
    function hideSignUpButton(){
       return setHideSignup(false)
       console.log(hideSignup)
    }

  return (
    <div className=''>
        <div className='w-5/6 mx-auto py-5'>
            {/* Desktop Header */}
            <div className='hidden lg:flex justify-between items-center'>
                <div className=''>
                    <Link to='/'><img src={logo} alt='' className='h-20' /></Link>
                </div>
                <div className='flex gap-10 items-center text-lg'>
                    <Link to='bonds'><p className='hover:border-b hover:border-green-700 pb-2'>Bond Offer</p></Link>
                    <p className='hover:border-b cursor-pointer hover:border-green-700 pb-2'>DMO</p>
                    <p className='hover:border-b cursor-pointer hover:border-green-700 pb-2'>Features</p>
                    <motion.p whileTap={{scale:0.7}} className='px-5 py-2 border border-lime-500 hover:bg-lime-500 rounded-md cursor-pointer'>Log In</motion.p>
                    {hideSignup && <Link to='signup' onClick={hideSignUpButton}><motion.p whileTap={{scale:0.7}} className='px-5 py-2 text-white rounded-md hover:bg-gray-700 bg-black'>Sign Up</motion.p></Link>}
                    <Link to='cart'><motion.p whileTap={{scale:0.5}}><BsCart2 className='text-3xl'/></motion.p></Link>
                </div>
            </div>

            {/* Mobile Header */}
            <div className='flex lg:hidden items-center justify-between'>
                <div className=''>
                    <img src={logo} alt='' className='h-14' />
                </div>
                <div className='relative'>
                    {toggleMenu ? <motion.p whileTap={{scale:0.7}}><IoMdClose className='text-3xl text-black cursor-pointer' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p> : 
                    <motion.p whileTap={{scale:0.7}}><GiHamburgerMenu className='text-xl cursor-pointer text-black' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p>}  
                </div>
                {toggleMenu && <div className='bg-green-50 text-gray-700 h-max w-40 absolute top-20 right-8 py-4 rounded-xl shadow-md'>
                    <div className='flex flex-col gap-3 items-center w-5/6 mx-auto text-lg font-semibold '>
                        <Link to='/' className='hover:bg-green-500 hover:text-white w-full text-center rounded-md'><p className='px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Bond Offer</p></Link>
                        <Link className='hover:bg-green-500 w-full hover:text-white text-center rounded-md'><p className=' hover:border-green-700 px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>DMO</p></Link>
                        <Link className='hover:bg-green-500 w-full hover:text-white text-center rounded-md'><p className='px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Features</p></Link>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Header