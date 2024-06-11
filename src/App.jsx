import React from "react";
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works } from './components';
import { LanguageProvider } from "./components/context/LanguageContext";
import Techs from "./components/Techs";


const App = () => {
  return (
    <BrowserRouter>
    <LanguageProvider>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
        <Techs />
      </div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
