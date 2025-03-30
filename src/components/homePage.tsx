import { seoData } from "@/common/seoTitleDescription";
import AboutUs from "./aboutUs";
import CircleMiniCricketStadiumTurf from "./CircleMiniCricketStadiumTurf";
import Contact from "./contact";
import FAQ from "./faq";
import { Footer } from "./Footer";
import HomeBanners from "./homeBanners";
import HomeNewsFeed from "./homeNewsFeed";
import IconsWithContent from "./iconsWithContent";
import InstagramEmbed from "./instagram";
import ReviewsSection from "./reviewSection";
import TabSEO from "./seoOptimize";
import Services from "./services";
import WhatsAppButton from "./WhatsappButton";
import WhyUs from "./whyUs";

const HomePage: React.FC = () => {
  return (
    <>
      <TabSEO
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        image={seoData.home.image}
        url={seoData.home.url}
      />
      <div id="home">
        <div id="parallaxBanners">
          <HomeBanners />
        </div>
        <div className="lg:hidden" id="iconsWithContent">
          <IconsWithContent />
        </div>
        <div id="CircleMiniCricketStadiumTurf">
          <CircleMiniCricketStadiumTurf />
        </div>
        <div id="aboutUs">
          <AboutUs />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="whyUs">
          <WhyUs />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="homeNewsFeed">
          <HomeNewsFeed />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="instagram">
          <InstagramEmbed />
        </div>
        <div id="footer">
          <Footer />
        </div>

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
};

export default HomePage;
