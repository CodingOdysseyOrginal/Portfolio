import { Home } from "./Sections/Home/Home";
import { Projects } from "./Sections/Projects/Projects";
import "./App.css";
import Contact from "./Sections/Contact/Contact";
import About  from "./Sections/About/About";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div>
     <Nav/>
      <div className="main-content">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;