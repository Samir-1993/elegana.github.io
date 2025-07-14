import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';

import callIcon from "../Components/Assets/images/call.svg";
import email2Icon from "../Components/Assets/images/email2.svg";
import arrowIcon from "../Components/Assets/images/arrow.png";
import deleteIcon from '../Components/Assets/images/delete-icon.svg';

import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    apartment: '',
    postalCode: '',
    city: '',
    cod: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      setErrorMessage('Your cart is empty, please add to cart first.');
      return;
    }

    setErrorMessage(''); // clear any existing error
    console.log('Order Placed:', formData);
    navigate('/orderSuccess');
  };

  const totalMRP = cartItems.reduce((sum, item) => sum + (item.mrp || 0) * item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const totalDiscount = totalMRP - totalPrice;

  return (
    <section className="cart-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="cart-formbox sticky-div">
              <form className="checkout-form" onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="cart-error-message">
                    {errorMessage}
                  </div>
                )}
                <div className="section-header">
                  <h3 className="cart-header">Contact</h3>
                </div>
                <div className="form-group">
                  <img src={callIcon} className="form-icon" alt="" />
                  <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <img src={email2Icon} className="form-icon" alt="" />
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <h3 className="cart-header">Shipping Address</h3>
                <input type="text" name="country" placeholder="Country/Region" value={formData.country} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                <input type="text" name="apartment" placeholder="Apartment, Suite, Etc. (Optional)" value={formData.apartment} onChange={handleChange} />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                  </div>
                </div>
                <h3 className="cart-header">Payment Method</h3>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" name="cod" checked={formData.cod} onChange={handleChange} />
                  <label className="checkbox-group checkbox-label">Cash On Delivery</label>
                </div>
                <div className="form-footer mt-20">
                  <a href="/Shop" className="return-link">
                    <img src={arrowIcon} className="arrow-icon" alt="" /> Return To Shop
                  </a>
                  <button type="submit" className="btn1 place-order-btn">Place Order</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="cart-summarybox">
              <h3 className="summary-heading text-center">Your Cart</h3>
              {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-productbox mt-30">
                    <div className="cart-pro-imgbox">
                      <img src={item.images?.[0]} alt={item.name} />
                    </div>
                    <div className="cart-pro-contentbox">
                      <div className="cart-pro-inner-content">
                        <div className="cart-info-content">
                          <h4 className="product-heading">{item.name}</h4>
                          <p className="product-details">{item.description}</p>
                        </div>
                        <button className="cart-delete" onClick={() => removeFromCart(item.id)}>
                          <img src={deleteIcon} alt="Delete" />
                        </button>
                      </div>
                      <div className="cart-price-row">
                        <div className="cart-qty-box">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <p className="cart-price">₹{(item.price || 0) * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
              <h3 className="summary-heading text-center mt-50">Order Summary</h3>
              <div className="order-summary-box">
                <div className="order-inner-row">
                  <p className="summary-name">Price</p>
                  <p className="summary-price">₹{totalMRP}</p>
                </div>
                <div className="order-inner-row">
                  <p className="summary-name">Discount</p>
                  <p className="summary-price">₹{totalDiscount}</p>
                </div>
                <div className="order-inner-row">
                  <p className="summary-name">Shipping</p>
                  <p className="summary-price">Free</p>
                </div>
                <div className="hr-line"></div>
                <div className="order-inner-row mt-10">
                  <p className="summary-name">Total Amount</p>
                  <p className="summary-price">₹{totalPrice}</p>
                </div>
                <p className="order-notes">
                  The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};