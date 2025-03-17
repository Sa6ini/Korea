import React from "react";
const HeaderInner = () => {
  return (
    <div className="header-inner">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              {/* Start Logo */}
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="#" />
                </a>
              </div>
              {/* End Logo */}
              {/* Mobile Nav */}
              <div className="mobile-nav" />
              {/* End Mobile Nav */}
            </div>
            <div className="col-lg-7 col-md-9 col-12">
              {/* Main Menu */}
              <div className="main-menu">
                <nav className="navigation">
                  <ul className="nav menu">
                    <li className="active">
                      <a href="#">
                        Home <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Doctos </a>
                    </li>
                    <li>
                      <a href="#">Services </a>
                    </li>
                    <li>
                      <a href="#">
                        Pages <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Blogs <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="blog-single.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/ End Main Menu */}
            </div>
            <div className="col-lg-2 col-12">
              <div className="get-quote">
                <a href="appointment.html" className="btn">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderInner;
