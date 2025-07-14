import React from 'react';
import './ContactInfoBorderBox.css';
import { Button } from '../Button/Button'; // Ensure path is correct

export const ContactInfoBorderBox = ({ img, heading, details, to, label }) => {
  return (
    <div className="contactInfoBox">
      {img && <img src={img} alt={heading} className="contactInfo-img" />}
      {heading && <h4 className="contactInfo-heading">{heading}</h4>}
      {details && <p className="contactInfo-details">{details}</p>}
      {label && to && <Button label={label} to={to} className="contact-btn" />}
    </div>
  );
};
