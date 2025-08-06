function NavBar() {
  return (
    <div>
      <nav className="navbar no-margin-bottom bootsnav alt-font bg-dark-gray sidebar-nav sidebar-nav-style-1 navbar-expand-lg sm-margin-50px-top sm-no-padding-lr">
        <div className="col-12 sidenav-header border-width-1-8 border-right border-bottom border-color-extra-dark-gray">
          <div className="logo-holder">
            <a href="#" className="d-inline-block logo sm-padding-15px-left">
              <img
                alt="StudySync Ai"
                src="images/logo-white-big.png"
                data-at2x="images/logo-white@2x.png"
              />
            </a>
          </div>
          <button
            className="navbar-toggler mobile-toggle"
            type="button"
            id="mobileToggleSidenav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="col-12 px-0 padding-20px-tb border-width-1-8 border-right border-color-extra-dark-gray">
          <div id="navbar-menu" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-left-sidebar font-weight-500">
              <li>
                <a href="#" title="Dashboard" className="center-link">
                  <img
                    src="images/ni-dashboard.png"
                    width="13"
                    height="13"
                    alt=""
                  />{" "}
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-new-project.png"
                    width="15"
                    height="15"
                    alt=""
                  />{" "}
                  Create New Project
                </a>
              </li>
              <li className="navbar-left-separator">&nbsp;</li>
              <li>
                <p className="text-medium-gray text-small text-uppercase padding-30px-lr sm-padding-15px-lr margin-10px-bottom">
                  Recent Projects
                </p>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-subject.png"
                    width="12"
                    height="12"
                    alt=""
                  />{" "}
                  Maths
                </a>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-subject.png"
                    width="12"
                    height="12"
                    alt=""
                  />{" "}
                  Science
                </a>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-subject.png"
                    width="12"
                    height="12"
                    alt=""
                  />{" "}
                  Biology
                </a>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-more2.png"
                    width="12"
                    height="12"
                    alt=""
                  />{" "}
                  More
                </a>
              </li>
              <li className="navbar-left-separator">&nbsp;</li>
              <li>
                <p className="text-medium-gray text-small text-uppercase padding-30px-lr sm-padding-15px-lr margin-10px-bottom">
                  Tools
                </p>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-notes.png"
                    width="13"
                    height="13"
                    alt=""
                  />{" "}
                  Notes
                </a>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-calendar.png"
                    width="13"
                    height="13"
                    alt=""
                  />{" "}
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" title="Upload">
                  <img
                    src="images/ni-calculator.png"
                    width="13"
                    height="13"
                    alt=""
                  />{" "}
                  Calculator
                </a>
              </li>
              <li>
                <div className="side-left-menu-close close-side"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
