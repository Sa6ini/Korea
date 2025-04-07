import React from "react";
const HeaderInner = () => {
  return (
    <div className="header-inner">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="logo">
                <a href="index.html">
                  <img src="img/korea_logo.png" alt="korea-logo" />
                </a>
              </div>
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
                        Главна страница <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Учители </a>
                    </li>
                    <li>
                      <a href="#">Услуги </a>
                    </li>
                    
                    <li>
                      <a href="#">
                        Блок <i className="icofont-rounded-down" />
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="blog-single.html">Блок</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Контакти</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/ End Main Menu */}
            </div>
            <div className="col-lg-2 col-12">
              <div className="get-quote">
                <a href="appointment.html" className="btn">
                  Запази час 
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
