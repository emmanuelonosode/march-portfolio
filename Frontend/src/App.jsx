import React from 'react'
import Nav from './section/Nav'
import Hero from './section/Hero'

function App() {
  return (
    <>
      <section className="shadow-sm">
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
    </>
  );
}

export default App