import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/LOGO.png'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineUser} from 'react-icons/ai'
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
                <div className='flex gap-10 text-lg'>
                    <Link to='/bonds'><p className='hover:border-b hover:border-green-700 pb-2'>Bond Offer</p></Link>
                    <p className='hover:border-b cursor-pointer hover:border-green-700 pb-2'>Portfolio</p>
                    <p className='hover:border-b cursor-pointer hover:border-green-700 pb-2'>Notification</p>
                    <motion.p whileTap={{scale:0.7}} className='cursor-pointer'><AiOutlineUser className='text-3xl'/></motion.p>
                    <div className='relative'>
                        <Link to='cart'>
                            <motion.p whileTap={{scale:0.5}}>
                                <BsCart2 className='text-2xl'/>
                            </motion.p>
                        </Link>
                        {showCartItem.length > 0 && <div className='text-red-500 bg-red-500 rounded-full h-4 w-4 absolute flex items-center justify-center -top-1 -right-1'><p className='text-white text-sm'>{showCartItem.length}</p></div>}
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className='flex lg:hidden items-center justify-between'>
                <div className=''>
                    <img src={logo} alt='' className='h-14' />
                </div>
                
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <Link to='cart'>
                            <motion.p whileTap={{scale:0.5}}>
                                <BsCart2 className='text-2xl'/>
                            </motion.p>
                        </Link>
                        <div className='text-red-500 bg-red-500 rounded-full h-4 w-4 absolute flex items-center justify-center -top-1 -right-1'><p className='text-white text-sm'>{showCartItem.length}</p></div>
                    </div>
                    <div className='relative'>
                        {toggleMenu ? <motion.p whileTap={{scale:0.7}}><IoMdClose className='text-3xl text-black cursor-pointer' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p> : 
                        <motion.p whileTap={{scale:0.7}}><GiHamburgerMenu className='text-xl cursor-pointer text-black' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p>}  
                    </div>
                </div>
                {toggleMenu && <div className='bg-green-50 z-50 text-gray-700 h-max w-40 absolute top-20 right-8 py-4 rounded-xl shadow-md'>
                    <div className='flex flex-col gap-3 items-center w-5/6 mx-auto text-lg font-semibold '>
                        <Link to='bonds' className='hover:bg-lime-500 hover:text-white w-full text-center rounded-md'><p className='px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Bond Offer</p></Link>
                        <Link className='hover:bg-lime-500 w-full hover:text-white text-center rounded-md'><p className=' hover:border-green-700 px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Portfolio</p></Link>
                        <Link className='hover:bg-lime-500 w-full hover:text-white text-center rounded-md'><p className='px-3 py-2' onClick={()=> setToggleMenu(prev => !prev)}>Notification</p></Link>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Header
