import React from 'react'
import { Link } from 'react-router-dom';

function WriteBlog() {
  return (
    <Link to="/edit">
      <div className="flex items-center justify-center gap-2 fixed top-20 right-10 bg-white p-2 rounded-lg shadow-lg cursor-pointer">
        <i class="fi fi-rs-scroll-document-story"></i>
        <p>add blog</p>
      </div>
    </Link>
  );
}

export default WriteBlog