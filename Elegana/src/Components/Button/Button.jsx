import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({ label = "Click Me", to = "/", className = "" }) => {
  return (
    <Link to={to} className={`btn1 ${className}`.trim()}>
      {label}
    </Link>
  );
};
