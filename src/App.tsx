import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import { About } from "./Sections/About/About";
import { Home } from "./Sections/Home/Home";
import { Projects } from "./Sections/Projects/Projects";
import './App.css'
import Contact from "./Sections/Contact/Contact";


function App() {
  return (
    <div>
      <NavBar />
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
