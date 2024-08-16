import { Home } from "./Sections/Home/Home";
import { Projects } from "./Sections/Projects/Projects";
import "./App.css";
import About  from "./Sections/About/About";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import ContactMe from "./Sections/ContactMe/ContactMe";

function App() {
  return (
    <div>
     <Nav/>
      <div className="main-content">
        <Home />
        <About />
        <Projects />
        <ContactMe/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
