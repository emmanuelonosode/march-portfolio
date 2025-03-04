import React from 'react'

const ServiceCard = () => {
  return (
    <div className="h-[500px] overflow-hidden rounded-[16px] flex flex-col justify-between border-[1px] border-solid border-black max-w-[350px]  md:w-1/2">
      <img src="/im1.jpg" className="  h-[400px] object-cover w-full" alt="" />
      <div className="p-2 -[100px]">
        <p className='font-bold text-2xl tracking-normal'>tick text and sati</p>
        <hr className='border-black'/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aut.
        </p>
      </div>
    </div>
  );
}

export default ServiceCard