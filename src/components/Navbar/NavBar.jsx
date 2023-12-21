import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../context/BasketContext';

import './NavBar.css'




export function NavBar () {
 const {items} = useBasket();

  

  return (
    
  <nav className='navbar'>
    <ul>
      <li>
      <Link to={"/"} >Home</Link>
      </li>
      
      <li>
        <Link to={"/Product"} >Product</Link>
      </li>

      <li className="basket" >
      <Link to={"/Basket"} ><button className='sepetim'>Sepetim ({items.length})</button></Link>
      </li>
      
    </ul>
  </nav>

  )
}
     
      
