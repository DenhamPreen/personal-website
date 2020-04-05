import React from "react";
import Emoji from "react-emoji-render";

const Landing = () => {
  return (
    <article style={{ backgroundImage: `url('/images/pawelcz3.jpg')` }}>
      <div className="section-inner">
        <h2>Projects with Avo Labs</h2>
        <div className="grid">
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://wildcards.world"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/avolabs/wildcards.svg"
                  className="portfolio-item-logo"
                  alt="Wildcards"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Always raising funds for conservation
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://alwaysforsale.io"
                className="portfolio-item-link"
                target="_blank"
              >
                <img
                  src="/images/portfolio/avolabs/alwaysforsale.svg"
                  className="portfolio-item-logo"
                  alt="Always for sale art gallery"
                />
              </a>
            </div>
            <p className="portfolio-item-description">Virtual art gallery</p>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://dao.care"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/avolabs/daocare.svg"
                  className="portfolio-item-logo"
                  alt="dao care"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Community endowment fund
            </p>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://carboncredits.club"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/avolabs/carboncreditsclub.svg"
                  className="portfolio-item-logo"
                  alt="carbon credits club"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Carbon emissions solution
            </p>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </article>
  );
};

export default Landing;
