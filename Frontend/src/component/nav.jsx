import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { navItems, socials } from '../commons/common.js'
import Button from './Button.jsx'
import { useState } from 'react'
import {motion, useScroll} from "framer-motion"

function Nav({ scrollToSetion }) {
  const [navHover, setHover] = useState("Home");
  const [barOpen, setOpen] = useState(false);

  return (
    <header className="h-[64px] bg-white z-30 fixed top-0 w-full shadow-sm ">
      <nav className="flex justify-between items-center h-full container">
        <div className="z-20">
          <h4>EMMANUEL ONOSODE.</h4>
        </div>
        <ul className=" flex max-md:hidden gap-8 ">
          {navItems.map(({ label, href }) => (
            <motion.li
              animate={{ scale: navHover === label ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.2, borderBottom: "2px solid black" }}
              key={label}
            >
              <Link
                className={`font-bold hover:border-black `}
                to={href}
                onClick={() => {
                  setHover(label);
                  scrollToSetion(label)
                }}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex z-20  gap-2 items-center justify-center">
          <Button label="Contact" type="primary" />
          <svg
            onClick={() => setOpen(!barOpen)}
            className="md:hidden cursor-pointer "
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              animate={{
                rotate: barOpen ? 45 : 0,
              }}
              transformOrigin="50% 50%"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              x="3"
              y="15"
              width="22"
              height="2"
              fill="black"
            />
            <motion.rect
              animate={{
                rotate: barOpen ? -45 : 0,
                x: barOpen ? 10 : 0,
              }}
              transformOrigin="50% 50%"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                x: barOpen ? 3 : 0,
              }}
              x="3"
              y="7"
              width="22"
              height="2"
              fill="black"
            />
          </svg>
        </div>
      </nav>
      <motion.nav
        animate={{
          y: barOpen ? 0 : -1000,
          height: barOpen ? "100vh" : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`fixed  w-screen pt-[64px] bg-slate-50 z-10 top-0 left-0  `}
      >
        <div className="container">
          {navItems.map(({ label, href }) => (
            <Link to={href}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#000000",
                  color: "#ffff",
                }}
                key={label}
                className="items-center flex justify-between p-4 hover:bg-white border-b first:border-t"
              >
                <p className="font-custom text-2xl">{label}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="  container flex mt-20 justify-between items-center gap-2">
          {socials.map(({ label, icon }) => (
            <motion.button
              whileHover={{
                scale: 0.8,
                color: "#ffffff",
                backgroundColor: "#000000",
                gap:"25px"
              }}
              transition={{ duration: 0.3 }}
              key={label}
              className="flex items-center gap-2 p-4 
             justify-center hover:bg-white border w-full border-black rounded-full"
            >
              <i class={`fi ${icon}`}></i>
              {label}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}

export default Nav