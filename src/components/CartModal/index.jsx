import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, isOpen, setIsOpen, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const removeItensLocalStorage = () => {
      localStorage.removeItem("@CARTITENS");
      setCartList([]);
    };

   return (
      isOpen ? (
         <div role="dialog" className={styles.modalOverlay}>
            <div className={styles.modalBox}>
               <div className={styles.headerModal}>
                  <div className={`${styles.headerContainer} container`}>
                     <h2 className="title3 white">Carrinho de compras</h2>
                     <button aria-label="close" title="Fechar" onClick={() => setIsOpen(false)}>
                        <MdClose size={21} />
                     </button>
                  </div>
               </div>
               <div className='container'>
                  <div>
                     <ul className={styles.cartList}>
                        {cartList.map((product) => (
                           <CartItemCard key={product.id} product={product} setCartList={setCartList} cartList={cartList}/>
                        ))}
                     </ul>
                  </div>
                  <div className={styles.priceContainer}>
                     <div className={styles.priceGrid}>
                        <span className="text">Total</span>
                        <span className="text grey3">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                     </div>
                     <button className={styles.buttonRemove} onClick={removeItensLocalStorage}>Remover todos</button>
                  </div>
               </div>
               
            </div>
         </div>
      ) : null 
   );
};
