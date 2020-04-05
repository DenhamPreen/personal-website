import React from "react";

const About = () => {
  return (
    <article style={{ backgroundImage: `url('/images/pawelcz2.jpg')` }}>
      <div className="section-inner">
        <h2>About Me</h2>
        <p className="about-description">
          I develop web and blockchain applications mostly working in
          JavaScript. I studied at Rhodes University and the University of Cape
          Town in Economics and Computer Science and have been working in
          industry for a few years. I am a blockchain enthusiast, I love to
          explore and I like to focus on social impact projects.
        </p>
      </div>
      <style jsx>{`
        .about-description {
          margin: auto;
          width: 80%;
        }
        @media only screen and (max-width: 600px) {
          p {
            font-size: 1.2rem;
          }
          .about-description {
            width: 90%;
          }
        }
      `}</style>
    </article>
  );
};

export default About;
