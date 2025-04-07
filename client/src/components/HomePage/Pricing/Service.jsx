import React from "react";
const Service = (props) => {
  return (
    <div className="col-lg-4 col-md-12 col-12">
      <div className="single-table">
        {/* Table Head */}
        <div className="table-head">
          <div className="icon">
            <i className={props.class_icon} />
          </div>
          <h4 className="title">{props.title}</h4>
          <div className="price">
            <p className="amount">
              {props.price}лв<span>/ {props.hours} </span>
            </p>
          </div>
        </div>
        {/* Table List */}
        <ul className="table-list">
          <li>
            <i className="icofont icofont-ui-check" />
            Lorem ipsum dolor sit
          </li>
          <li>
            <i className="icofont icofont-ui-check" />
            Cubitur sollicitudin fentum
          </li>
          <li className="cross">
            <i className="icofont icofont-ui-close" />
            Nullam interdum enim
          </li>
          <li className="cross">
            <i className="icofont icofont-ui-close" />
            Donec ultricies metus
          </li>
          <li className="cross">
            <i className="icofont icofont-ui-close" />
            Pellentesque eget nibh
          </li>
        </ul>
        <div className="table-bottom">
          <a className="btn" href="#">
            Запази час
          </a>
        </div>
        {/* Table Bottom */}
      </div>
    </div>
  );
};
export default Service;
