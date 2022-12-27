import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import leftCoatOfArm from '../assets/image 1.png'
import rightCoatOfArm from '../assets/image 2.png'

const Signup = () => {
  const [firstName, setFirstName] = React.useState('')
  const navigate = useNavigate()
  function handleChange() {
    setFirstName(event.target.value)
  }

  function submit(e){
    e.preventDefault()
    const saveData = firstName
    console.log(saveData)
    localStorage.setItem("firstName", saveData)
    navigate('/')
    window.location.reload();
  }

  console.log(firstName)
  return (
    <div className='text-gray-700 pb-20 relative'>
      <img src={leftCoatOfArm} className='absolute top-96 h-32 lg:top-40 lg:h-64'/>
      <div className='flex flex-col items-center'>
        <p className='text-4xl font-semibold mb-3 text-black'>Signup</p>
        <p className='text-lg mb-7'>Stop Spending, Start Investing</p>
        <form>
          <div className='flex flex-col gap-1 mb-5'>
            <label htmlFor='firstName'>First Name <span className='text-red-600 font-bold'>*</span></label>
            <input id='firstName' required name="firstName" onChange={handleChange} className='bg-green-50 border border-black px-3 py-2 rounded-md w-96' placeholder='Enter your First Name'/>
          </div>

          <div className='flex flex-col gap-1 mb-5'>
            <label>First Name</label>
            <input className='bg-green-50 border border-black px-3 py-2 rounded-md w-96' placeholder='Enter your First Name'/>
          </div>

          <div className='flex flex-col gap-1 mb-5'>
            <label>First Name</label>
            <input className='bg-green-50 border border-black px-3 py-2 rounded-md w-96' placeholder='Enter your First Name'/>
          </div>

          <div className='flex flex-col gap-1 mb-5'>
            <label>First Name</label>
            <input className='bg-green-50 border border-black px-3 py-2 rounded-md w-96' placeholder='Enter your First Name'/>
          </div>

          <div className='flex flex-col gap-1 mb-5'>
            <label>First Name</label>
            <input className='bg-green-50 border border-black px-3 py-2 rounded-md w-96' placeholder='Enter your First Name'/>
          </div>

          <div className='flex justify-center gap-3'>
            <input id='terms' type='checkbox' className='accent-lime-800 scale-150'/>
            <label htmlFor='terms' className='text-sm'>By continuing, You agree to the <a className='text-lime-800 cursor-pointer underline'>Terms and conditions</a></label>
          </div>

          <motion.button whileTap={{scale: 0.7}} onClick={submit} className='w-full bg-black mt-10 hover:bg-lime-800 cursor-pointer text-white gap-2 rounded-md px-5 py-3 flex justify-center items-center'>Sign Up</motion.button>

        </form>
      </div>
      <img src={rightCoatOfArm} className='absolute right-0 h-32 top-32 lg:top-16 lg:h-64'/>
    </div>
  )
}

export default Signup
