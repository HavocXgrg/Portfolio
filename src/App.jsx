import React from "react";
import NavBar from "./components/NavBar";
import Herosection from "./components/Herosection";
import AboutSection from "./components/AboutSection";

import Projects from "./components/Projects";

import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div>
      <NavBar />
      <Herosection />
      <AboutSection />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
