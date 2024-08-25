import React from "react";

const badgeData = [
  {
    title: "Rookie Learner",
    image: "img/rookie_learner.png", 
    description: "Awarded to users who have just started learning a new skill or completed their first lesson in a category.",
  },
  {
    title: "Proficient Performer",
    image: "img/proficient_performer.png", 
    description: "Earned by users who have reached a certain proficiency level in a skill, demonstrating consistent practice and improvement.",
  },
  {
    title: "Mastery Medal",
    image: "img/mastery_medal.png",
    description: "Given to users who have fully mastered a skill, completing all relevant courses, assessments, and tasks.",
  },
  {
    title: "Skill Explorer",
    image: "img/skill_explorer.png", 
    description: "For users who have learned and practiced multiple skills across different categories, showcasing versatility and curiosity.",
  },
  {
    title: "Learning Streak Star",
    image: "img/learning_streak_star.png", 
    description: "Awarded for maintaining continuous learning activity (e.g., completing daily or weekly goals consistently for a period).",
  },
  {
    title: "Community Contributor",
    image: "img/community_contributor.png", 
    description: "Earned by users who actively share resources, mentor others, or contribute helpful content within the community.",
  },
];

export const Gallery = () => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Badges</h2>
          <p>Check out the ultimate badges of skillshare</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {badgeData.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                <img src={d.image} className="img-responsive" alt={d.title} />
                <div className="badge-description">
                  <h4>{d.title}</h4>
                  <p>{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

