import React from 'react'

export default function Banner  ()  {
  return (
    <div className='relative overflow-hidden font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 '>
        <img src="images/th.jpg"
         alt="Interior Set" 
         className=' w-full h-fullobject-cover'/>

      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-items-center'>
      <h1 className='text-amber-600 sm:text-4xl font-serif mb-4'> Luxuarious Interior By Rumi</h1>
        <h2 className='text-white sm:text-6xl font-bold mb-4'>  Explore For More Qaulity Pieces</h2>
      <p className=' text-grey text-lg text-center mb-6 max-w-xl'>
        Shop Now For Exclusive Products Discount !
        <button
        type='button'
        className='bg-yellow-800 text-white text-sm font-semibold py-3 px-6 rounded-full 
        shadow-large hover:bg-neutral-500 transition duration-300'>
          Exciting Deals Will Be Launched On This Weekend
          
        </button>

      </p>
      </div>
    </div>
  )
}
