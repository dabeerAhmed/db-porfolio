import About from "./components/About";
import Icon from "./components/Icon";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
// import {FaBars, FaTimes} from "react-icons/fa";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      
      <Icon />
    </div>
  );
}

export default App;
