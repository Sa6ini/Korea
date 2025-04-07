import React from "react";
const SingleShedule = (props) => {
  return (
    <div>
      <div className={"single-schedule " + props.position_class}>
        <div className="inner">
          <div className="icon">
            <i className={props.icon_class} />
          </div>
          <div className="single-content">
            <span>{props.small_title}</span>
            <h4>{props.big_title}</h4>
            <p>{props.paragraph}</p>
            <a href="#">
              Научи повече
              <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleShedule;
