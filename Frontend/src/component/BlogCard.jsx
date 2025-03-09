import React from 'react'
import BlogTag from './blogTag'

function BlogCard({img,tags, location, title, time}) {
  return (
    <>
      <div className="shadow-lg hover:shadow-xl rounded-md ">
        <div className="h-52 w-full">
          <img
            src={img}
            className=" rounded-md w-full h-full object-fill"
            alt=""
          />
        </div>
        <div className="px-2">
          <p className="my-2">
            <small>{time}</small> | <small>{location}</small>
          </p>
          <p>
            <b>{title}</b>
          </p>
          <div className="flex flex-wrap gap-2 my-5">
            {tags.map((tag) => (
              <BlogTag key={tag} tag={tag} />
            ))}
            {/* <BlogTag/>
            <BlogTag/>
            <BlogTag/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard