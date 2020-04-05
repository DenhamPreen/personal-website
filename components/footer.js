import React from "react";

const Footer = () => {
  return (
    <article
      className="section-inner"
      style={{ backgroundImage: `url('/images/pawelcz6.jpg')` }}
    >
      <footer>
        <div>
          <a
            href="https://medium.com/@denhampreen"
            target="_blank"
            className="social-icon"
          >
            <img src="/images/socials/medium.svg" />
          </a>
          <a
            href="https://github.com/DenhamPreen"
            target="_blank"
            className="social-icon"
          >
            <img src="/images/socials/github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/denhampreen/"
            target="_blank"
            className="social-icon"
          >
            <img src="/images/socials/linkedin.svg" />
          </a>
          <a
            href="https://twitter.com/DenhamPreen"
            target="_blank"
            className="social-icon"
          >
            <img src="/images/socials/twitter.svg" />
          </a>
          <a
            href="https://www.instagram.com/denhampreen/"
            target="_blank"
            className="social-icon"
          >
            <img src="/images/socials/instagram.svg" />
          </a>
          <a
            href="mailto:denhampreen@gmail.com"
            target="_blank"
            className="social-icon"
          >
            <img src="/images/socials/mail.svg" />
          </a>
        </div>
      </footer>
    </article>
  );
};

export default Footer;
