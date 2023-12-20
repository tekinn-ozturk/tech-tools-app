import React, { useEffect, useState,createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();


export const ApiContextProvider = ({children}) => {
    const [popProducts, setPopProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    
    
    useEffect(() => {
        const getPopProducts = async ()=>{
            try{
                const response = await axios.get("https://dummyjson.com/products/category/smartphones");
               
                setPopProducts(response.data.products);
                
            }
            catch(error){
                console.log(error);
            }
        }
        getPopProducts();                             
    },[])

    useEffect(()=>{
      const getAllProducts = async ()=>{
        try{
          const response = await axios.get("https://dummyjson.com/products");
          setAllProducts(response.data.products);
        }
        catch(error){
          console.log(error);
        }
      }
      getAllProducts();
    },[])

   

  
  return (
    <ApiContext.Provider value={{popProducts, allProducts}}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiContext