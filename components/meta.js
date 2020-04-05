import React from "react";
import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>Denham Preen </title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      <meta charset="UTF-8" />
      <meta
        name="description"
        content="Denham Preen's personal website to showcase his work"
      />
      <meta
        name="keywords"
        content="Denham Preen, Personal Website, React Developer, Product Developer, Start Up Consulting"
      />
      <meta name="author" content="Denham Preen" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="Denham Preen" />
      <meta
        property="og:description"
        content="Denham Preen's personal website to showcase his work"
      />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:url" content="https://denhampreen.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Denham Preen" />
      <meta name="twitter:image:alt" content="Denham Preen" />
    </Head>
  );
};

export default Meta;
