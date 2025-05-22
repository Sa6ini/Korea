import React from "react";
import { Link } from "react-router-dom";

const HeaderInner = () => {
  return (
    <div className="header-inner">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="logo">
                <Link to="/">
                  <img src="img/logo.png" alt="korea-logo" />
                </Link>
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
                    <li>
                      <Link to="/">
                        Начало
                      </Link>
                    </li>
                    <li>
                      <Link to="/teacher">Учител</Link>
                    </li>
                    <li>
                      <Link to="#">Услуги</Link>
                    </li>
                    <li>
                      <Link to="#">
                        Блок
                      </Link>
                      
                    </li>
                    <li>
                      <Link to="#">Контакти</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/ End Main Menu */}
            </div>
            <div className="col-lg-2 col-12">
              <div className="get-quote">
                <Link to="/appointment" className="btn">
                  Записи час
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;
