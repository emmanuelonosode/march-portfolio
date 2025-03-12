import React, { useState, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Paragraph from "@editorjs/paragraph";
import Quote from "@editorjs/quote";
import Embed from "@editorjs/embed";
import CodeTool from "@editorjs/code";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import BlogTag from "../component/blogTag";

const BlogEditor = () => {
  const [tags, setTags] = useState([]);
  const [tagPut, setTagPut] = useState("");
  const [location, setLocation] = useState("osogbo");
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState(null);
  const editorRef = useRef(null);

  const handleKeyDown = (e) => {
    e.preventDefault(); // Prevent form submission
    if (tagPut.trim() !== "") {
      setTags([...tags, tagPut.trim()]);
      setTagPut("");
    }
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "emmanuel-onosode");
    formData.append("cloud_name", "drd7v5sny");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/drd7v5sny/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await uploadImageToCloudinary(file);
      setBanner(imageUrl);
      console.log(banner)
    }
  };

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        tools: {
          header: Header,
          paragraph: { class: Paragraph, inlineToolbar: true },
          list: List,
          quote: Quote,
          embed: Embed,
          code: CodeTool,
          marker: Marker,
          inlineCode: InlineCode,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile: async (file) => {
                  const imageUrl = await uploadImageToCloudinary(file);
                  return {
                    success: 1,
                    file: { url: imageUrl },
                  };
                },
              },
            },
          },
        },
      });
      editorRef.current = editor;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title cannot be empty.");
      return;
    }

    if (!editorRef.current) {
      alert("Editor is not ready.");
      return;
    }

    const content = await editorRef.current.save();
    const postData = { title, content, banner, location, tags };

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      console.log("Post created successfully");
      alert("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          id="imageInput"
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label
          htmlFor="imageInput"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Upload Image
        </label>

        {banner && (
          <img
            src={banner}
            alt="Preview"
            style={{ width: "100%", marginTop: "10px" }}
          />
        )}

        <input
          type="text"
          placeholder="Enter City"
          className="w-full my-2 py-1 border "
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter a tag and press Enter"
          className="w-full my-2 py-1 border "
          value={tagPut}
          onChange={(e) => setTagPut(e.target.value)}
        />
        <button onClick={handleKeyDown}>enter</button>
        {tags && tags.map((tag, index) => <BlogTag key={index} tag={tag} />)}

        <div
          id="editorjs"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "300px",
          }}
        ></div>

        <button type="submit" style={{ marginTop: "10px", padding: "10px" }}>
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
