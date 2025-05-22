import React from "react";
import SingleShedule from "./SingleSchedule";
import { Link } from "react-router-dom";
const Schedule = () => {
  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 ">
              <SingleShedule
                position_class="first"
                icon_class="icofont-certificate-alt-2"
                small_title=""
                big_title="Сертификати"
                paragraph="Наскоро взех и официален сертификат (TOPIK) за владеене на ниво. Матура по корейски език с успех 6.00 "
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <SingleShedule
                position_class="middle"
                icon_class="icofont-teacher"
                small_title=""
                big_title="Учителя"
                paragraph="🧘🏼‍♀️История, култура и малко граматика
🦸‍♀️Суперсила-사랑 (Любов)
🪁Могат ли уроците да бъдат забавни? Ела и разбери!"
              />
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-schedule last">
                <div className="inner">
                  <div className="icon">
                    <i className="icofont-ui-clock" />
                  </div>
                  <div className="single-content">
                    <span></span>
                    <h4>Работно време</h4>
                    <ul className="time-sidual">
                      <li className="day">
                        Понеделник - Петък <span>8.00-20.00</span>
                      </li>
                      <li className="day">
                        Събота <span>9.00-18.30</span>
                      </li>
                      <li className="day">
                        Неделя <span>Затворено</span>
                      </li>
                    </ul>
                    <Link to="/teacher">
                      Научи повече
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Schedule;
