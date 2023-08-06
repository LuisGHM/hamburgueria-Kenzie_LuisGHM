import React, { useState } from "react";
import styles from "./style.module.scss";

export const ProductCard = ({ product, setSearchValueCart, cartList }) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };

    return(
        <li
        className={`${styles.card} ${isFocused ? styles.focusedCard : ""}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
      >
            <div className={styles.containerImg}>
                <img src={product.img} alt={product.name} className={styles.img}/>
            </div>
            <div className={styles.itemInf}>
                <h3 className="title3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="text semiBold green">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btn" onClick={() => setSearchValueCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}