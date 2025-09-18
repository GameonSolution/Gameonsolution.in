// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import Navbar from "./components/navBar";
// import CursorFollower from "./components/customCursor";
// import Preloader from "./components/preLoading";
// import ScrollProgress from "./components/scrollProgress";
// import News_Page from "./components/newsPage";
// import Testimonials from "./components/testimonials";
// import { ContactsPage } from "./components/contactsPage";
// import FootballTurf from "./components/products/football";
// import CricketTurf from "./components/products/cricket";
// import VolleyballTurf from "./components/products/volleyball";
// import MultiSportsTurf from "./components/products/multisports";
// import IndoorTurf from "./components/products/indoor";
// import PickleTurf from "./components/products/PickleTurf";
// // import CircleTurf from "./components/products/circleMiniCriketStadium";
// import { useNewsFeed } from "./hook/useNewsFeed";
// import { useCarousel } from "./hook/useCarousel";
// import { useTestimonials } from "./hook/useTestimonials";
// // import Portfolio from "./components/portfolio";
// import CircleTurf360 from "./components/products/360CircleTurf";
// import BadmintonCourt from "./components/products/BadmintonCourt";
// import BasketBallCourt from "./components/products/basketBall";
// import HomePage from "./components/homePage";
// import BlogPage from "./components/blog";
// import NotFound from "./components/notfound";
// import BlogDetailPage from "./components/BlogDetailPage";
// import ScrollToTop from "./components/ScrollToTop";

// const App: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   const { getNewsFeeds } = useNewsFeed();
//   const { getCarousels } = useCarousel();
//   const { getAllTestimonials } = useTestimonials();

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <HelmetProvider>
//       <Router>
//         {(isLoading ||
//           getNewsFeeds.isLoading ||
//           getAllTestimonials.isLoading ||
//           getCarousels.isLoading) && (
//           <div className="w-screen h-screen bg-primary">
//             <Preloader
//               isLoading={isLoading}
//               onComplete={handleLoadingComplete}
//             />
//           </div>
//         )}
//         {!isLoading && (
//           <div
//             className={`w-screen h-screen bg-primary no-scrollbar select-none`}
//           >
//             <ScrollToTop />
//             <Navbar />
//             <CursorFollower />
//             <ScrollProgress />
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/testimonials" element={<Testimonials />} />
//               <Route path="/news" element={<News_Page />} />
//               {/* <Route path="/portfolio" element={<Portfolio />} /> */}
//               <Route path="/get-in-touch" element={<ContactsPage />} />
//               <Route path="/blog" element={<BlogPage />} />
//               <Route path="/blog/:slug" element={<BlogDetailPage />} />
//               <Route path="*" element={<NotFound />} />

//               {/* products pages */}
//               <Route path="/360-circle-turf" element={<CircleTurf360 />} />
//               <Route path="/basket-ball" element={<BasketBallCourt />} />
//               <Route path="/badminton-court" element={<BadmintonCourt />} />
//               <Route path="/pickle-turf" element={<PickleTurf />} />
//               {/* <Route path="/circle-turf" element={<CircleTurf />} /> */}
//               <Route path="/football-turf" element={<FootballTurf />} />
//               <Route path="/cricket-turf" element={<CricketTurf />} />
//               <Route path="/multi-sports-turf" element={<MultiSportsTurf />} />
//               <Route path="/indoor-turf" element={<IndoorTurf />} />
//               <Route path="/volleyball-turf" element={<VolleyballTurf />} />
//             </Routes>
//           </div>
//         )}
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;

// Old non SEO Optimized code

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import Navbar from "./components/navBar";
// import CursorFollower from "./components/customCursor";
// import ScrollProgress from "./components/scrollProgress";
// import News_Page from "./components/newsPage";
// import Testimonials from "./components/testimonials";
// import FootballTurf from "./components/products/football";
// import CricketTurf from "./components/products/cricket";
// import VolleyballTurf from "./components/products/volleyball";
// import MultiSportsTurf from "./components/products/multisports";
// import IndoorTurf from "./components/products/indoor";
// import PickleTurf from "./components/products/PickleTurf";
// // import CircleTurf from "./components/products/circleMiniCriketStadium";
// import { useNewsFeed } from "./hook/useNewsFeed";
// import { useCarousel } from "./hook/useCarousel";
// import { useTestimonials } from "./hook/useTestimonials";
// // import Portfolio from "./components/portfolio";
// import CircleTurf360 from "./components/products/360CircleTurf";
// import BadmintonCourt from "./components/products/BadmintonCourt";
// import BasketBallCourt from "./components/products/basketBall";
// import HomePage from "./components/homePage";
// import BlogPage from "./components/blog";
// import NotFound from "./components/notfound";
// import BlogDetailPage from "./components/BlogDetailPage";
// import ScrollToTop from "./components/ScrollToTop";
// import ContactsPage from "./components/contactsPage";
// import Preloader from "./components/preLoading";
// import TurfCalculator from "./components/turfcalculator";

// const App: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   const { getNewsFeeds } = useNewsFeed();
//   const { getCarousels } = useCarousel();
//   const { getAllTestimonials } = useTestimonials();

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <HelmetProvider>
//       <Router>
//         {(isLoading ||
//           getNewsFeeds.isLoading ||
//           getAllTestimonials.isLoading ||
//           getCarousels.isLoading) && (
//           <div className="w-screen h-screen bg-primary">
//             <Preloader
//               isLoading={isLoading}
//               onComplete={handleLoadingComplete}
//             />
//           </div>
//         )}
//         {!isLoading && (
//           <div
//             className={`w-screen h-screen bg-primary no-scrollbar select-none`}
//           >
//             <ScrollToTop />
//             <Navbar />
//             <CursorFollower />
//             <ScrollProgress />
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/testimonials" element={<Testimonials />} />
//               <Route path="/news" element={<News_Page />} />
//               {/* <Route path="/portfolio" element={<Portfolio />} /> */}
//               <Route path="/get-in-touch" element={<ContactsPage />} />
//               <Route path="/blog" element={<BlogPage />} />
//               <Route path="/blog/:slug" element={<BlogDetailPage />} />
//               <Route path="/turf-calculator" element={<TurfCalculator />} />
//               <Route path="*" element={<NotFound />} />

//               {/* Product pages */}
//               <Route path="/360-circle-turf" element={<CircleTurf360 />} />
//               <Route path="/basket-ball" element={<BasketBallCourt />} />
//               <Route path="/badminton-court" element={<BadmintonCourt />} />
//               <Route path="/pickle-turf" element={<PickleTurf />} />
//               {/* <Route path="/circle-turf" element={<CircleTurf />} /> */}
//               <Route path="/football-turf" element={<FootballTurf />} />
//               <Route path="/cricket-turf" element={<CricketTurf />} />
//               <Route path="/multi-sports-turf" element={<MultiSportsTurf />} />
//               <Route path="/indoor-turf" element={<IndoorTurf />} />
//               <Route path="/volleyball-turf" element={<VolleyballTurf />} />
//             </Routes>
//           </div>
//         )}
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;

// After turf calculator preloader is done

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Navbar from "./components/navBar";
import CursorFollower from "./components/customCursor";
import ScrollProgress from "./components/scrollProgress";
import News_Page from "./components/newsPage";
import Testimonials from "./components/testimonials";
import FootballTurf from "./components/products/football";
import CricketTurf from "./components/products/cricket";
import VolleyballTurf from "./components/products/volleyball";
import MultiSportsTurf from "./components/products/multisports";
import IndoorTurf from "./components/products/indoor";
import PickleballCourt from "./components/products/PickleballCourt";
import CircleTurf360 from "./components/products/360CircleTurf";
import BadmintonCourt from "./components/products/BadmintonCourt";
import BasketBallCourt from "./components/products/basketBall";
import HomePage from "./components/homePage";
import BlogPage from "./components/blog";
import NotFound from "./components/notfound";
import BlogDetailPage from "./components/BlogDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactsPage from "./components/contactsPage";
import Preloader from "./components/preLoading";
import TurfCalculator from "./components/turfcalculator";

// Hooks
import { useNewsFeed } from "./hook/useNewsFeed";
import { useCarousel } from "./hook/useCarousel";
import { useTestimonials } from "./hook/useTestimonials";
import AquaEcoTurf from "./components/products/aquaturf";
import OurProducts from "./components/ourproducts";
import EcoFriendly from "./components/ourproducts/EcoFriendly";
import AquaEcoFriendly from "./components/ourproducts/AquaEcoFriendly";
import Turf360 from "./components/ourproducts/Turf360";
import SemiCircleTurf from "./components/ourproducts/SemiCircleTurf";
import UShapeTurf from "./components/ourproducts/UShapeTurf";
import OvalTurf from "./components/ourproducts/OvalTurf";
import SkatingRink from "./components/ourproducts/SkatingRink";
import { Toaster } from "react-hot-toast";
import DiagonalPitch from "./components/ourproducts/DiagonalPitch";
import Projects from "./components/projects";

// Wrapper component to allow using `useLocation` inside JSX
const AppRoutes = ({
  isLoading,
  handleLoadingComplete,
}: {
  isLoading: boolean;
  handleLoadingComplete: () => void;
}) => {
  const location = useLocation();

  const { getNewsFeeds } = useNewsFeed();
  const { getCarousels } = useCarousel();
  const { getAllTestimonials } = useTestimonials();

  const productPathsToSkip = [
    "/360-circle-turf",
    "/basket-ball",
    "/badminton-court",
    "/pickleball-court",
    "/football-turf",
    "/cricket-turf",
    "/multi-sports-turf",
    "/indoor-turf",
    "/volleyball-turf",
    "/aqua-eco-friendly-turf",
  ];

  // 👉 Skip preloader for specific pages
  const shouldSkipPreloader =
    location.pathname === "/turf-calculator" ||
    location.pathname === "/blog" ||
    location.pathname === "/testimonials" ||
    location.pathname === "/projects" ||
    location.pathname.startsWith("/blog/") ||
    location.pathname === "/products" ||
    location.pathname.startsWith("/products/") ||
    productPathsToSkip.includes(location.pathname);

  const showPreloader =
    !shouldSkipPreloader &&
    (isLoading ||
      getNewsFeeds.isLoading ||
      getAllTestimonials.isLoading ||
      getCarousels.isLoading);

  //   Only show preloader on homepage
  // const showPreloader =
  //   location.pathname === "/" &&
  //   (isLoading ||
  //     getNewsFeeds.isLoading ||
  //     getAllTestimonials.isLoading ||
  //     getCarousels.isLoading);

  if (showPreloader) {
    return (
      <div className="w-screen h-screen bg-primary">
        <Preloader isLoading={isLoading} onComplete={handleLoadingComplete} />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-primary no-scrollbar select-none">
      <ScrollToTop />
      <Navbar />
      <CursorFollower />
      <ScrollProgress />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News_Page />} />
        <Route path="/get-in-touch" element={<ContactsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/turf-calculator" element={<TurfCalculator />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/products/eco-friendly" element={<EcoFriendly />} />
        <Route
          path="/products/aqua-eco-friendly"
          element={<AquaEcoFriendly />}
        />
        <Route path="/products/360-turf" element={<Turf360 />} />
        <Route path="/products/semi-circle-turf" element={<SemiCircleTurf />} />
        <Route path="/products/u-shape-turf" element={<UShapeTurf />} />
        <Route path="/products/oval-turf" element={<OvalTurf />} />
        <Route path="/products/skating-rink" element={<SkatingRink />} />
        <Route path="/products/diagonal-pitch" element={<DiagonalPitch />} />

        <Route path="/360-circle-turf" element={<CircleTurf360 />} />
        <Route path="/basket-ball" element={<BasketBallCourt />} />
        <Route path="/badminton-court" element={<BadmintonCourt />} />
        <Route path="/pickleball-court" element={<PickleballCourt />} />
        <Route path="/football-turf" element={<FootballTurf />} />
        <Route path="/cricket-turf" element={<CricketTurf />} />
        <Route path="/multi-sports-turf" element={<MultiSportsTurf />} />
        <Route path="/indoor-turf" element={<IndoorTurf />} />
        <Route path="/volleyball-turf" element={<VolleyballTurf />} />
        <Route path="/aqua-eco-friendly-turf" element={<AquaEcoTurf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AppRoutes
          isLoading={isLoading}
          handleLoadingComplete={handleLoadingComplete}
        />
      </Router>
    </HelmetProvider>
  );
};

export default App;
