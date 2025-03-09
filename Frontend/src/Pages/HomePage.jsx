import React from "react";
import Nav from "../component/nav.jsx";
import Button from "../component/Button.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Onions from "../component/onions.jsx";
import {
  techStacks,
  work,
  projects,
  testi,
  blogs,
  contact,
  socials,
} from "../commons/common.js";
import { Link } from "react-router-dom";
import Work from "../component/work/work.jsx";

const scrollToSetion = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function HomePage() {
  const [showCard, setShowCard] = useState(null);
  const [showTesti, setShowTesti] = useState(null);

  function handleTesti(id) {
    setShowTesti((prev) => (prev === id ? null : id));
  }
  return (
    <>
      <Nav scrillFunction={scrollToSetion} />
      <Onions />

      <section
        id="home"
        className="flex max-md:flex-col justify-between gap-4 items-center container"
      >
        <div className="max-w-[600px] max-md:mt-20 ">
          <h1 className="my-4">Full-Stack Developer, UI/UX Designer.</h1>
          <p className="text-2xl mb-6">
            i make beautiful web application and web-design tat catches teeye so
            as i was sayin before i was interrupted by tese bitces
          </p>
          <div className="flex gap-5 w-full">
            <Button
              classN="px-12 py-2 rounded-md border-2"
              label="Contact"
              type="primary"
            />
            <Button
              classN="px-12 py-2 rounded-md"
              label="Projects"
              type="secondary"
            />
          </div>
        </div>
        <div className="w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src="/src/assets/images/hero-image.jpg"
            alt=""
          />
        </div>
      </section>

      {/* ------------about Page - section here-------------------------------- */}

      <section
        id="about"
        className="container min-h-screen gap-6 flex flex-wrap justify-between items-center relative"
      >
        <div className="absolute top-16 left-10 ">
          <motion.svg
            initial={{}}
            whileHover={{
              scale: 1.5,
              rotate: 360,
            }}
            transition={{
              duration: 3,
              ease: "linear",
            }}
            width="56"
            height="64"
            viewBox="0 0 56 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.664628 62.8536L2.10369 1.38267L54.6196 33.3644L0.664628 62.8536Z"
              stroke="#570570"
              stroke-linejoin="round"
            />
          </motion.svg>
        </div>

        <div className="max-w-96">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, sit
            doloribus, minus quisquam repellat voluptatem consectetur mollitia,
            distinctio nemo quam atque ipsam quis tempora consequuntur. Facere
            officiis veniam magnam sunt a ipsum fugiat, id possimus numquam cum
            libero expedita at impedit repudiandae repellat maiores sint quas
            excepturi pariatur. Provident, libero?
          </p>
        </div>
        <div>
          <motion.div
            whileHover={{
              // scale:1.1,
              boxShadow: "0px 25px 50px -12px rgba(0,0,0)",
            }}
            className="w-[300px]  rounded-md h-[300px]  bg-gradient-to-t from-slate-500 to-slate-200 relative"
          >
            <motion.img
              initial={{}}
              whileHover={{
                x: 10,
                y: 10,
                borderRadius: "6px",
              }}
              className="min-w-full rounded-md h-full object-fill  absolute "
              src="/src/assets/images/testimonial-3.jpg"
              alt="my portrait"
            />
          </motion.div>
        </div>
        <div className="max-w-[400px]">
          <h2 className="capitalise mb-10 text-center">
            tech stacks and technology
          </h2>
          <div>
            {techStacks.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#000000",
                  color: "#ffff",
                }}
                className="flex border-b-2 first:border-t-2 p-4 border-b-gray-300 items-center gap-2"
              >
                <i class={`fi ${tech.icon}`}></i>
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* .............................--------------------________________WORKKK________________-------------------.............. */}
      <hr />
      <section id="Services" className="container mt-20">
        <div className="flex justify-between gap-5 max-md:flex-col ">
          <h2>WORK</h2>
          <p className="max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste
            eius autem nobis inventore praesentium quidem ratione? Alias, id
            iure!
          </p>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-10 mt-40 gap-4">
          {work.map(({ label, href, img }) => (
            <motion.div
              inherit={{
                x: -1000,
                opacity: 0,
              }}
              whileInView={{ scale: 0.9, x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.5 }}
              className="h-screen  overflow-hidden rounded-lg relative"
              key={label}
            >
              <div className="absolute top-4 right-3 bg-white p-2 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokLinecap="round"
                    strokLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <Link to={href}>
                <img src={img} className="h-full w-full object-fill" alt="" />
              </Link>
              <div className="absolute bottom-4 text-white left-4">
                <h2>{label}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------Projects------------------- */}

      <motion.section
        id="Projects"
        initial={{
          scale: 0.1,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          amount: 0.3,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="container relative  my-60"
      >
        <h1>Projects</h1>
        <div className="m-10">
          {projects.map((items) => (
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              onMouseEnter={() => setShowCard(items)}
              onMouseLeave={() => setShowCard(null)}
              className="flex p-5 border-b-2 border-b-gray-300 gap-4   items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p>{items.label}</p>

              {showCard == items && (
                <motion.div
                  animate={{
                    rotate: 5,
                  }}
                  className={`absolute right-10 top-0 h-[400px] bg-white w-[300px] p-1 rounded-md shadow-2xl`}
                >
                  <Link to={items.href}>
                    <img
                      className="w-full h-3/4 object-fill  "
                      src={items.img}
                      alt=""
                    />
                    <div className="flex items-center justify-between p-4 ">
                      <p>{items.description}</p>
                      <div className="bg-black rounded-full ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#ffffff"
                        >
                          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                        </svg>{" "}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ________________TESTIMONIALS________________ */}

      <Work />
      {/* ...........................Words from our Customer------------ */}

      <div className="container my-80">
        <h1 className="my-10">
          WE KNOW <span>WHAT YOU THINK</span>{" "}
        </h1>
        <motion.div
          whileTap={{}}
          transition={{
            ease: "anticipate",
            duration: 20,
          }}
          className="flex flex-col gap-4"
        >
          {testi.map(({ label, details }) => (
            <motion.div
              className=" border-b-2 border-b-gray-300 p-4 first:border-t-2 cursor-pointer"
              onClick={() => handleTesti(label)}
            >
              <motion.div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <h4>{label}</h4>
              </motion.div>
              {showTesti == label && (
                <motion.p
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mx-16 py-5"
                >
                  <small>{details}</small>
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ......
      Blogs----------------------- */}

      <section id="blog" className="container my-80">
        <div className="">
          <div className="mb-5">
            <h1 className="mb-4">blog</h1>
            <p className="max-w-80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
              possimus.
            </p>
          </div>
          <div className="flex mb-4 ">
            {blogs.map(({ tags }) =>
              tags.map((tag) => (
                <button className="px-4  bg-slate-300 rounded-lg border-2">
                  {tag}
                </button>
              ))
            )}
          </div>
          <hr />
        </div>
        <div className="flex gap-4">
          {blogs.map(({ img, title, date, tags }) => (
            <div className="shadow-lg max-w-80 bg-white rounded-md overflow-hidden hover:shadow-2xl transition-all duration-100 ease-in">
              <img className="w-full object-fill" src={img} alt="" />
              <p className="p-4 ">
                <small className="bg-slate-300 p-2 rounded-lg">{tags}</small>
              </p>
              <hr className="bg-black" />

              <p className="p-4">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----contact address---------- */}
      <div className="container my-10">
        <h1 className="">Get in Touch</h1>
      </div>
      <div className=" container justify-between flex flex-wrap gap-10">
        {contact.map(({ svg, name, desc, detail }, index) => (
          <div key={index} className="max-w-80 border-l-2 border-gray-600 px-4 mb-16">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={svg} fill="black" />
            </svg>

            <h2 className="my-4">{name}</h2>
            <p>{desc}</p>
            <b>{detail}</b>
          </div>
        ))}
      </div>

      {/* // --------FOtter------- */}
      <div className="bg-black pb-4 pt-10">
        <div className="container space-y-20  text-white">
          <h3>Emmanuel Onosode.</h3>

          <div className="flex justify-between max-md:flex-col">
            <div className="flex flex-col gap-10 justify-between">
              <p>
                <small>Follow Me </small>
              </p>
              <div className="flex gap-4">
                {socials.map(({ label, href }) => (
                  <div className="flex gap-2 items-center">
                    <a href={href}>{label.toUpperCase()}</a>
                    <svg
                      className="rotate-45"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex  flex-col gap-6 justify-between">
              <p>
                <p>
                  <small>Stay Connected w/ me</small>
                </p>
              </p>
              <div>
                <form className="relative w-80 max-md:max-w-80 min-w-60">
                  <input
                    className="bg-black border-b w-full  text-white outline-none py-2 "
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <svg
                    className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                  </svg>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap  justify-between">
            <p>
              <small>&copy; {new Date().getFullYear()}</small>
            </p>
            <p>
              Designed By:{" "}
              <small>
                Emmanuel <span>Onosode</span>
              </small>
            </p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
