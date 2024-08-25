import React from "react";

export const Reports = (props) => {
  return (
    <div id="reports">
      <div className="container">
        <div className="section-title text-center">
          <h2>Reports</h2>
        </div>
        <div className="row">
          {/* Chart 1: Skill Progression Over Time */}
          <div className="col-md-6">
            <div className="report">
              <div className="chart-image">
                <img src="img/skill-progression-chart.png" alt="Skill Progression Over Time" />
              </div>
              <div className="chart-description">
                <p>Skill Progression Over Time</p>
              </div>
            </div>
          </div>

          {/* Chart 2: Skill Category Distribution */}
          <div className="col-md-6">
            <div className="report">
              <div className="chart-image">
                <img src="img/skill-category-distribution-chart.png" alt="Skill Category Distribution" />
              </div>
              <div className="chart-description">
                <p>Skill Category Distribution</p>
              </div>
            </div>
          </div>

          {/* Chart 3: Learning Activity Frequency */}
          <div className="col-md-6">
            <div className="report">
              <div className="chart-image">
                <img src="img/learning-activity-frequency-chart.png" alt="Learning Activity Frequency" />
              </div>
              <div className="chart-description">
                <p>Learning Activity Frequency</p>
              </div>
            </div>
          </div>

          {/* Chart 4: Weekly Learning Streaks */}
          <div className="col-md-6">
            <div className="report">
              <div className="chart-image">
                <img src="img/weekly-learning-streaks-chart.png" alt="Weekly Learning Streaks" />
              </div>
              <div className="chart-description">
                <p>Weekly Learning Streaks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
