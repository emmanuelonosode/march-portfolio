import React from 'react'
import ServiceCard from "./component/ServiceCard.jsx"
import HomePage from './component/HomePage.jsx';
import {BrowserRouter, Route,  Routes} from 'react-router-dom'
function App() {
  return (
    <>
     
        <BrowserRouter>
          <Routes>
              <Route path='/signin' element={<ServiceCard />} />
              <Route path='/' element={<HomePage />} />
          
          </Routes>
        </BrowserRouter>{" "}
    
    </>
  );
}

export default App