import React from 'react'

export const MainHeading = ({ children, className = "" }) => {
  return (
    <h2 className={`heading1 ${className}`}>{children}</h2>
  );
};
