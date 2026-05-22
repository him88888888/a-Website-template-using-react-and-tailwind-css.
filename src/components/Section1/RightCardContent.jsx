import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between p-8'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold '>{props.id}</h2>
            <div>
                <p className=' text-shadow-8xs text-lg leading-normal font-bold w-[90%] hover:backdrop-blur-sm rounded-2xl p-1'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className='bg-gray-800 text-white font-medium px-3 py-2 mt-2 rounded-full hover:bg-gray-300 hover:text-gray-800'>
                       {props.tag}
                    </button>
                    <button className='bg-gray-800 text-white font-medium px-3 py-2 mt-2 rounded-full hover:bg-gray-300 hover:text-gray-800'>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent