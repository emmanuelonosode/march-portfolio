import React from 'react'
import ServiceCard from "./component/ServiceCard.jsx"
function App() {
  return (
    <>
    <div className='h-[100vh] bg-black flex justify-center items-center text-white'>
         <ServiceCard type="signin"/>
    </div>
    </>
  );
}

export default App