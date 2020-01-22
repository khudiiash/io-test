import React from "react";
import "./Dashboard.scss";

import { useSpring, animated } from "react-spring";
import * as easings from "d3-ease";

function Dashboard({ projects }) {
  const moveHeading = useSpring({
    to: { transform: "translateY(0)" },
    from: { transform: "translateY(-100px)" },
    config: { duration: 2000, easing: easings.easeElastic }
  });
  const moveSubheading = useSpring({
    to: { transform: "translateY(0)" },
    from: { transform: "translateY(-100px)" },
    config: { duration: 700, easing: easings.easeLinear }
  });
  const moveContent = useSpring({
    to: { transform: "translateY(0)" },
    from: { transform: "translateY(300px)" },
    config: { duration: 400, easing: easings.easeLinear }
  });
  return (
    <div className="dashboard">
      <animated.h2 style={moveHeading} className="heading">
        Hi, <b>Nikita!</b>
      </animated.h2>
      <animated.p style={moveSubheading} className="subheading">
        Please, choose your project
      </animated.p>
      <animated.div style={moveContent} className="dashboard__projects">
        {Object.keys(projects).map((project, key) => (
          <div className="dashboard__projects__item" key={key}>
            {projects[project].title}
          </div>
        ))}
      </animated.div>
    </div>
  );
}

export default Dashboard;
