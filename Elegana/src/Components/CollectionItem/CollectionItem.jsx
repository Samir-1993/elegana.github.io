import React from 'react'
import './CollectionItem.css'
import "../Assets/productInfo";
import {Button} from '../Button/Button.jsx'

export const CollectionItem = ({ img,  className = "" }) => {
    return (
        <div className={`collection-box ${className}`}>
            <div className="collection-imagebox">
                <img src={img} className="img-fluid w-100" alt="" />
                <div className="collection-btn-box">
                    <Button label="Shop Now" to="/collection" className="collection-btn" />
                </div>
            </div>
        </div>
    )
}