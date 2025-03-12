import React, { useEffect, useState } from 'react'
import BlogCard from "../component/BlogCard.jsx"
import { blog } from '../commons/common.js'
import Nav from '../component/nav.jsx';
import WriteBlog from '../component/WriteBlog.jsx';
import axios from "axios"
function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/blogs");
        setData(res.data.content);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Added dependency array to prevent infinite re-renders

  return (
    <>
      <Nav />
      <WriteBlog />
      <div className="container border-y-2 py-10 my-10 ">
        <h1>Blog</h1>
        <p className="max-w-[300px] my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
          earum?
        </p>
      </div>
      <div className="container grid border-b-2 py-10 grid-cols-1 sm:grid-cols-2 gap-5 my-10  ">
        {data
          .slice(0, 2)
          .map(({ banner, createdAt, tags, location, title, _id }) => (
            <BlogCard
              key={_id}
              img={banner}
              time={
                createdAt
                  ? new Date(createdAt).toDateString()
                  : ""
              }
              title={title}
              location={location}
              tags={tags}
              id={_id}
            />
          ))}
      </div>

      <div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10  ">
          {data
            .slice(2)
            .map(({ banner, createdAt, tags, location, title, _id }) => (
              <BlogCard
                key={_id}
                img={banner}
                time={createdAt ? new Date(createdAt).toDateString() : ""}
                title={title}
                location={location}
                tags={tags}
                id={_id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Blog