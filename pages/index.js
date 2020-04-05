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

    <style jsx global>{``}</style>
  </>
);

export default Index;
