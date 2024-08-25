import React from "react";

export const Myskills = (props) => {
  return (
    <div id="myskills">
      <div className="container">
        <div className="row profile-header">
          <div className="col-xs-12 col-md-8">
            <h2>Skill Accomplished: [User's Name]</h2>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="mail-options">
              <button className="btn btn-primary">Send</button>
              <button className="btn btn-secondary">Archive</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/profile.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>My Skills</h3>
              <p>{props.data ? props.data.paragraph : "Data Structures and Alogorithms, Web Development"}</p>
              <h4>Check out the newly added skills</h4>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "Python"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "New Skill Added"}
                  </ul>
                </div>
              </div>
              <h4>Recent Accomplishments</h4>
              <ul>
                <li>Completed Advanced Python Course</li>
                <li>Mastered Data Structures and Algorithms</li>
                <li>Earned 'Proficient Performer' Badge in Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
