import React from 'react'
import { Link } from 'react-router'

export default function SignIn() {
  return (
    <div className='mt-8'>
       <div className='w-3/12 mx-auto flex flex-col items-center space-y-6 border border-green-300 p-4 rounded shadow-xl'>
       <p className='text-3xl text-green-500'>Sign In</p>
        <div className='space-y-2'>
            <p>Email:</p>
            <input type="email" placeholder='yourname@gmail.com' className='border border-green-300 px-2 py-1 rounded'/>
        </div>
        <div className='space-y-2'>
            <p>Password:</p>
            <input type="password" placeholder='..........' className='border border-green-300 px-2 py-1 rounded'/>
        </div>

        <Link to="/" className='bg-green-500 text-white px-6 py-2 rounded hover:scale-105'>Sign in</Link>
        <div className='flex gap-1'>
        <p>Don't have an account?</p>
        <Link to="/signup" className='text-green-500 underline hover:scale-105'>Sign up</Link>
        </div>
       </div>
    </div>
  )
}
