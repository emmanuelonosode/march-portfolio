import React from 'react'
import "./index.css"
import {BrowserRouter, Route,  Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx';
import Blog from './Pages/Blog.jsx';
function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomePage/>} />
             <Route path='/blog' element={<Blog/>}/>
          </Routes>
        </BrowserRouter>{" "}
    </>
  );
}

export default App