import { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar.jsx"
import Home from "./components/Homepage/Home.jsx";
import { ApiContextProvider } from "./context/ApiContext.jsx"




function App() {
  

  return (
   <div> 
   <BrowserRouter>
   <ApiContextProvider>
   <NavBar />
   
     <Routes>
     <Route path="/" element={<Home/>} />
     

     </Routes>
    
     </ApiContextProvider>
   </BrowserRouter>
 </div>

     
  )
}

export default App
   
   
   




