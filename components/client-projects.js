import React from "react";

const ClientProjects = () => {
  return (
    <article style={{ backgroundImage: `url('/images/pawelcz4.jpg')` }}>
      <div className="section-inner">
        <h2>Projects for Clients </h2>
        <div className="grid">
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://finka.ch"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/finka.svg"
                  className="portfolio-item-logo"
                  alt="finka token"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Democratising alternative asset classes
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://meatlessmay.me"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/meatlessmay.gif"
                  className="portfolio-item-logo"
                  alt="MeatLessMay"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              sustainable diet challenge
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://plasticdetox.me"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/plasticdetox.png"
                  className="portfolio-item-logo"
                  alt="Plastic Detox"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Plastic Reduction Campaign
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://lima.capital"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/lima-capital.svg"
                  className="portfolio-item-logo"
                  alt="Lima Capital"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Machine Learning Investment Management
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://www.capitecbank.co.za/"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/capitec.png"
                  className="portfolio-item-logo"
                  alt="Capitec"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Money and Me - Financial Survey
            </p>
          </div>
        </div>
        <p>UCT</p>
        <p>Renewable and sustainable energy studies</p>
        <p>takectrl</p>
        <p>HouseMe</p>
      </div>

      <style jsx>{``}</style>
    </article>
  );
};

export default ClientProjects;
