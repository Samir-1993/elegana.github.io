import React from 'react'
import "./pages.css";
import { ProductItem } from "../Components/ProductItem/ProductItem";
import { productDetails } from "../Components/Assets/productInfo";
import { Link } from 'react-router-dom';
import { MainHeading } from "../Components/MainHeading";
import commonBanner from "../Components/Assets/images/product-banner.png"

export const Collection = () => {
  return (
    <>
      <section className="common-banner-section">
        <div className="banner-imgbox">
          <img src={commonBanner} className="w-100 h-auto" alt="" />
        </div>
      </section>

      <section className="bestseller-section collection">
        <div className="container">
          <MainHeading className='text-center'>Collection</MainHeading>
          <div className="row justify-content-center mt-20 mb-mt-0 sm-mt-10 md-mt-10">
            {productDetails.slice(6, 12).map((product, index) => (
              <div key={index} className="col-lg-4 col-md-12 col-sm-12 mb-30">
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
      </section>
    </>
  )
}
