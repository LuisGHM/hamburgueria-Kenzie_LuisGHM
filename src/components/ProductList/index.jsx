import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProductList = ({ productList, setSearchValueCart, cartList }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 699, min: 601 },
      items: 1,
      partialVisibilityGutter: 265,
    },
    desktop: {
      breakpoint: { max: 600, min: 501 },
      items: 1,
      partialVisibilityGutter: 165,
    },
    tablet: {
      breakpoint: { max: 500, min: 400 },
      items: 1,
      partialVisibilityGutter: 65,
    },
    mobile: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const [showCarousel, setShowCarousel] = useState(window.innerWidth >= 700);

  useEffect(() => {
    const handleResize = () => {
      setShowCarousel(window.innerWidth >= 700);
    };

    // Adicionar o event listener para detectar o redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Chamar a função de redimensionamento uma vez no momento da montagem
    handleResize();

    // Remover o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (showCarousel) {
    // Renderizar os itens do productList sem o Carousel se a largura for menor que 700 pixels
    return (
      <section className="container">
        <div className={styles.carouselContainer}>
          <ul className={styles.listCard}>
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setSearchValueCart={setSearchValueCart}
                productList={productList}
                cartList={cartList}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div className={styles.carouselContainer}>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass={styles.card}
          partialVisible
          focusOnSelect
          arrows={false} // Mostra ou esconde as setas com base no valor de showCarousel
        >
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setSearchValueCart={setSearchValueCart}
              productList={productList}
              cartList={cartList}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
