
// import Projects from "../../components/Projects/Projects";
// import Contact from "../../components/Contact/Contact";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function MainPortfolio() {
  return (
    <main className="main-portfolio">
      <Home />
      <About />
      {/* Thêm các section khác vào đây sau này */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
}

export default MainPortfolio;