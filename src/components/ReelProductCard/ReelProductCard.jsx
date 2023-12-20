import React from 'react'
import "./ReelProductCard.css";


const ReelProductCard = ({product}) => {
    const firstImageUrl= product.images[0]
  return (
    <div className="product-card">
        <img className="product-image" src={firstImageUrl} alt="" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button className="btn btn-primary">Sepete Ekle</button>
    </div>
  )
}

export default ReelProductCard