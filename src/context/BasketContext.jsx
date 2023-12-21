import { useState, createContext,useContext, useEffect } from 'react'

const BasketContext = createContext();

const BasketContextProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addToBasket=(product,findBasketItem)=>{
        //Eğer eklenmek istenen ürün sepette yoksa ekle.
        if (!findBasketItem) {
            return setItems((items) => [product,...items])
        }
        //Sepete ekledikten sonra butonun sepetten çıkar oluyor sepetten çıkarma işlemini gerçekleştiren kısım javascript silme işlemi seçilen id'yi dışarda tutup geri kalanı filtreleyip listeliyoruz.
        else{
            const filtered = items.filter((item)=>item.id !== findBasketItem.id);
        return setItems(filtered)
        }
        
        
        
       
        
    }

    const values ={
        items,
        setItems,
        addToBasket
    }



    return(
        <BasketContext.Provider value={values} >{children}</BasketContext.Provider>
    )
    
}
const useBasket = () => useContext(BasketContext);
export{BasketContextProvider, useBasket}