import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, setSearchValueCart, cartList }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setSearchValueCart={setSearchValueCart} productList={productList} cartList={cartList}/>
         ))}
      </ul>
   );
};
