import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ setSearchValue, cartList, setIsOpen }) => {
   const [value, setValue] = useState("");

   useEffect(() => {
      setSearchValue(value);
   }, [value, setSearchValue]);

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
               <MdShoppingCart size={21} />
               <span>{cartList.length}</span>
            </button>
            <form>
               <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
               <button type="submit">
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
