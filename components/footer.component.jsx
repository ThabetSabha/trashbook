const Footer = ({ theme }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="#"
          rel="noopener noreferrer"
          style={{ fontSize: "24px" }}
          aria-label="Go To Top"
        >
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>

        <div className="social-links">
          <p className="for-more">For More Trash :</p>

          <a
            href="https://www.linkedin.com/in/thabetsabha"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedin"
          >
            <i
              className={`fa fa-linkedin ${
                theme === "light" ? "" : "fa-inverse"
              }`}
              style={{ fontSize: "36px" }}
            ></i>
          </a>

          <a
            href="https://github.com/ThabetSabha"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github"
          >
            <i
              className={`fa fa-github ${
                theme === "light" ? "" : "fa-inverse"
              }`}
              style={{ fontSize: "36px" }}
            ></i>
          </a>
        </div>

        <hr />

        <p className="credit">
          © {new Date().getFullYear()} - developed by{" "}
          <a
            href="https://thabet.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thabet Sabha
          </a>
          <br />
          Design inspired by{" "}
          <a
            href="https://www.youtube.com/watch?v=2IjyqauKumE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev Ed
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
