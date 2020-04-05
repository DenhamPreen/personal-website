import React from "react";
import Meta from "../components/meta";
import Landing from "../components/landing";
import About from "../components/about";
import AvoLabsProjects from "../components/avo-labs-projects";
import ClientProjects from "../components/client-projects";
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
      <ClientProjects />

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
