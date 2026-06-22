import React from "react";
import "./ProjectLanguages.css";

function ProjectLanguages({ logos }) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons-languages">
        {logos.map((logo, index) => (
          <li key={index} className="language-item">
            <img
              src={require(`../../assests/images/${logo.image}`)}
              alt={logo.name}
              className="language-img"
            />
            <span className="language-name">
              {logo.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectLanguages;