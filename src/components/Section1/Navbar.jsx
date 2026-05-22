import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-6'>
        <h4 className='bg-gray-800 text-white rounded-full px-5 py-2 uppercase hover:bg-white transition hover:text-gray-800 '>Target Audience</h4>
        <button className='bg-gray-300 px-6 py-2 text-sm uppercase rounded-full tracking-wider hover:bg-gray-800 hover:text-white transition'>Digital Banking Platform</button>
    </div>
  )
}
