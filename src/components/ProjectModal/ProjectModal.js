import React, { useState, useEffect, useRef } from "react";
import "./ProjectModal.css";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";

function ProjectModal({ project, theme, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );

  const modalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ESC key close
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const images = project.images || [];

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? Math.max(images.length - visibleSlides, 0)
        : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev >= images.length - visibleSlides
        ? 0
        : prev + 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div
        className="modal-content-container"
        ref={modalRef}
        style={{
          backgroundColor: theme.body,
          color: theme.text,
          border: `1px solid ${theme.projectCard}`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.5)`,
        }}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          style={{ color: theme.text }}
        >
          <span
            className="iconify"
            data-icon="clarity:window-close-line"
          ></span>
        </button>

        <h2
          className="modal-title"
          style={{ color: theme.text }}
        >
          {project.name}
        </h2>

        {images.length > 0 ? (
          <div className="modal-carousel-container">
            <div
              className="modal-carousel-slides"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)
                  }%)`,
              }}
            >
              {images.map((imgUrl, index) => (
                <div className="modal-slide" key={index}>
                  <img
                    src={require(`../../assests/images/${imgUrl}`)}
                    alt={`${project.name} Screenshot ${index + 1}`}
                    className="modal-slide-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
              ))}
            </div>

            {images.length > visibleSlides && (
              <>
                <button
                  className="carousel-btn prev-btn"
                  onClick={handlePrev}
                  style={{
                    backgroundColor: theme.projectCard,
                    color: theme.text,
                  }}
                >
                  &#10094;
                </button>

                <button
                  className="carousel-btn next-btn"
                  onClick={handleNext}
                  style={{
                    backgroundColor: theme.projectCard,
                    color: theme.text,
                  }}
                >
                  &#10095;
                </button>
              </>
            )}
          </div>
        ) : (
          <div
            className="modal-carousel-placeholder"
            style={{
              backgroundColor: theme.projectCard,
            }}
          >
            <span
              className="iconify placeholder-art"
              data-icon="fluent:app-folder-24-regular"
              style={{ color: theme.secondaryText }}
            ></span>

            <p style={{ color: theme.secondaryText }}>
              Images Coming Soon
            </p>
          </div>
        )}

        <div className="modal-body-content">
          {project.languages &&
        
              <div className="modal-languages">
                <h4
                  style={{
                    color: theme.secondaryText,
                  }}
                >
                  Built With
                </h4>

                <ProjectLanguages
                  logos={project.languages}
                />
              </div>
            }

          <div className="modal-description-section">
            <h4
              style={{
                color: theme.secondaryText,
              }}
            >
              About the Project
            </h4>

            <p
              className="modal-description"
              style={{ color: theme.text }}
            >
              {project.description}
            </p>
          </div>

          <div className="modal-links-section">
            {project.playstore && (
              <a
                href={project.playstore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-btn google-play-badge"
              >
             <svg class="googleicon" aria-hidden="true" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0,0h40v40H0V0z"></path><g><path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path><path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path><path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path><path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path></g></svg>

                <div className="store-badge-text">
                  <span className="badge-sub">
                    GET IT ON
                  </span>

                  <span className="badge-main">
                    Google Play
                  </span>
                </div>
              </a>
            )}

            {project.appstore && (
              <a
                href={project.appstore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-btn apple-store-badge"
              >
              

<img class="appleicon" src={require(`../../assests/images/appstore.jpg`)} alt="Apple Store Icon" />


                <div className="store-badge-text">
                  <span className="badge-sub">
                    Download on the
                  </span>

                  <span className="badge-main">
                    App Store
                  </span>
                </div>
              </a>
            )}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-btn web-github-badge"
                style={{
                  backgroundColor:
                    theme.accentBright,
                  color: "#fff",
                }}
              >
                <span
                  className="iconify store-badge-icon"
                  data-icon="octicon:link-external-24"
                ></span>

                <div className="store-badge-text">
                  <span className="badge-sub">
                    VISIT PROJECT
                  </span>

                  <span className="badge-main">
                    Website / Git
                  </span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;