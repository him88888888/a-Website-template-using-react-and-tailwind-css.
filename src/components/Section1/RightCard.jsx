import React from 'react'
import RightCardContent from './RightCardContent'


const RightCard = (props) => {
  return (
   <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-1xl '>
        <img className='h-full object-cover w-full rounded-2xl' src={props.img} alt="" />
        
        <RightCardContent tag={props.tag} intro={props.intro} id={props.id} />
   </div>
  )
}

export default RightCard