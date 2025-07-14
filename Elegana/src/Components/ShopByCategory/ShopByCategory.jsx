import React from 'react'
import "./ShopByCategory.css";
import { ProductItem } from "../ProductItem/ProductItem";
import { categoryDetails } from "../Assets/productInfo";
import { Link } from 'react-router-dom';
import { MainHeading } from "../MainHeading";
import { CategorySlider } from '../Sliders/CategorySlider';

export const ShopByCategory = () => {
  return (
    <section className="shopby-category-section">
      <div className="container">
        <MainHeading>Shop By Category</MainHeading>
        <div className="shopby-category-desk d-lg-block d-none">
          <div className="row justify-content-center mt-20 mb-mt-0 sm-mt-10 md-mt-10">
            {categoryDetails.slice(0, 4).map((category, index) => (
  <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
    <ProductItem
      img={category.image}
      name={category.name}
      to="/Shop"
    />
  </div>
))}

            {/* <div className="col-lg-3 col-md-6 col-sm-12">
              <ProductItem
                img={categoryDetails[0]["image"]}
                name={categoryDetails[0]["name"]}
                to="/Shop"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ProductItem
                img={categoryDetails[1]["image"]}
                name={categoryDetails[1]["name"]}
                to="/Shop"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ProductItem
                img={categoryDetails[2]["image"]}
                name={categoryDetails[2]["name"]}
                to="/Shop"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ProductItem
                img={categoryDetails[3]["image"]}
                name={categoryDetails[3]["name"]}
                to="/Shop"
              />
            </div> */}
          </div>
        </div>
        <div className="best-seller-mob d-lg-none d-block">
          <CategorySlider />
        </div>
      </div>
    </section>
  );
}
