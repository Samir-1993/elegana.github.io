import React from "react";
import "./ProductItem.css";
import "../Assets/productInfo";
import {Button} from '../Button/Button.jsx'

export const ProductItem = ({ img, desc, name, category, price, to }) => {
  return (
    <div className="product-box">
      <div className="product-imagebox">
        <img src={img} className="img-fluid w-100 h-auto" alt={desc} />
        <div className="product-btn-box">
          <Button label="Shop Now" to={to} className="product-btn" />
        </div>
      </div>
      <div className="product-contentbox-wrapper">
        <h3 className="product-heading">{name}</h3>
        <div className="product-contentbox">
          <p className="product-details">{desc}</p>
          <p className="product-price">₹{price}</p>
        </div>
      </div>
    </div>
  );
};
