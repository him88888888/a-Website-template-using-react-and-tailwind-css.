import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const users = [
    {
      id:'1',
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, animi?',
      tag:'Satisfied'
    },

    {
      id:'2',
      img:'https://images.unsplash.com/photo-1765648684555-de2d0f6af467?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptatum.',
      tag:'Underserved'
    },
    {
      id:'3',
      img:'https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corporis?',
      tag:'Underbanked'
    },
    {
      id:'4',
      img:'https://images.unsplash.com/photo-1574966740429-6158cb530208?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, consequatur?',
      tag:'Uncooked'
    },
    {
      id:'5',
      img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, sit.',
      tag:'Configured'
    }
  ]
  return (
<>
<div>
  < Section1 users={users}/>
</div>
{/* <div>
  <Section2 />
</div> */}
</>
  )
}

export default App