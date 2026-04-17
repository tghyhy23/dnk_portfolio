
// import Projects from "../../components/Projects/Projects";
// import Contact from "../../components/Contact/Contact";

import Quotes from "./components/Quotes/Quotes";
import About from "./pages/About/About";
import Experiences from "./pages/Experiences/Experiences";
import Home from "./pages/Home/Home";

function MainPortfolio() {
  return (
    <main className="main-portfolio">
      <Home />
      
      <About />
      <Quotes />
      <Experiences />
    </main>
  );
}

export default MainPortfolio;