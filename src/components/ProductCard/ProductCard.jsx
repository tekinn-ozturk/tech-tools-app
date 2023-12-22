
import  { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import "./ProductCard.css"
import { useBasket } from "../../context/BasketContext";

import React from 'react'



const ProductCard = ({product}) => {


  const firstImageUrl = product.images[0];

  const {addToBasket,items} = useBasket();

  const findBasketItem = items.find((item)=> item.id ===product.id)
  //id'ler eşit ise o nesne findBasketItem'a atandı.
  return (
    <div className="product-card">
      <img className="product-image" src={firstImageUrl} alt='' />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>{product.price} TL</h4>
      <button className="btn btn-primary" onClick={()=>addToBasket(product,findBasketItem)}>
        {/* product ve findBasketItems fonksiyona gönderildi */}
      {
        findBasketItem? 'Sepetten Çıkar': 'Sepete Ekle'
      }
      </button>
    </div>
  )
}

export default ProductCard