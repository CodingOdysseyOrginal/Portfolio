import { useEffect } from "react";
import "./Home.css";
import Myself from "./Img/me.jpg";
import Typed from "typed.js";

export function Home() {
  useEffect(() => {
    const options = {
      strings: ["Traveler", "Muay Thai Fighter", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };
    
    const typed = new Typed(".typedText", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Christopher O'Connor</span>
        </div>
        <div className="featured-name">
          <p>
            I'm a <span className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            I'm a Software Developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href="img/Christopher.cv.pdf" download="img/Christopher.cv.pdf">
            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
          </a>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={Myself} alt="avatar" />
        </div>
      </div>
    </section>
  );
}
