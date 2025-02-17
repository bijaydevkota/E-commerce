import React from 'react'
import { Link } from 'react-router'

export default function SignUp() {
  return (
    <div className='mt-8'>
       <form className='w-3/12 mx-auto flex flex-col items-center space-y-6 border border-green-300 p-4 rounded shadow-xl'>
       <p className='text-3xl text-green-500'>Sign Up</p>
        <div className='space-y-2'>
            <p>Full Name:</p>
            <input type="name" placeholder='John Dae' className='border border-green-300 px-2 py-1 rounded'/>
        </div>
        <div className='space-y-2'>
            <p>Email:</p>
            <input type="password" placeholder='johndae@gmail.com' className='border border-green-300 px-2 py-1 rounded'/>
        </div>
        <div className='space-y-2'>
            <p>Phone:</p>
            <input type="number" placeholder='9866338344' className='border border-green-300 px-2 py-1 rounded'/>
        </div>
        <div className='space-y-2'>
            <p>Address</p>
            <input type="password" placeholder='Shantinagar,Kathmandu' className='border border-green-300 px-2 py-1 rounded'/>
        </div>

        <Link to="/signin" className='bg-green-500 text-white px-6 py-2 rounded hover:scale-105'>Sign up</Link>
        <div className='flex gap-1'>
        <p>Already have an account?</p>
        <Link to="/signin" className='text-green-500 underline hover:scale-105'>Sign in</Link>
        </div>
       </form>
    </div>
  )
}
