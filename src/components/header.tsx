function Header() {
  return (
    <section className="wow animate__fadeIn bg-extra-dark-gray border-bottom border-color-extra-dark-gray border-width-1-8 padding-30px-tb page-title-small top-space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 alt-font text-light-gray breadcrumb justify-content-center justify-content-md-end text-small sm-margin-10px-top">
            <ul>
              <li>
                Welcome{" "}
                <a href="#" className="text-link-green font-weight-500">
                  Tan Seong Yih <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
