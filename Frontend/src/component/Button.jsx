import React from 'react'
import {motion, spring} from "framer-motion"
function Button({label,classN, type}) {
  return (
    <div>
      <motion.button
      whileHover={{
        scale:1.1
      }}
        className={`p-1 hover:opacity-[.9]  px-4 rounded-full ${classN} font-bold  ${
          type === "primary"
            ? "text-white bg-black "
            : "bg-transparent text-black border-2 border-black"
        }`}
      >
        {label}
      </motion.button>
    </div>
  );
}

export default Button