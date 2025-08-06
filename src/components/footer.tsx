function Footer() {
  return (
    <footer className="footer-center-logo bg-extra-dark-gray border-top border-color-extra-dark-gray border-width-1-8 padding-30px-tb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center sm-margin-10px-bottom">
            <a href="index.html">
              <img
                className="footer-logo"
                src="images/logo-white.png"
                data-at2x="images/logo-white@2x.png"
                alt="StudySync Ai"
              />
            </a>
            &copy; 2025 &nbsp; | &nbsp; Powered by{" "}
            <a href="#" target="_blank" title="Legato">
              Legato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
