import React from "react";

export const Addskill = (props) => {
  return (
    <div id="addskill" className="text-center">
      <div className="container">
        <div className="section-title">
          <p>
            Empower your journey by adding new skills to your profile. Whether you're learning a new technology or refining an existing talent, the Skill Management Portal allows you to track your progress, showcase your expertise, and stay ahead in the ever-evolving tech landscape.
          </p>
          <img src="img/login.png" className="img-responsive center-img" alt="Add Your Skills" />
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Skill Added"}
        </div>
        <div className="button-container">
          <button className="add-skill-button">
            Add Your Skills
          </button>
        </div>
      </div>
    </div>
  );
};

