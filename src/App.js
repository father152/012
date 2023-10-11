import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/Header/About/About.jsx";
import { Building } from "./components/Header/Building/Building.jsx";
import {Layout} from './components/Layout/Layout.jsx'
import { Home } from "./components/Home/Home.jsx";
import {Projects} from './components/Header/Projects/Projects.jsx'
import {Portfolio} from './components/Header/Portfolio/Portfolio.jsx'
import {Contact} from './components/Header/Contact/Contact.jsx'
import { House } from "./components/Home/Leftside/House.jsx";
import { Flat } from "./components/Home/Leftside/Flat.jsx";



function App() {
  return (
   
      <>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="building" element={<Building />} />
            <Route path="projects" element={<Projects />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        <Route path="/" element={<Layout />}>
            <Route path="house" element={<House />} />
            <Route path="flat" element={<Flat />} />
            
          </Route>

          
        </Routes>
      </>
   
  );
}

export default App;
