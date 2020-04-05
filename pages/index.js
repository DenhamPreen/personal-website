import React from "react";
import Meta from "../components/meta";
import Landing from "../components/landing";
import About from "../components/about";
import AvoLabsProjects from "../components/avo-labs-projects";
import SideProjects from "../components/side-projects";
import Footer from "../components/footer";

import "../scss/style.scss";

const Index = () => (
  <>
    <Meta />
    <section className="view-container">
      <Landing />
      <About />
      <AvoLabsProjects />

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
                    src="/images/portfolio/clients/meatlessmay.svg"
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
                    src="/images/portfolio/clients/plasticdetox.svg"
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
          </div>
          <p>Lima Capital</p>
          <p>Capitec</p>
          <p>UCT</p>
          <p>Renewable and sustainable energy studies</p>
          <p>takectrl</p>
        </div>
      </article>
      <SideProjects />
      <Footer />
    </section>

    <style jsx>{`
      @media only screen and (max-width: 768px) {
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
        font-family: "Source Sans Pro", sans-serif;
        background-color: #333;
      }

      * {
        box-sizing: border-box;
      }

      h2 {
        text-align: center;
        font-size: 2rem;
        padding: 0;
        margin: 1rem;
        margin-bottom: 3rem;
      }
      p {
        text-align: center;
        font-size: 1.6rem;
        padding: 0;
        margin: 0.4rem;
      }

      a {
        color: #61dafb;
        text-decoration: none;
      }

      a:hover,
      a:focus,
      a:active {
        text-decoration: underline;
      }

      .section-inner {
        max-width: 1440px;
        margin: auto;
      }

      .grid {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        width: 100%;
      }

      .portfolio-item {
        flex: 1;
      }

      .portfolio-item-logo-container {
        width: 60%;
        margin: auto;
      }
      .portfolio-item-link {
        margin: auto;
      }
      .portfolio-item-logo {
        width: 100%;
        border-radius: 10px;
      }

      .portfolio-item-description {
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        font-weight: 600;
      }
      @media only screen and (max-width: 768px) {
        .section-inner {
          padding: 2em;
        }
        h2 {
          margin-bottom: 1rem;
        }
        .portfolio-item {
          flex: none;
          width: 46%;
        }
        .portfolio-item-description {
          font-size: 0.5rem;
        }
      }
    `}</style>
  </>
);

export default Index;
