import React from 'react'
import { motion } from 'framer-motion'

const Signup = () => {
  const [firstName, setFirstName] = React.useState('')
  
  function handleChange() {
    setFirstName(event.target.value)
  }

  function submit(e){
    e.preventDefault()
    const saveData = firstName
    console.log(saveData)
    localStorage.setItem("firstName", saveData)
  }

  console.log(firstName)
  return (
    <div className='text-gray-700 pb-20'>
      <div className='flex flex-col items-center'>
        <p className='text-4xl font-semibold mb-3 text-black'>Signup</p>
        <p className='text-lg mb-7'>Stop Spending, Start Investing</p>
        <form>
          <div className='flex flex-col gap-1 mb-5'>
            <label htmlFor='firstName'>First Name <span className='text-red-600 font-bold'>*</span></label>
            <input id='firstName' name="firstName" onChange={handleChange} required className='bg-green-50 border border-black px-3 py-2 rounded-md w-96' placeholder='Enter your First Name'/>
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
            <label htmlfor='terms' className='text-sm'>By continuing, You agree to the <a className='text-lime-800 cursor-pointer underline'>Terms and conditions</a></label>
          </div>

          <motion.button onClick={submit} whileTap={{scale:0.5}} className='w-full bg-black mt-10 hover:bg-lime-800 cursor-pointer text-white gap-2 rounded-md px-5 py-3 flex justify-center items-center'>Sign Up</motion.button>

        </form>
      </div>
      
    </div>
  )
}

export default Signup
