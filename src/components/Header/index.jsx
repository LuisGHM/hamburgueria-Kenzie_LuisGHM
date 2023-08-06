import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setSearchValue, cartList, setIsOpen }) => {
   const [value, setValue] = useState("");

   useEffect(() => {
      setSearchValue(value);
   }, [value, setSearchValue]);

   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.headerContainer}>
               <div className={styles.optContainer}>
                  <img src={Logo} alt="Logo Kenzie Burguer" />
                  <button onClick={() => setIsOpen(true)}>
                     <MdShoppingCart size={21} />
                     <span>{cartList.length}</span>
                  </button>
               </div>
               <form className={styles.formInput}>
                  <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
