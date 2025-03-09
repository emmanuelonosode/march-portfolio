import React from 'react'
import { useState } from 'react';
import "./work.css"
import ScrollVelocity from '../scrollVolicity';

function Work() {

    const [indexTo, setIndexTo] = useState(1)
    const test = [
      {
        img: "/image1.jpg",
        desc: "With over a decade of experience in the design industry, I have honed my skills in creating visually stunning and user-friendly websites. My journey began with a passion for art and technology, leading me to specialize in web design and development. I believe in the power of storyt",
        name: "Faith Onosode | The Best Sister Ever!",
      },
      {
        img: "/image1.jpg",
        desc: "With over a decade of experience in the design industry, I have honed my skills in creating visually stunning and user-friendly websites. My journey began with a passion for art and technology, leading me to specialize in web design and development. I believe in the power of storyt",
        name: "Godwin Onosode | The Best Brother Ever!",
      },
    ];
    return (
      <>
        <div className="fadel bg-white py-20 ">
          <ScrollVelocity
            texts={[
              "SOME NICE WORDS FROM OUR PAST CLIENTS",
              "SOME NICE WORDS FROM OUR PAST CLIENTS",
            ]}
            // velocity={velocity}
            className="custom-scroll-text"
          />
          <div className="fadel-cont container">
            {test.map(
              ({ img, desc, name }, index) =>
                index === indexTo && (
                  <div key={index} className="test">
                    <img src={img} className='rounded-md' alt={name} />
                    <div className="test-text">
                      <q>{desc}</q>
                      <cite>{name}</cite>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </>
    );
}

export default Work