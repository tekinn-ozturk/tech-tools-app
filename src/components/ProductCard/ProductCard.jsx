
import  { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import "./ProductCard.css"

import React from 'react'



const ProductCard = ({product}) => {



  const firstImageUrl = product.images[0];

  return (
    <div className="product-card">
      <img className="product-image" src={firstImageUrl} alt='' />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button className="btn btn-primary">Sepete Ekle</button>
    </div>
  )
}

export default ProductCard