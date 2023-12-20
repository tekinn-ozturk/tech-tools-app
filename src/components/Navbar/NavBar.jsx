import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'




export function NavBar () {
 

  

  return (
    
  <nav className='navbar'>
    <ul>
      <li>
      <Link to={"/"} >Home</Link>
      </li>
      
      <li>
        <Link to={"/Product"} >Product</Link>
      </li>
      
    </ul>
  </nav>

  )
}
     
      
