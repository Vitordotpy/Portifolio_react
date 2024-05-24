import React from "react";
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';
import { LanguageProvider } from "./components/context/LanguageContext";
import Techs from "./components/Techs";


const App = () => {
  return (
    <BrowserRouter>
    <LanguageProvider>
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
        <Techs />
      </div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
