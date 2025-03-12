import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogRead() {
  const { id } = useParams();
  console.log("Blog ID:", id); // Debugging ID

  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/read/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Fetched Data:", data); // Debugging response
        setContent(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    if (id) fetchData();
  }, [id]);

  // Prevent rendering before data is loaded
  if (!content) {
    return <h1>Loading...</h1>;
  }
  console.log(content._id)

  return (
    <div className="container mx-auto py-10 px-5">
      <img
        src={content.banner}
        alt={content.title}
        className="w-full h-60 md:h-96 object-cover rounded-md"
      />
      <h1 className="text-lg font-bold mt-4">{content.title}</h1>
      <p className="text-gray-600">
        {content.location} | {" "}
        {content.createdAt ? new Date(content.createdAt).toDateString() : ""}
      </p>
      <div className="mt-4">
        {content?.content?.blocks?.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: block.data.text }}
                />
              );
            case "header":
              // return React.createElement(
              //   `h${block.data.level}`,
              //   { key: index },
              //   block.data.text
              // );
              return(
                <h1 className="text-[32px]" key={index}>
                  {block.data.text}
                </h1>
              )
            case "image":
              return (
                <div key={index} className="my-4">
                  <img
                    src={block.data.file.url}
                    alt={block.data.caption}
                    className="w-full h-auto rounded-md"
                  />
                  {block.data.caption && (
                    <p className="text-sm text-gray-500">
                      {block.data.caption}
                    </p>
                  )}
                </div>
              );

            case "code":
              return (
                <pre
                  key={index}
                  className="bg-gray-900 text-white p-4 rounded-md overflow-auto h-[500px] overflow-y-scroll w-full "
                >
                  <code className="whitespace-pre-wrap ">
                    {block.data.code}
                  </code>
                </pre>
              );

            default:
              return null;
          }
        })}
      </div>
      ;
    </div>
  );
}

export default BlogRead;
