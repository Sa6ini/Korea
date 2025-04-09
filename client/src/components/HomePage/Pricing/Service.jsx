import React from "react";


const Service = ({ title, price, hours, class_icon, features }) => {
  return (
    <div className="col-lg-4 col-md-12 col-12">
      <div className="single-table">
        <div className="table-head">
          <div className="icon">
            <i className={class_icon} />
          </div>
          <h4 className="title">{title}</h4>
          <div className="price">
            <p className="amount">
              {price}лв<span>/ {hours} </span>
            </p>
          </div>
        </div>

        <ul className="table-list">
          {features.map((item, index) => (
            <li key={index} className={item.available ? "" : "cross"}>
              <i
                className={`icofont ${
                  item.available ? "icofont-ui-check" : "icofont-ui-close"
                }`}
              />
              {item.text}
            </li>
          ))}
        </ul>

        <div className="table-bottom">
          <a className="btn" href="#">
            Запази час
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
