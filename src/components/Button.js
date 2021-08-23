import React from 'react'

const Button = (props) => {
  const variant = props.variant ?? ''
  const className = props.className ?? ''
  const style = props.fullWidth ? {width: '100%'} : {}
  return <button
    className={`btn-${variant} ${className}`}
    style={style}
    {...props} />
}

export default Button
