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
        <div className="grid">
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="http://www.ebe.uct.ac.za/ebe/study/mecheng"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/uct.jpg"
                  className="portfolio-item-logo"
                  alt="UCT"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              MecMovies - Online course
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="http://academic.sun.ac.za/crsespower/index.html"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/crses.png"
                  className="portfolio-item-logo"
                  alt="Center for renewable and sustainable energy studies"
                />
              </a>
            </div>
            <p className="portfolio-item-description">
              Energy Data Visualisation
            </p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://www.takectrl.co.za/"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/take-ctrl.png"
                  className="portfolio-item-logo"
                  alt="Take Ctrl"
                />
              </a>
            </div>
            <p className="portfolio-item-description">App development</p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item-logo-container">
              <a
                href="https://house.me"
                target="_blank"
                className="portfolio-item-link"
              >
                <img
                  src="/images/portfolio/clients/houseme.png"
                  className="portfolio-item-logo"
                  alt="HouseME"
                />
              </a>
            </div>
            <p className="portfolio-item-description">Static Site</p>
          </div>
          <div className="portfolio-item"></div>
        </div>
        <p>SAT, Singita,DSA, Clima Investments, Little Lotus</p>
      </div>

      <style jsx>{`
        .portfolio-item-logo-container {
          width: 30%;
        }
      `}</style>
    </article>
  );
};

export default ClientProjects;
