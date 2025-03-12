import React from 'react'
import "./index.css"
import {BrowserRouter, Route,  Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx';
import Blog from './Pages/Blog.jsx';
import BlogEditor from './Blogs/BlogEditor.jsx';
import BlogRead from './Blogs/BlogRead.jsx';
function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomePage/>} />
             <Route path='/blog' element={<Blog/>}/>
             <Route path='/edit' element={<BlogEditor/>}/>
             <Route path='/blog/read/:id' element={<BlogRead/>}/>
          </Routes>
        </BrowserRouter>{" "}
    </>
  );
}

export default App