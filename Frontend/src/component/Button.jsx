import React from 'react'

const Button = ({label, kind, className}) => {
  return (
    <div>
        <button className={  `px-3 py-1 rounded-full ${className}  ${kind=="primary" ? "bg-black text-white " : "bg-transparent border" }`}>
            {label}
        </button>
    </div>
  )
}

export default Button