import React from "react";
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
