import React from "react";

const Teacher = (props) => {
  return (
    <div className="container-fluid p-5">
      <div className="row gx-5">
        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded"
              src={props.image}
              style={{ objectFit: "cover" }}
              alt="Profile"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="mb-4">
            <h5 className="text-primary">Здравейте аз съм</h5>
            <h1 className="display-3 mb-0">{props.name}</h1>
            <h6 className="text-second-title">Преподавател по корейски език</h6>
          </div>
          <p className="mb-4">
            <b className="text-primary">Имейл:</b> {props.email}
          </p>
          <p className="mb-4">
            <b className="text-primary">Телефон:</b> {props.phone}
          </p>
          <div className="rounded bg-dark p-5">
            <h5 className="text-white mb-3">За мен</h5>
            <div className="text-white mb-0">
              {(props.bio || "No bio available.")
                .split("\n")
                .map((line, index) => (
                  <p key={index} className="text-white mb-2">
                    {line}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teacher;
