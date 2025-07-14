import React from 'react'

export const SubHeading = ({ children , className ="" }) => {
  return (
    <h3 className={`heading2 ${className}`}>{children}</h3>
  )
}

