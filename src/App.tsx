import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/navBar";
import CursorFollower from "./components/customCursor";
import Preloader from "./components/preLoading";
import ScrollProgress from "./components/scrollProgress";
import News_Page from "./components/newsPage";
import Testimonials from "./components/testimonials";
import { ContactsPage } from "./components/contactsPage";
import FootballTurf from "./components/products/football";
import CricketTurf from "./components/products/cricket";
import VolleyballTurf from "./components/products/volleyball";
import MultiSportsTurf from "./components/products/multisports";
import IndoorTurf from "./components/products/indoor";
import PickleTurf from "./components/products/PickleTurf";
import CircleTurf from "./components/products/circleMiniCriketStadium";
import { useNewsFeed } from "./hook/useNewsFeed";
import { useCarousel } from "./hook/useCarousel";
import { useTestimonials } from "./hook/useTestimonials";
// import Portfolio from "./components/portfolio";
import CircleTurf360 from "./components/products/360CircleTurf";
import BadmintonCourt from "./components/products/BadmintonCourt";
import BasketBallCourt from "./components/products/basketBall";
import HomePage from "./components/homePage";
import BlogPage from "./components/blog";
import NotFound from "./components/notfound";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { getNewsFeeds } = useNewsFeed();
  const { getCarousels } = useCarousel();
  const { getAllTestimonials } = useTestimonials();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {(isLoading ||
          getNewsFeeds.isLoading ||
          getAllTestimonials.isLoading ||
          getCarousels.isLoading) && (
          <div className="w-screen h-screen bg-primary">
            <Preloader
              isLoading={isLoading}
              onComplete={handleLoadingComplete}
            />
          </div>
        )}
        {!isLoading && (
          <div
            className={`w-screen h-screen bg-primary no-scrollbar select-none`}
          >
            <Navbar />
            <CursorFollower />
            <ScrollProgress />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/news" element={<News_Page />} />
              {/* <Route path="/portfolio" element={<Portfolio />} /> */}
              <Route path="/get-in-touch" element={<ContactsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<NotFound />} />

              {/* products pages */}
              <Route path="/360-circle-turf" element={<CircleTurf360 />} />
              <Route path="/basket-ball" element={<BasketBallCourt />} />
              <Route path="/badminton-court" element={<BadmintonCourt />} />
              <Route path="/pickle-turf" element={<PickleTurf />} />
              <Route path="/circle-turf" element={<CircleTurf />} />
              <Route path="/football-turf" element={<FootballTurf />} />
              <Route path="/cricket-turf" element={<CricketTurf />} />
              <Route path="/multi-sports-turf" element={<MultiSportsTurf />} />
              <Route path="/indoor-turf" element={<IndoorTurf />} />
              <Route path="/volleyball-turf" element={<VolleyballTurf />} />
            </Routes>
          </div>
        )}
      </Router>
    </HelmetProvider>
  );
};

export default App;
