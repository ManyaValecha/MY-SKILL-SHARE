import React from "react";

export const Dashboard = (props) => {
  return (
    <div id="dashboard" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Dashboard</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : <p>P2P Learning Platform</p>}
        </div>
      </div>
    </div>
  );
};
