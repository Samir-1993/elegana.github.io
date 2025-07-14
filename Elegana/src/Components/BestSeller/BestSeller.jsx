import React from "react";
import "./BestSeller.css";
import { ProductItem } from "../ProductItem/ProductItem";
import { productDetails } from "../Assets/productInfo";
import { Link } from "react-router-dom";
import { MainHeading } from "../MainHeading";
import { ProductSlider } from "../Sliders/ProductSlider";

export const BestSeller = () => {
  return (
    <section className="bestseller-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-9 col-md-9 col-9">
            <div className="content-con section-title">
              <div className="left-contentbox">
                <MainHeading>Best Seller</MainHeading>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-3">
            <div className="view-more-button">
              <Link to="/shop" className="view-all-btn mb-mt-0">
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="best-seller-desk d-lg-block d-none">
          <div className="row justify-content-center mt-20 mb-mt-0 sm-mt-10 md-mt-10">
            {productDetails.slice(0, 3).map((product, index) => (
              <div key={index} className="col-lg-4 col-md-12 col-sm-12">
                <ProductItem
                  img={product.images[0]}
                  desc={product.description}
                  name={product.name}
                  price={product.price}
                  to={`/ShopDetails/${product.id}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="best-seller-mob d-lg-none d-block">
          <ProductSlider />
        </div>
      </div>
    </section>
  );
};
