import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-hot-toast";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [searchValue, setSearchValue] = useState("");
   const [searchValueCart, setSearchValueCart] = useState("");

   const itemsLocalStorage = JSON.parse(localStorage.getItem("@CARTITENS")) || [];

   useEffect(() => {
      setCartList(itemsLocalStorage);
   }, []);
   
   const getProducts = async () => {
      const { data } = await api.get("products");
      setProductList(data);
   };

   useEffect(() => {
      getProducts();
   }, []);

   const filterProducts = () => {
      const productFilter = productList.filter((product) =>
         searchValue === "" ? true : product.name.toLocaleUpperCase().includes(searchValue.toLocaleUpperCase())
      );
      return productFilter;
   };

   useEffect(() => {
      if(!searchValueCart == ""){
         if (itemsLocalStorage.length === 0) {
            const updatedCartList = [...cartList, searchValueCart];
            setCartList(updatedCartList);
            localStorage.setItem("@CARTITENS", JSON.stringify(updatedCartList));
          }else{
            const isItemInLocalStorage = itemsLocalStorage.some(item => item.id === searchValueCart.id);
            if (!isItemInLocalStorage) {
               // Create a new array with the current cartList and add the lastItem to it
               const updatedCartList = [...cartList, searchValueCart];
         
               // Update the state with the new cartList containing the lastItem
               setCartList(updatedCartList);
         
               // Update the localStorage with the updated cartList
               localStorage.setItem("@CARTITENS", JSON.stringify(updatedCartList));
             } else {
               // If the item is already in localStorage, show the error toast
               toast.error("Item já adicionado");
             }
         }
         setSearchValueCart("");
       }
    }, [searchValueCart]);

   return (
      <>
         <Header setSearchValue={setSearchValue} cartList={cartList} setIsOpen={setIsOpen}/>
         <main>
            <ProductList productList={filterProducts()} setSearchValueCart={setSearchValueCart} cartList={cartList}/>
            <CartModal cartList={cartList} isOpen={isOpen} setIsOpen={setIsOpen}/>
         </main>
      </>
   );
};

