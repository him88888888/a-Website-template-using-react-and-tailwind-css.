import React from 'react'
import { Navbar } from './Navbar'
import P1Content from './P1Content'
import 'remixicon/fonts/remixicon.css'

const Section1 = (props) => {
  return (
  
    <div className='h-screen w-full bg-gray-200' > 
    <Navbar />
    <P1Content users={props.users} />
    </div>
    

    
  )
}

export default Section1