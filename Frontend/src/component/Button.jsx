import React from 'react'

const Button = ({label, kind}) => {
  return (
    <div>
        <button className={  `px-3 py-1 rounded-full  ${kind=="primary" ? "bg-black text-white " : "bg-transparent border" }`}>
            {label}
        </button>
    </div>
  )
}

export default Button