import React, { useState } from 'react';
import "./Footer.css";
import rightArrowBtn from '../Assets/images/right-arrow-btn.svg';
import instaIcon from '../Assets/images/insta-icon.svg';
import facebookIcon from '../Assets/images/facebook-icon.svg';
import copyRightIcon from '../Assets/images/copyright-icon.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter a valid email address.");
            return;
        }
        // handle email submission logic here (e.g., API call)
        console.log("Email submitted:", email);
    };
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-8 col-sm-12">
                        <div className="footer-clmn footer-clmn1">
                            <div className="footer-heading-section">
                                <p className="footer-heading2 text-white">Join our club, get 15% off for your Birthday</p>
                            </div>
                            <div className="subscriptionbox-wrapper mb-mt-30">
                                <form onSubmit={handleSubmit} className="subscriptionbox">
                                    <input
                                        type="email"
                                        name="emailID"
                                        placeholder="Enter Your Email Address"
                                        className="subscribeEmail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="subscription-btn">
                                        <img src={rightArrowBtn} alt="Submit" />
                                    </button>
                                </form>

                                <div className="subs-contentbox">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="emailNotificationChecked"
                                            checked={isChecked}
                                            onChange={(e) => setIsChecked(e.target.checked)}
                                        />
                                        <label className="form-check-label subs-contents text-white" htmlFor="emailNotificationChecked">
                                            By submitting your email, you agree to receive advertising emails from Elegana.
                                        </label>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 sm-mt-30 mb-mt-30">
                        <div className="footer-clmn footer-column2">
                            <div className="footer-heading-section">
                                <p className="footer-heading2 text-white">About Elegana</p>
                            </div>
                            <ul className="quick-link">
                                <li className="ql">
                                    <Link to="/Collection" className="footer-link">Collection</Link>
                                </li>
                                <li className="ql">
                                    <Link to="/Sustainability" className="footer-link">Sustainability</Link>
                                </li>
                                <li className="ql">
                                    <Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link>
                                </li>
                                <li className="ql">
                                    <Link to="/TermsAndConditions" className="footer-link">Terms & Condition</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 md-mt-30 sm-mt-30 mb-mt-30">
                        <div className="footer-clmn footer-column3">
                            <div className="footer-heading-section">
                                <p className="footer-heading2 text-white">Help & Support</p>
                            </div>
                            <ul className="quick-link">
                                <li className="ql">
                                    <Link to="/ReturnsAndRefunds" className="footer-link">Returns & Refunds</Link>
                                </li>
                                <li className="ql">
                                    <Link to="/FAQs" className="footer-link">FAQs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 md-mt-30 sm-mt-30 mb-mt-30">
                        <div className="footer-clmn footer-column4">
                            <div className="footer-heading-section">
                                <p className="footer-heading2 text-white">Contact Us</p>
                            </div>
                            <ul className="quick-link">
                                <li className="ql">
                                    <Link to="/Contact" className="footer-link">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="social_con md-mt-30">
                    <div className="social_icons">
                        <Link to="https://www.instagram.com" target="_blank" className="icons">
                            <img src={instaIcon} alt="" />
                        </Link>
                        <Link to="https://www.instagram.com" target="_blank" className="icons">
                            <img src={facebookIcon} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer_end">
                <div className="container">
                    <div className="footer-end-content">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p className="ft_end_txt text-center">
                                    <span><img src={copyRightIcon} alt="copyright" /></span>
                                    {(new Date().getFullYear())} Elegana. All Rights
                                    Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
