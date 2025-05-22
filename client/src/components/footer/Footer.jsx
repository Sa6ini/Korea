import React from "react";
const Footer = () => {
  return (
    <footer id="footer" className="footer ">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>За нас</h2>
                <p>
                  Ние сме малък екип, воден от сертифициран преподавател по
                  корейски с над 12 години опит. Специализираме се в обучение на
                  начинаещи – с ясен, достъпен и мотивиращ подход.
                </p>
                {/* Social */}
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-vimeo" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-pinterest" />
                    </a>
                  </li>
                </ul>
                {/* End Social */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h2>Полезни връзки</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right" aria-hidden="true" />
                          Начало
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right" aria-hidden="true" />
                          За нас
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right" aria-hidden="true" />
                          Услуги
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right" aria-hidden="true" />
                          Контакти
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right" aria-hidden="true" />
                          Блок
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Работно време</h2>
                <ul className="time-sidual">
                  <li className="day">
                    Понеделник - Петък <span>8:00-20:00</span>
                  </li>
                  <li className="day">
                    Събота <span>9:00-18:30</span>
                  </li>
                  <li className="day">
                    Неделя <span>Почивка </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Бюлетин</h2>
                <p>
                  Абонирай се за нашия бюлетин, за да получаваш всички новини
                  директно в пощата си. Получавай първи информация за нови
                  курсове, полезни съвети за изучаване на корейски и специални
                  оферти за нашите абонати.
                </p>
                <form
                  action="mail/mail.php"
                  method="get"
                  target="_blank"
                  className="newsletter-inner"
                >
                  <input
                    name="email"
                    placeholder="examlpe@mail.com"
                    className="common-input"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your email address'"
                    required=""
                    type="email"
                  />
                  <button className="button">
                    <i className="icofont icofont-paper-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Footer Top */}

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="copyright-content">
                <p>
                  © Copyright 2025 | All Rights Reserved by{" "}
                  <a href="https://github.com/Sa6ini" target="_blank">
                    Sa6ini
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
