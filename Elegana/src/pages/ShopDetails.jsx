import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductImageSlider } from "../Components/ProductImageSlider/ProductImageSlider";
import ratingIcon from "../Components/Assets/images/ratingIcon.svg";
import { Button } from "../Components/Button/Button";
import { ProductItem } from "../Components/ProductItem/ProductItem";
import { productDetails } from "../Components/Assets/productInfo";
import { MainHeading } from "../Components/MainHeading";
import { ProductSlider } from "../Components/Sliders/ProductSlider";
import { CartContext } from "../context/CartContext";

export const ShopDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id); // ensure it's a number
  const product = productDetails.find((item) => item.id === productId);

  const { addToCart } = useContext(CartContext);

  const [showMessage, setShowMessage] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000); // Hide after 2s
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // Generate 3 random suggestions excluding current product
  const getRandomSuggestions = (allProducts, excludeId, count = 3) => {
    const filtered = allProducts.filter((p) => p.id !== excludeId);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const suggestedProducts = getRandomSuggestions(productDetails, productId);

  return product ? (
    <>
      <section className="shop-details-sec1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <ProductImageSlider imgs={product.images} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-mt-30 sm-mt-30 md-mt-30">
              <div className="shop-details-wrapper">
                <h4 className="product-heading1">{product.name}</h4>
                <p className="product-details">{product.description}</p>
                <div className="product-ratingbox">
                  <div className="rating-iconbox">
                    <span className="rating">{product.rating}</span>{" "}
                    <img
                      src={ratingIcon}
                      alt="Rating"
                      className="rating-icon"
                    />
                    <span className="raters">{product.reviews}</span>
                  </div>
                </div>
                <div className="price-wrapper">
                  <div className="price-row">
                    <span className="new-price">₹{product.price}</span>
                    <span className="mrp">MRP</span>
                    <span className="old-price">₹{product.mrp}</span>
                    <span className="discount-price">
                      (Rs. {product.discount} OFF)
                    </span>
                  </div>
                  <p className="product-details2">inclusive of all taxes</p>
                </div>
                {/* <div className="addToCart-btnBox">
                  <button onClick={handleAddToCart} className="btn1 addToCart-btn">Add To Cart</button>
                </div> */}
                <div className="addToCart-btnBox">
                  <button
                    onClick={handleAddToCart}
                    className="btn1 addToCart-btn"
                  >
                    Add To Cart
                  </button>
                  {showPopup && (
                    <div className="popup-message">
                      ✅ Your item is added to cart
                    </div>
                  )}
                </div>
                <div className="products-detailsInfo">
                  <h5 className="new-price mt-20">Delivery</h5>
                  <p className="product-details2">
                    {product.delivery.info} <br />
                    {product.delivery.cod} <br />
                    {product.delivery.return}
                  </p>
                  <h5 className="new-price mt-20">Product Details</h5>
                  <h6 className="product-heading2 mt-10">Design Details</h6>
                  <p className="product-details2">
                    {product.productDetails.design}
                  </p>
                  <h6 className="product-heading2 mt-20">Size & Fit</h6>
                  <p className="product-details2">
                    Length: {product.sizeFit.length}
                    <br />
                    Width: {product.sizeFit.width}
                  </p>
                  <h6 className="product-heading2 mt-20">Material & Care</h6>
                  <p className="product-details2">
                    Material :- {product.materialCare.material}
                    <br />
                    Care :- {product.materialCare.care}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bestseller-section suggestion-section">
        <div className="container">
          <MainHeading className="text-center">You may also like</MainHeading>
          <div className="best-seller-desk d-lg-block d-none">
            <div className="row justify-content-center mt-20 mb-mt-0 sm-mt-10 md-mt-10">
              {suggestedProducts.map((product, index) => (
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
    </>
  ) : (
    <p>Product not found</p>
  );
};
