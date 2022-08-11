import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer, Contact } from './common';
import { Home, Skills, Experience, Projects } from './pages';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({
        delay: 100,
        duration: 1500,
        once: true,
        anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
