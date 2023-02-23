import "../assets/css/components/product.css";
import { useState } from "react";


const Product = ({id, imageSrc, name, price, brand, model }) => {
  const [heart, setHeart] = useState("solid");

  const handleClick = () => {
    if (heart === "solid") {
      setHeart("regular");
    } else {
      setHeart("solid");
    }
  };
  
  return (
    <div className="product">
      <div className="heart-box">
        <img
          className="heart"
          src={`/images/heart-${heart}.svg`}
          alt="heart"
          onClick={handleClick}
        />
      </div>

      <figure>
        <img className="product-image" src="/images/boots.jpg" alt="" />
        <figcaption>
          <p className="product-description">
            <span>Nazwa</span>
            <span>Cena</span>
          </p>
          <p className="product-description">
            <span>Marka</span>
            <span>Model</span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Product;
