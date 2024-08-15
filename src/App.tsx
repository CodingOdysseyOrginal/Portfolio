import { Home } from "./Sections/Home/Home";
import { Projects } from "./Sections/Projects/Projects";
import "./App.css";
import Contact from "./Sections/Contact/Contact";
import About  from "./Sections/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
     
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
