import { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar.jsx"
import Home from "./components/Homepage/Home.jsx";
import ProductList from "./components/ProductList/ProductList.jsx"
import { ApiContextProvider } from "./context/ApiContext.jsx"
import { BasketContextProvider } from './context/BasketContext.jsx';




function App() {
  

  return (
   <div> 
   <BrowserRouter>
   <ApiContextProvider>
    <BasketContextProvider>
   <NavBar />
   
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Product" element={<ProductList/>} />
     <Route path="/Basket"  />

     </Routes>
     </BasketContextProvider>
     </ApiContextProvider>
   </BrowserRouter>
 </div>

     
  )
}

export default App
   
   
   




