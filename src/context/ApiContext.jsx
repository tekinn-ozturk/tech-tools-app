import React, { useEffect, useState,createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();


export const ApiContextProvider = ({children}) => {
    const [popProducts, setPopProducts] = useState([]);
    
    
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

   

  
  return (
    <ApiContext.Provider value={{popProducts}}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiContext