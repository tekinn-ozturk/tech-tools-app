import React from 'react'
import { useContext } from 'react'
import {ApiContext} from "../../context/ApiContext";
import ProductCard from '../ProductCard/ProductCard';

const PopularList = () => {

    const {popProducts} = useContext(ApiContext);
    
  return (
    
    <div className="popular-list">
        {popProducts?.map((product)=> <ProductCard key={product.id} product={product}/>)}
    </div>
  )
}

export default PopularList
