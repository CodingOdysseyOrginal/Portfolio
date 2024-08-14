import Footer from "./Components/Footer/Footer";
import { About } from "./Sections/About/About";
import { Home } from "./Sections/Home/Home";
import { Projects } from "./Sections/Projects/Projects";
import './App.css'
import Contact from "./Sections/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <Home />
        <About />
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
