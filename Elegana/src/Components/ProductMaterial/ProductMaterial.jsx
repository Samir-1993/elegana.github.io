import React from 'react'
import './ProductMaterial.css'
import {Button} from '../Button/Button.jsx'

export const ProductMaterial = () => {
  return (
    <section className="material-section">
        <div className="container">
            <div className="sec4-wrapper">
                <p className="sec4-details">
                    Stylish sustainability in clothing promotes eco-friendly choices for a greater future
                </p>
                <div className="sec4-btn-box">
                    <Button label="Sustainability" href="/Sustainability" />
                </div>
            </div>
        </div>
    </section>
  )
}
