import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Header } from "./Header";
import { Internship } from "./Internship";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hobbies } from "./Hobbies";
import { Achievements } from "./Achievements";
import { About } from "./About";
import { Home } from "./Home";
function App() {
  return(
    <div>
        <Header/>
        <Home/>
        <About/>
        <Internship/>
        <Achievements/>
        <Skills/>
        <Projects/>
        <Hobbies/>
        <Contact/>
        <Footer/>
    </div>
  );
}
export default App;