import React from "react";
const TopBar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              {/* Contact */}
              <ul className="top-link">
                <li>
                  <a href="#">За нас</a>
                </li>
                <li>
                  <a href="#">Учители</a>
                </li>
                <li>
                  <a href="#">Контакти</a>
                </li>
                <li>
                  <a href="#">Често задавани въпроси</a>
                </li>
              </ul>
              {/* End Contact */}
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              {/* Top Contact */}
              <ul className="top-contact">
                <li>
                  <i className="fa fa-phone" />
                  +359 87 886 2282
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  <a href="mailto:support@yourmail.com">korea@gmail.com</a>
                </li>
              </ul>
              {/* End Top Contact */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
