import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, setCartList, cartList }) => {
  const removeItem = (productToRemove) => {
    const updatedCartList = cartList.filter((item) => item.id !== productToRemove.id);

    setCartList(updatedCartList);

    localStorage.setItem("@CARTITENS", JSON.stringify(updatedCartList));
  };

  return (
    <li className={styles.cardContainer}>
      <div>
        <img src={product.img} alt={product.name} />
        <h3 className="title3">{product.name}</h3>
      </div>
      <button aria-label="delete" title="Remover item" onClick={() => removeItem(product)}>
        <MdDelete size={21} />
      </button>
    </li>
  );
};
