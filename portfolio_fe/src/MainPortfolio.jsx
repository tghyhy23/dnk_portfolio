
// import Projects from "../../components/Projects/Projects";
// import Contact from "../../components/Contact/Contact";

import Quotes from "./components/Quotes/Quotes";
import About from "./pages/About/About";
import Experiences from "./pages/Experiences/Experiences";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";

function MainPortfolio() {
  return (
    <main className="main-portfolio">
      <Home />
      <Quotes />
      <About />
      <Skills />
      
      <Experiences />
      
    </main>
  );
}

export default MainPortfolio;