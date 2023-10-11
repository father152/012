import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>

   <div className='leftside'>
   <ul className='first_title'>
   <li><Link to='/house'>HOUSE</Link></li>
   <li><Link to='/flat'>FLAT</Link></li>
   <li><Link to='/House'>HOUSE</Link></li>
   <li><Link to='/House'>HOUSE</Link></li>
   </ul>
   <ul className='second_title'>
   <li><Link to='/House'>HOUSE</Link></li>
   <li><Link to='/House'>HOUSE</Link></li>
   <li><Link to='/House'>HOUSE</Link></li>
   <li><Link to='/House'>HOUSE</Link></li>
   </ul>
   </div>

   <div className='centralpart'>2</div>
   <div className='rigthside'>3</div>
    
    </div>
  )
}
export {Home}
