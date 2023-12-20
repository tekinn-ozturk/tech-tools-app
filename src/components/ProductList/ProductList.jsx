import React, { useContext } from 'react'
import ApiContext from '../../context/ApiContext'
import ReelProductCard from '../ReelProductCard/ReelProductCard'

const ProductList = () => {
    const {allProducts} =useContext(ApiContext);
  return (
    <div className="popular-list">
        {allProducts?.map((product)=><ReelProductCard key={product.id} product={product}/>)}
    </div>
  )
}

export default ProductList