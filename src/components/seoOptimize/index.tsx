// import { Helmet } from "react-helmet-async";

// const TabSEO = ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) => (
//   <Helmet>
//     <title>{title}</title>

//     {/* Meta Description */}
//     <meta name="description" content={description} />

//     {/* <!-- Robots --> */}
//     <meta name="robots" content="index, follow" />

//     {/* <!-- Author --> */}
//     <meta name="author" content="GameOnSolution" />

//     {/* <!-- Open Graph Metadata --> */}
//     <meta
//       property="og:title"
//       content="GameOnSolution | Sports Turf Solutions in India"
//     />
//     <meta
//       property="og:description"
//       content="Looking for premium sports turf in India? GameOnSolution specializes in synthetic and natural turf for football, cricket, and other sports."
//     />
//     <meta property="og:image" content="/bg-image.webp" />
//     <meta property="og:url" content="https://gameonsolution.in" />
//     <meta property="og:type" content="website" />

//     {/* <!-- Twitter Card --> */}
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta
//       name="twitter:title"
//       content="GameOnSolution | Sports Turf Solutions in India"
//     />
//     <meta
//       name="twitter:description"
//       content="GameOnSolution offers synthetic and natural turf solutions for sports fields like football and cricket in India. Get premium quality and expert service."
//     />
//     <meta name="twitter:image" content="/bg-image.webp" />
//   </Helmet>
// );

// export default TabSEO;

import { Helmet } from "react-helmet-async";

interface TabSEOProps {
  title: string;
  description: string;
  keywords?: string; // Optional keywords meta
  image?: string; // Optional image for Open Graph & Twitter
  url?: string; // Optional URL for Open Graph
}

const TabSEO = ({
  title,
  description,
  keywords = "sports turf, artificial grass, cricket turf, football turf, turf installation India, sports field solutions",
  image = "/bg-image.webp",
  url = "https://gameonsolution.in",
}: TabSEOProps) => (
  <Helmet>
    {/* Title */}
    <title>{title}</title>

    {/* Meta Description */}
    <meta name="description" content={description} />

    {/* Keywords */}
    <meta name="keywords" content={keywords} />

    {/* Robots */}
    <meta name="robots" content="index, follow" />

    {/* Author */}
    <meta name="author" content="GameOnSolution" />

    {/* Open Graph Metadata */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />

    {/* Charset */}
    <meta charSet="UTF-8" />

    {/* Viewport */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Theme Color */}
    <meta name="theme-color" content="#009688" />
  </Helmet>
);

export default TabSEO;
