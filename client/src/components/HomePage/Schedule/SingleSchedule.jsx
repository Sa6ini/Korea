import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/teacher">
                      Научи повече
                      <i className="fa fa-long-arrow-right" />
                    </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleShedule;
