import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" className="footer-link">
            Christopher O'Connor
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
