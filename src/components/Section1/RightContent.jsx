import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log( props );
  
  return (
    <div id='right' className='h-full w-2/3 p-6 rounded-4xl flex flex-nowrap gap-8 overflow-x-auto verflow-y-auto '>
       {props.users.map(function(elem){
        
       
          return  <RightCard img={elem.img} tag={elem.tag} intro={elem.intro} id={elem.id} />
       })}
    </div> 
  )
}

export default RightContent