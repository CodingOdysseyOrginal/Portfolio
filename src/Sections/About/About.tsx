import "./About.css";

const About: React.FC = () => {
  return (
    <section id="About" className="About">
      <div>
        <h1>About Me</h1>
      </div>
      <div className="row">

        <div className="column">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I am a software developer with a good understanding of both
              front-end and back-end knowledge. While I do currently have a
              better understanding of frontend, I am working to understand C#
              language along with its frameworks such as ASP.NET and Blazor.
              This will allow me to develop full-stack projects.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Tailwind</span>
              <span>Github</span>
              <span>Visual Studio Code</span>
              <span>CSS</span>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>Python</span>
              <span>C#</span>
              <span>.NET</span>
              <span>ASP.NET</span>
              <span>Blazor</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
