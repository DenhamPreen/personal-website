import React from "react";

const ClientProjects = () => {
  const clientProjects = [
    {
      name: "Strait Access technologies",
      link: "https://www.straitaccesstechnologies.com/",
      image: "sat.png",
      description: "Production Performance Monitoring",
    },
    {
      name: "Finka Token",
      link: "https://finka.ch",
      image: "finka.svg",
      description: "Democratising alternative asset classes",
    },
    {
      name: "MeatLessMay",
      link: "https://meatlessmay.me",
      image: "meatlessmay.gif",
      description: "sustainable diet challenge",
    },
    {
      name: "Stackr",
      link: "https://www.gostackr.com/",
      image: "stackr.svg",
      description: "Site Updates",
    },
    {
      name: "Plastic Detox",
      link: "https://plasticdetox.me",
      image: "plasticdetox.png",
      description: "Plastic Reduction Campaign",
    },
    {
      name: "Lima Capital",
      link: " https://lima.capital",
      image: "lima-capital.svg",
      description: "Machine Learning Investment Management",
    },
    {
      name: "Capitec",
      link: "https://www.capitecbank.co.za/",
      image: "capitec.png",
      description: "Money and Me - Financial Survey",
    },
    {
      name: "UCT",
      link: "http://www.ebe.uct.ac.za/ebe/study/mecheng",
      image: "uct.jpg",
      description: "MecMovies - Online course",
    },
    {
      name: "Center for renewable and sustainable energy studies",
      link: "http://academic.sun.ac.za/crsespower/index.html",
      image: "crses.png",
      description: "Energy Data Visualisation",
    },
    {
      name: "Take Ctrl",
      link: "https://www.takectrl.co.za/",
      image: "take-ctrl.png",
      description: "App development",
    },
    {
      name: "HouseME",
      link: "https://house.me",
      image: "houseme.png",
      description: "Static Site",
    },

    {
      name: "Drive South Africa",
      link: "https://www.drivesouthafrica.com/",
      image: "dsa.jpg",
      description: "Site Performance Improvements",
    },
    {
      name: "Clima Investments",
      link: "https://clima.investments/",
      image: "clima-investments.png",
      description: "Sustainable Investment Management",
    },
    {
      name: "Singita",
      link: "https://www.singita.com/",
      image: "singita.png",
      description: "Operations Management Application",
    },
    {
      name: "Little Lotus",
      link: "http://littlelotus.co.za",
      image: "little-lotus.png",
      description: "Online Retail Store",
    },
  ];

  return (
    <article style={{ backgroundImage: `url('/images/pawelcz4.jpg')` }}>
      <div className="section-inner">
        <h2 style={{ marginTop: "2rem" }}>Projects for Clients </h2>
        <div className="grid">
          {clientProjects.map((client) => (
            <div className="portfolio-item">
              <div className="portfolio-item-inner">
                <a
                  href={client.link}
                  target="_blank"
                  className="portfolio-item-link"
                >
                  <img
                    src={`/images/portfolio/clients/${client.image}`}
                    className="portfolio-item-logo"
                    alt={client.name}
                  />
                </a>
                <p className="portfolio-item-description">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
          <div className="portfolio-item"></div>
          <div className="portfolio-item"></div>
          <div className="portfolio-item"></div>
          <div className="portfolio-item"></div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-item {
          flex: none;
          width: 20%;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
        }
        .portfolio-item-inner {
          width: 80%;
          margin: auto;
        }
        .portfolio-item-link {
        }
        .portfolio-item-logo {
          background-color: white;
          margin: auto;
          width: 60%;
          border-radius: 10px;
        }
        @media only screen and (max-width: 768px) {
          .portfolio-item {
            width: 25%;
          }
        }
        @media only screen and (max-width: 600px) {
          .portfolio-item {
            width: 33%;
          }
        }
      `}</style>
    </article>
  );
};

export default ClientProjects;
