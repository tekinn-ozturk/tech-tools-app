import React from 'react'
import "./ReelProductCard.css";
import { useBasket } from '../../context/BasketContext';

const ReelProductCard = ({product}) => {
    const firstImageUrl= product.images[0]

    const {addToBasket,items} = useBasket();

    const findBasketItem = items.find((item)=> item.id ===product.id)
  return (
    <div className="product-card">
        <img className="product-image" src={firstImageUrl} alt="" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button className="btn btn-primary" onClick={()=>addToBasket(product,findBasketItem)} > {findBasketItem? 'Sepetten Çıkar': 'Sepete Ekle'}</button>
    </div>
  )
}

export default ReelProductCard