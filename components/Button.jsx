import React from 'react'

const Button = (props) => {
  const {className, children, type} = props;
  return (
    <>
      <button type={type} className={className}>{children}</button>
    </>
  )
}

export default Button