import React from 'react'
import banner1 from "../../public/banner1.png"
import banner2 from "../../public/banner2.jpg"

export default function BannerSection() {
  return (
<div className='w-10/12 md:w-8/12 mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>

    <div  className='relative h-64'>
        <img  src={banner1} alt="banner" />
        <div className='absolute top-10 left-6 space-y-2'>
            <p className='text-xl md:text-3xl font-semibold'>Fruits & Vegetables</p>
            <p>Get 25% off</p>
            <button className='bg-black text-white py-1 px-2 rounded-xl'>Shop Now</button>
        </div>
    </div>
    <div className='relative h-64'>
        <img src={banner2} alt="banner" />
        <div className='absolute top-10 left-6 space-y-2'>
            <p className='text-xl md:text-3xl font-semibold'>Freshly Baked Buns</p>
            <p>Get 30% off</p>
            <button className='bg-black text-white py-1 px-2 rounded-xl'>Shop Now</button>
        </div>
    </div>

</div>
  )
}
