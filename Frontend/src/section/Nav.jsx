import React, { useState } from "react";
import Button from "../component/button";
import { navLink } from "../common/common.jsx";

function Nav() {
  const [navMenu, setNavMenu] = useState("home");
  const [openBar , setOpenBar] = useState(false)
  console.log(navMenu);
  return (
    <nav className="flex items-center fixed bg-white justify-between h-16 max-w-[1200px] w-[100%] mx-auto ">
      <div>
        <p className="font-bold m ">EMMANUEL ONOSODE.</p>
      </div>

      <div className="gap-6 hidden md:flex">
        {navLink.map(({ label, href }, index) => (
          <li
            key={label}
            className={`list-none cursor-pointer ${
              navMenu == label ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setNavMenu(label)}>
            {label}
          </li>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button kind="primary" label="Contact Me" />
        <svg
          className="bar-svg"
          onClick={() => setOpenBar(!openBar)}
          width="32"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="15" width="28" height="2" fill="currentColor" />
          <rect x="3" y="7" width="28" height="2" fill="currentColor" />
        </svg>
      </div>

      <div
        className={`fixed bg-white h-full w-full left-0 ${
          openBar ? "hidden" : "top-[4rem]"
        }`}>
        <div>
          {navLink.map(({ label, href }) => (
            <div key={label} className="flex items-center p-4  border-b justify-between  hover:bg-slate-100">
              <li className="list-none  font-semibold text-2xl">{label}</li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
