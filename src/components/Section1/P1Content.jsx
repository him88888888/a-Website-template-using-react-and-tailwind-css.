import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const P1Content = (props) => {
  return (
    <div className='h-[90vh] bg-amber-000 pb-16 pt-6 px-18 flex gap-10 items-center'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default P1Content