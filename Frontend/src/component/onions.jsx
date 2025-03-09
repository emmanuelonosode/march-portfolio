import React from 'react'
import { motion } from 'framer-motion'
function Onions() {
  return (
    <motion.div
    initial={{

    }}
    transition={{
        duration:12,
        repeat: Infinity, ease: "linear"
        
    }}
    animate={{
    rotate:360 ,       

    }}
    className='h-screen w-screen bg-gradient-to-r from-purple-500 to-green-500 fixed top-40 left-0 -z-50 opacity-[.2] blur-3xl backdrop-blur-lg '>

    </motion.div>
  )
}

export default Onions