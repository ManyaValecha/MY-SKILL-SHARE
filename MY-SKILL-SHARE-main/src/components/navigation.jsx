import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            SkillShare - Peer to Peer Learning Platform
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#dashboard" className="page-scroll">
                DashBoard
              </a>
            </li>
            <li>
              <a href="myskills" className="page-scroll">
                My Skill 
              </a>
            </li>
            <li>
              <a href="#addskill" className="page-scroll">
                Add a Skill
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Badges
              </a>
            </li>
            <li>
              <a href="#reports" className="page-scroll">
                Reports
              </a>
            </li>
            <li>
              <a href="#skillcategories" className="page-scroll">
                SkillCategories
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};