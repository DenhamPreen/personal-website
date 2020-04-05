import React from "react";
import Meta from "../components/meta";
import Landing from "../components/landing";
import SideProjects from "../components/side-projects";
import Footer from "../components/footer";

import "../scss/style.scss";

const Index = () => (
  <>
    <Meta />
    <section className="view-container">
      <Landing />
      <article
        className="section-inner"
        style={{ backgroundImage: `url('/images/pawelcz2.jpg')` }}
      >
        <h2>About Me</h2>
        <p>
          I develop web and blockchain applications mostly working in
          JavaScript. I studied at Rhodes University and the University of Cape
          Town in Economics and Computer Science and have been working in
          industry for a few years. I am a blockchain enthusiast, I love to
          explore and I like to focus on social impact projects.
        </p>
      </article>
      <article
        className="section-inner"
        style={{ backgroundImage: `url('/images/pawelcz3.jpg')` }}
      >
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
      </article>
      <article
        className="section-inner"
        style={{ backgroundImage: `url('/images/pawelcz4.jpg')` }}
      >
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
      </article>
      <SideProjects />
      <Footer />
    </section>

    <style jsx>{`
      @media only and (max-width: 768px) {
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        scroll-behavior: smooth;
        padding: 0;
        margin: 0;
        font-family: "Source Sans Pro", sans-serif;
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
    `}</style>
  </>
);

export default Index;
