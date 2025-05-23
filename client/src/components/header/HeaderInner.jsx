import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // icon package

const HeaderInner = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="header-inner">
      <div className="container">
        <div className="inner">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="logo">
                <Link to="/">
                  <img src="/img/logo.png" alt="korea-logo" />
                </Link>
              </div>
            </div>

            {/* Hamburger Button */}
            <div className="col-6 d-lg-none text-end">
              <button className="mobile-menu-btn" onClick={toggleMenu}>
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Main Navigation */}
            <div className={`col-lg-7 col-md-9 col-12 ${mobileMenuOpen ? "show" : ""}`}>
              <div className={`main-menu ${mobileMenuOpen ? "mobile-show" : ""}`}>
                <nav className="navigation">
                  <ul className="nav menu">
                    <li><Link to="/">Начало</Link></li>
                    <li><Link to="/teacher">Учител</Link></li>
                    <li>
                      <Link to="#">Услуги <i className="fa fa-angle-down" /></Link>
                      <ul className="dropdown">
                        <li><Link to="/services/consulting">Консултации</Link></li>
                        <li><Link to="/services/surgery">Хирургия</Link></li>
                        <li><Link to="/services/rehab">Рехабилитация</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">Блок <i className="fa fa-angle-down" /></Link>
                      <ul className="dropdown">
                        <li><Link to="/blog">Всички публикации</Link></li>
                        <li><Link to="/blog/categories">Категории</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Контакти</Link></li>
                    <li className="d-lg-none">
                      <Link to="/appointment" className="btn w-full">Запиши час</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Desktop Button */}
            <div className="col-lg-2 col-12 d-none d-lg-block">
              <div className="get-quote">
                <Link to="/appointment" className="btn">
                  Запиши час
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional overlay for mobile */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default HeaderInner;
