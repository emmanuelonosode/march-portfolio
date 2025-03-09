import React from 'react'
import BlogCard from "../component/BlogCard.jsx"
import { blog } from '../commons/common.js'
import Nav from '../component/nav.jsx';
function Blog() {

  return (
    <>
    <Nav/>
      <div className="container border-y-2 py-10 my-10 ">
        <h1>Blog</h1>
        <p className="max-w-[300px] my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
          earum?
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-5 my-10  ">
        {blog.slice(0,2).map(({ img, time, tags, location, title }) => (
          <BlogCard
            img={img}
            time={time}
            title={title}
            location={location}
            tags={tags}
          />
        ))}
      </div>

      <div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10  ">
          {blog.slice(2).map(({ img, time, tags, location, title }) => (
            <BlogCard
              img={img}
              time={time}
              title={title}
              location={location}
              tags={tags}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog