import React from 'react';
import './Sliders.css'
import Slider from 'react-slick';
import { ProductItem } from "../ProductItem/ProductItem";
import { productDetails } from "../Assets/productInfo";

export const CategorySlider = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3, // number of items to show on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="product-slider-container mt-20">
      <Slider {...settings2}>
        {productDetails.slice(12, 17).map((product, index) => (
          <div key={index} className="product-itembox">
            <ProductItem
              img={product.images[0]}
              desc={product.description}
              name={product.name}
              price={product.price}
              to={`/ShopDetails/${product.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
