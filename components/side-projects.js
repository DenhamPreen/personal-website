import React from "react";

const SideProjects = () => {
  return (
    <article
      className="section-inner"
      style={{ backgroundImage: `url('/images/pawelcz5.jpg')` }}
    >
      <h2>Side Projects</h2>
      <div className="grid">
        <div className="portfolio-item">
          <div className="portfolio-item-logo-container">
            <a
              href="https://whereitstarted.io"
              target="_blank"
              className="portfolio-item-link"
            >
              <img
                src="/images/portfolio/side/where-it-started.svg"
                className="portfolio-item-logo"
                alt="Where it started"
              />
            </a>
          </div>
          <p className="portfolio-item-description">Start up podcast</p>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item-logo-container">
            <a
              href="https://whenismydogsbirthday.com"
              target="_blank"
              className="portfolio-item-link"
            >
              <img
                src="/images/portfolio/side/when-is-my-dogs-birthday.gif"
                className="portfolio-item-logo"
                alt="When is my dogs birthday"
              />
            </a>
          </div>
          <p className="portfolio-item-description">Dog Birthday Calculator</p>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item-logo-container">
            <a
              href="https://chrome.google.com/webstore/detail/world-scratch-map/jdhckddhiiclhkcpkebhjafbjlgodopa?hl=en"
              target="_blank"
              className="portfolio-item-link"
            >
              <img
                src="/images/portfolio/side/world-map.png"
                className="portfolio-item-logo"
                alt="World scratch map"
              />
            </a>
          </div>
          <p className="portfolio-item-description">World scratch map</p>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item-logo-container">
            <a
              href="https://chrome.google.com/webstore/detail/check-my-password/hfkkdbocalihgkgniglgildacnnfknke?hl=en"
              target="_blank"
              className="portfolio-item-link"
            >
              <img
                src="/images/portfolio/side/check-my-password.png"
                className="portfolio-item-logo"
                alt="Check My Password"
              />
            </a>
          </div>
          <p className="portfolio-item-description">Check My Password</p>
        </div>
      </div>
    </article>
  );
};

export default SideProjects;
