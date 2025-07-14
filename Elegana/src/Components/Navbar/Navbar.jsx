import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/images/logo@2x.png";
import cartIcon from "../Assets/images/cart.png";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { cartCount } = useContext(CartContext);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100); // Trigger after 100px scroll
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header id="header-sticky" className={`header header-area ${isSticky ? 'header-sticky' : ''}`}>
            <div className="top-header-section">
                <div className="container">
                    <div className="top-header">
                        <p className="text-center top-header-content">
                            Enjoy Free Shipping On All Orders
                        </p>
                    </div>
                </div>
            </div>
            <div className="main-header-section">
                <div className="container">
                    <div className="main-header">
                        <div className="logobox">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className={`menu ${menuOpen ? 'active' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`nav-menubox ${menuOpen ? "open" : ""}`}>
                            <div className="classycloseIcon" onClick={() => setMenuOpen(false)}>
                                <div className="cross-wrap">
                                    <span className="top"></span>
                                    <span className="bottom"></span>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Sustainability" className={({ isActive }) => isActive ? "active" : ""}>Sustainability</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Collection" className={({ isActive }) => isActive ? "active" : ""}>Collection</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="cart-icons-wrapper">
                            <Link className="cart-iconbox" to="/Cart">
                                <img src={cartIcon} className="cart-icon" alt="Cart" />
                                <span className="cartCount">{cartCount}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
