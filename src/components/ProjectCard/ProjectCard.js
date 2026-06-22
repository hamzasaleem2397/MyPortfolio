import React from "react";
import "./ProjectCard.css";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import { Fade } from "react-reveal";

function ProjectCard({ repo, theme, onClick }) {
  // Truncate description for the card view
  const truncateString = (str, num) => {
    if (str && str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="project-card-div"
          key={repo.id || repo.name}
          onClick={() => onClick(repo)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="project-name-div">
            <p className="project-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>

          {repo?.logo && (
            <div className="project-image-container">
              <img
                src={require(`../../assests/images/${repo.logo}`)}
                alt={repo.name}
                className="project-image"
              />
            </div>
          )}
          <p className="project-description" style={{ color: theme.text }}>
            {truncateString(repo.description, 120)}
          </p>
          <div className="project-details">
            {repo.languages && repo.languages.length > 0 && (
              <ProjectLanguages logos={repo.languages} />
            )}

            <div className="project-platforms">
              {repo.playstore && (
                <span
                  className="iconify platform-icon"
                  data-icon="simple-icons:googleplay"
                  data-inline="false"
                  style={{ color: theme.secondaryText }}
                ></span>
              )}
              {repo.appstore && (
                <span
                  className="iconify platform-icon"
                  data-icon="simple-icons:apple"
                  data-inline="false"
                  style={{ color: theme.secondaryText }}
                ></span>
              )}
              {repo.url && !repo.playstore && !repo.appstore && (
                <span
                  className="iconify platform-icon"
                  data-icon="simple-icons:github"
                  data-inline="false"
                  style={{ color: theme.secondaryText }}
                ></span>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProjectCard;
