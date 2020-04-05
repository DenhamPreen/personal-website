import React from "react";
import Emoji from "react-emoji-render";

const Landing = () => {
  return (
    <article style={{ backgroundImage: `url('/images/pawelcz1.jpg')` }}>
      <header>
        <h1>
          Hi, I'm Denham
          <Emoji text="👋️" />
        </h1>
      </header>
      <p className="sub-header">
        I am a full stack software developer and co-founder at{" "}
        <a href="https://avolabs.io">avo labs</a>
      </p>
      <style jsx>{`
        article {
          padding: 4em 4em;
        }
        h1 {
          text-align: center;
          font-size: 3rem;
          padding: 0;
          margin: 0;
        }
        .sub-header {
          font-size: 1rem;
          letter-spacing: 0.3rem;
          text-transform: uppercase;
          font-weight: 500;
        }
        @media only screen and (max-width: 600px) {
          h1 {
            font-size: 1.6rem;
          }
          .sub-header {
            font-size: 0.8rem;
            letter-spacing: 0.1rem;
          }
        }
      `}</style>
    </article>
  );
};

export default Landing;
