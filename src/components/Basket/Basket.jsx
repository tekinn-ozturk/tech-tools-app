import React from 'react'
import './Basket.css'

import { useBasket } from '../../context/BasketContext'
const Basket = () => {
    const {items,removeFromBasket} =useBasket();
    const total = items.reduce((acc, obj)=> acc+obj.price,0)
    
  return (
    <div>
        {items.length<1 && (
        <p>Sepetinizde ürün bulunmamaktadır! </p>
        )}

        {items.length>0 && (
            <>
          <ul>
            {
                items.map((item)=>(
                   <li key={item.id} className="card">
                    
                    <div className="card-content">
                    <h4 className="card-title">{item.title}</h4>
                    <h5 className="card-price">{item.price} TL</h5>
                    <button className="button" onClick={()=>removeFromBasket(item.id)}>Sepetten Çıkar</button>
                    </div>
                    
                   </li> 
                ))
            }
          </ul>  
          </>
        ) }
        
        
        
        
        <h5 className='tutar'>Toplam Tutar: {total} TL </h5>

    </div>
  )
}

export default Basket