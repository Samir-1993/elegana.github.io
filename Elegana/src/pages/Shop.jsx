import React from 'react'
import "./pages.css";
import { ProductItem } from "../Components/ProductItem/ProductItem";
import { productDetails } from "../Components/Assets/productInfo";
import { Link } from 'react-router-dom';
import { MainHeading } from "../Components/MainHeading";
import commonBanner from "../Components/Assets/images/product-banner.png"


export const Shop = () => {
  return (
    <>
      <section className="common-banner-section">
        <div className="banner-imgbox">
          <img src={commonBanner} className="w-100 h-auto" alt="" />
        </div>
      </section>

      <section className="bestseller-section">
        <div className="container">
          <MainHeading className='text-center'>Best Seller</MainHeading>
          <div className="row justify-content-center mt-20 mb-mt-0 sm-mt-10 md-mt-10">
            {productDetails.slice(0, 6).map((product, index) => (
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

            {/* <div className="col-lg-4 col-md-12 col-sm-12">
              <ProductItem
                img={productDetails[0].images[0]}
                desc={productDetails[0]["description"]}
                name={productDetails[0]["name"]}
                price={productDetails[0]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <ProductItem
                img={productDetails[1].images[0]}
                desc={productDetails[1]["description"]}
                name={productDetails[1]["name"]}
                price={productDetails[1]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <ProductItem
                img={productDetails[2].images[0]}
                desc={productDetails[2]["description"]}
                name={productDetails[2]["name"]}
                price={productDetails[2]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-30">
              <ProductItem
                img={productDetails[3].images[0]}
                desc={productDetails[3]["description"]}
                name={productDetails[3]["name"]}
                price={productDetails[3]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-30">
              <ProductItem
                img={productDetails[4].images[0]}
                desc={productDetails[4]["description"]}
                name={productDetails[4]["name"]}
                price={productDetails[4]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-30">
              <ProductItem
                img={productDetails[5].images[0]}
                desc={productDetails[5]["description"]}
                name={productDetails[5]["name"]}
                price={productDetails[5]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="bestseller-section shop-2">
        <div className="container">
          <MainHeading className='text-center'>Shop By Category</MainHeading>
          <div className="row justify-content-center mt-20 mb-mt-0 sm-mt-10 md-mt-10">
            {productDetails.slice(12, 18).map((product, index) => (
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
            {/* <div className="col-lg-4 col-md-12 col-sm-12">
              <ProductItem
                img={productDetails[12].images[0]}
                desc={productDetails[12]["description"]}
                name={productDetails[12]["name"]}
                price={productDetails[12]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <ProductItem
                img={productDetails[13].images[0]}
                desc={productDetails[13]["description"]}
                name={productDetails[13]["name"]}
                price={productDetails[13]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <ProductItem
                img={productDetails[14].images[0]}
                desc={productDetails[14]["description"]}
                name={productDetails[14]["name"]}
                price={productDetails[14]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div> */}
            {/* <div className="col-lg-4 col-md-12 col-sm-12 mt-30">
              <ProductItem
                img={productDetails[15].images[0]}
                desc={productDetails[15]["description"]}
                name={productDetails[15]["name"]}
                price={productDetails[15]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-30">
              <ProductItem
                img={productDetails[16].images[0]}
                desc={productDetails[16]["description"]}
                name={productDetails[16]["name"]}
                price={productDetails[16]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-30">
              <ProductItem
                img={productDetails[17].images[0]}
                desc={productDetails[17]["description"]}
                name={productDetails[17]["name"]}
                price={productDetails[17]["price"]}
                href={`/ShopDetails/${product.id}`}
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
