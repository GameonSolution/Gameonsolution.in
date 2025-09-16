"use client";

import { useNavigate } from "react-router-dom";
import AnimatedCard from "../components/animateCard";
import TextHoverAnimation from "../components/textHoverAnimation";
import { Footer } from "./footer";
import { RiAwardFill } from "react-icons/ri";
import AnimateCard from "./animateCard";
import WhatsAppButton from "./WhatsappButton";
import TabSEO from "./seoOptimize";
import { seoData } from "@/common/seoTitleDescription";
import { useEffect, useState } from "react";
import axios from "axios";

const awards = [
  {
    icon: "/awards/sunNewsLogo.webp",
    date: "2023",
    title: "Best Sports Infra Solution",
  },
  {
    icon: "/awards/sitaLogo.webp",
    date: "2021-2023",
    title: "South India's best Sports infrastructure Firm Award",
  },
  {
    icon: "/awards/vikadanLogo.webp",
    date: "2023",
    title: "Best Sports Infra Solution",
  },
  {
    icon: "/awards/radiocity.webp",
    date: "2023-2024",
    title: "Radio City TamilNadu Business Icon of the Year",
  },
  {
    icon: "/awards/midtown.webp",
    date: "2024",
    title:
      "SOUTH INDIA’S BEST SPORTS INFRASTRUCTURE FIRM BY MIDTOWN BUSINESS AWARDS",
  },
];

const API_URL = import.meta.env.VITE_BLOG_API_URL;

const BlogPage = () => {
  const navigate = useNavigate();
  const [extraBlogs, setExtraBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchExtraBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/blogs`);
        // Expecting { success: true, blogs: [...] }
        if (res.data && res.data.success && Array.isArray(res.data.blogs)) {
          setExtraBlogs(res.data.blogs);
        } else if (res.data && Array.isArray(res.data)) {
          // in case API returns array directly
          setExtraBlogs(res.data);
        } else {
          console.warn("Unexpected blogs response shape", res.data);
        }
      } catch (error) {
        console.error("Error fetching extra blogs:", error);
      }
    };

    fetchExtraBlogs();
  }, []);

  const staticBlogs = [
    {
      id: 1,
      slug: "minimum-area-required-for-turf-installation",
      title:
        "Minimum Area Required for Turf Installation: A Comprehensive Guide | GameOn Solution",
      excerpt:
        "Planning to install turf? Here's how much space you need for different sports across urban, semi-urban, and rural setups.",
      image: "/blog/Blog1(2).webp",
    },
    {
      id: 2,
      slug: "turf-cricket-installation",
      title:
        "Cricket Turf Installation: A Smart Investment in South India | GameOn Solution",
      excerpt:
        "Explore the financial opportunities, installation costs, and ROI of setting up a turf cricket business in India.",
      image: "/blog/Blog2(1).webp",
    },
    {
      id: 3,
      slug: "understanding-turf-and-artificial-grass",
      title:
        "Understanding Turf and Artificial Grass: What's the Difference? | GameOn Solution",
      excerpt:
        "Confused between turf and artificial grass? Learn key differences, maintenance needs, and the best use-cases for each surface.",
      image: "/blog/blog3.webp",
    },
    {
      id: 4,
      slug: "india-pakistan-icc-matches-neutral-venues",
      title:
        "India-Pakistan Neutral Venue Matches & Turf Infrastructure  | GameOn Solution",
      excerpt:
        "With India-Pakistan matches at neutral venues until 2027, the spotlight is on high-quality turf and world-class sports infrastructure.",
      image: "/blog/Blog4(1).webp",
    },
    {
      id: 5,
      slug: "average-turf-size-guide",
      title: "Get in the Know: Average Turf Size Demystified | GameOn Solution",
      excerpt:
        "From backyard setups to full-scale football fields, understand how turf sizes impact cost, business use, and passive income potential.",
      image: "/blog/blog5.webp",
    },
    {
      id: 6,
      slug: "minimum-square-feet-for-turf",
      title:
        "Unlocking the Turf Business: What's the Minimum Square Feet for Turf? | GameOn Solution",
      excerpt:
        "The turf business is catching on like wildfire, thanks to its potential for easy money and the growing need for hassle-free yard solutions.",
      image: "/blog/Blog6(1).webp",
    },
    {
      id: 7,
      slug: "dhineshwaran-ms-how-he-built-his-legacy",
      title:
        "Constructing the Field of Dreams: How Dhineshwaran M.S. is Changing South Indian Sports | GameOn Solution",
      excerpt: "How Did Mr Dhineshwaran Build His Legacy",
      image: "/blog/blog.webp",
    },
    {
      id: 8,
      slug: "fifa-turf-vs-natural-grass",
      title:
        "Does FIFA Use Turf or Grass? The Truth Behind Football Fields at the World’s Biggest Stage | GameOn Solution",
      excerpt:
        "Curious if FIFA uses artificial turf or natural grass? Discover FIFA’s official stance, turf certifications, real-world examples, and what it means for your football turf project.",
      image: "/blog/Blog8 (1).webp",
    },
    {
      id: 9,
      slug: "rooftop-turf-ground-guide",
      title:
        "Can You Build a Turf Ground on Rooftops? Here’s What You Need to Know | GameOn Solution",
      excerpt:
        "Is it possible to install a turf ground on a rooftop in India? Discover the structural, legal, and safety requirements of rooftop turf construction with tips from experts at GameOn Solution.",
      image: "/blog/Blog9(1).webp",
    },
    {
      id: 10,
      slug: "why-gameon-is-best-turf-construction-company",
      title:
        "Why GameOn Solution is South India’s No.1 Sports Infra Developer for Turf Construction | GameOn Solution",
      excerpt:
        "Planning to build a turf ground? Discover why GameOn Solution is the top choice for durable, high-performance sports infrastructure across Tamil Nadu and beyond.",
      image: "/blog/Blog10(1).webp",
    },
    {
      id: 11,
      slug: "perfect-football-turf-construction-guide",
      title:
        "Building the Perfect Football Turf: 6 Key Factors That Define Long-Term Turf Performance | GameOn Solution",
      excerpt:
        "Discover the 6 critical elements that make a football turf truly top-class. Learn how GameOn Solution builds long-lasting, high-performance fields across South India.",
      image: "/blog/Blog11(1).webp",
    },
    {
      id: 12,
      slug: "convert-empty-land-into-turf-business",
      title:
        "How to Turn an Empty Piece of Land Into a Money-Making Turf Ground | GameOn Solution",
      excerpt:
        "Got an unused plot of land? Learn how to convert it into a profitable turf ground with expert guidance on investment, planning, construction, and marketing from GameOn Solution.",
      image: "/blog/Blog12.webp",
    },
    {
      id: 13,
      slug: "why-some-turfs-fail",
      title: "Why Some Turf Grounds Fail Within a Year and How to Avoid It?",
      excerpt:
        "Wondering why some turf businesses shut down quickly? Learn the most common mistakes turf owners make and how to build a profitable, long-lasting turf ground.",
      image: "/blog/Blog13.webp",
    },
    {
      id: 14,
      slug: "india-daily-turf-players",
      title: "How Many People Play Turf Every Day in India?",
      excerpt:
        "Walk past any turf ground in the evening — it’s packed. But have you ever wondered how many people play on turf across India each day? Discover real usage trends and market insights.",
      image: "/blog/Blog14.webp",
    },
    {
      id: 15,
      slug: "why-turf-is-popular-now",
      title: "Why Turf Grounds Are Becoming More Popular Than Ever",
      excerpt:
        "Everywhere you look — from small towns to metro cities — turf grounds are opening fast. And they’re always booked",
      image: "/blog/Blog15.webp",
    },
    {
      id: 16,
      slug: "government-support-for-turfs",
      title: "Government Initiatives Supporting Turf Grounds in India",
      excerpt:
        "It’s not just private turf owners pushing the industry forward — the government is quietly helping too. From Khelo India to Smart City projects, explore how policy is fueling turf growth.",
      image: "/blog/Blog16.webp",
    },
    {
      id: 17,
      slug: "turf-vs-real-estate-2025",
      title: "Turf vs Real Estate: Which Is the Better Investment in 2025?",
      excerpt:
        "In 2025, turf grounds are challenging traditional real estate as smart investments. Explore ROI timelines, cost comparisons, and why many landowners are choosing turf over buildings.",
      image: "/blog/Blog17.webp",
    },
    {
      id: 18,
      slug: "playgrounds-are-disappearing-turfs-are-rising",
      title: "Playgrounds Are Disappearing. Turf Grounds Are Filling the Gap",
      excerpt:
        "As urban playgrounds vanish, turf grounds are rapidly rising as the go-to spaces for sports and fitness. Learn why this shift is happening, and how smart investors are capitalizing on the turf trend in India.",
      image: "/blog/Blog18.webp",
    },
    {
      id: 19,
      slug: "turf-impact-local-sports",
      title: "5 Ways Turfs Are Changing the Face of Local Sports in India",
      excerpt:
        "Local turf grounds are transforming how sports is played in India. From kids and girls playing more, to young entrepreneurs launching turf businesses — discover the turf revolution.",
      image: "/blog/Blog19.webp",
    },
    {
      id: 20,
      slug: "attract-more-players-to-your-turf",
      title:
        "Want to Attract More Players to Your Turf? Here’s What They Actually Care About",
      excerpt:
        "Struggling to get bookings even after building your turf? Discover the 5 key features players care about – from turf quality to lighting, safety, and online bookings.",
      image: "/blog/Blog20.webp",
    },
    {
      id: 21,
      slug: "turf-construction-cost-tamilnadu",
      title: "Turf Construction Cost in Tamil Nadu (2025 Guide)",
      excerpt:
        "Planning to build a turf in Tamil Nadu? Here’s a detailed guide on construction costs, from land preparation to lighting and turf material.",
      image: "/blog/Blog21.webp",
    },
    {
      id: 22,
      slug: "turf-vs-concrete-sports",
      title: "Turf vs Concrete for Sports Use – Which One Should You Choose?",
      excerpt:
        "Wondering whether to build your sports area with turf or concrete? This guide compares both in terms of cost, safety, performance, and maintenance.",
      image: "/blog/Blog22.webp",
    },
    {
      id: 23,
      slug: "pickleball-court-construction-tamilnadu",
      title: "Pickleball Court Construction in Tamil Nadu: Complete 2025 Guide",
      excerpt:
        "Looking to build a pickleball court in Tamil Nadu? Our 2025 guide covers everything from costs and permits to materials and maintenance. Get expert tips for constructing the perfect court in Tamil Nadu's climate!",
      image: "/blog/Blog23.webp",
    },
    {
      id: 24,
      slug: "backyard-pickleball-court-construction-2025",
      title:
        "A Step-by-Step Guide to Building a Backyard Pickleball Court in 2025",
      excerpt:
        "Your backyard can be a pickleball oasis! With our full step-by-step guide to building your own pickleball court in 2025, you will have everything you need to create your own backyard pickleball court project from beginning to play!",
      image: "/blog/Blog24.webp",
    },
    {
      id: 25,
      slug: "budget-pickleball-court-diy-guide-2025",
      title:
        "Budget-Friendly Pickleball Court Construction Ideas for Landowners: 2025 DIY Guide",
      excerpt:
        "Looking for affordable pickleball court building ideas for your home in 2025? Check out our full post for money-saving ideas, quick do-it-yourself hacks, and creative substitutes to design a cost-effective court in the backyard!",
      image: "/blog/Blog25.webp",
    },
    {
      id: 26,
      slug: "common-pickleball-court-building-mistakes-2025",
      title:
        "Common Mistakes to Avoid When Building Your First Pickleball Court: Expert Guide 2025",
      excerpt:
        "Planning to build a pickleball court? Learn from the most common DIY and professional mistakes that cost homeowners and facility owners thousands. This 2025 guide helps you avoid budget, design, and safety errors before you start construction.",
      image: "/blog/Blog26.webp",
    },
    {
      id: 27,
      slug: "essential-tools-materials-diy-pickleball-court-india-2025",
      title:
        "Essential Tools and Materials for DIY Pickleball Court Installation in India: Complete 2025 Guide",
      excerpt:
        "Discover the essential tools and materials needed for DIY pickleball court installation in India with our comprehensive 2025 guide. From locally available construction supplies to specialized equipment, build your perfect court while saving on costs!",
      image: "/blog/Blog27.webp",
    },
    {
      id: 28,
      slug: "convert-tennis-court-to-pickleball-2025-guide",
      title:
        "How to Convert an Existing Tennis Court to a Pickleball Court: The Complete 2025 Guide",
      excerpt:
        "Thinking of transforming your unused tennis court into a buzzing pickleball hub? Our 2025 step-by-step guide covers everything—from layout, drainage, surfacing, and line marking to net systems and budget breakdown. Discover how to make the switch smoothly and affordably.",
      image: "/blog/Blog28.webp",
    },
    {
      id: 29,
      slug: "pickleball-court-construction-mistakes-guide",
      title:
        "The Ultimate Guide: Pickleball Court Construction Mistakes That Will Cost You a Fortune!",
      excerpt:
        "Avoid the most common pickleball court construction mistakes that could cost you lakhs. Learn from GameOn Solution—the leading sports infra developers in South India—on how to build your court right the first time.",
      image: "/blog/Blog29.webp",
    },
    {
      id: 30,
      slug: "how-to-build-your-own-pickleball-court-step-by-step-guide",
      title:
        "The Ultimate Guide to Building Your Own Pickleball Court—Step-by-Step + Pro Tips + 11 Must-Know Steps",
      excerpt:
        "Ready to build your own pickleball court? This step-by-step guide shows you how to plan, construct, and maintain a regulation court at home—with expert tips from GameOn Solution.",
      image: "/blog/Blog30.webp",
    },
    {
      id: 31,
      slug: "top-places-in-tamilnadu-to-start-a-turf-business",
      title:
        "Top 5 Places in Tamil Nadu Perfect for Starting a Turf Business in 2025",
      excerpt:
        "Planning to start a turf business in Tamil Nadu? Discover the top 5 high-potential cities like Chennai, Coimbatore, and Madurai where demand is booming. Learn why these locations are ideal for turf investments in 2025.",
      image: "/blog/Blog31.webp",
    },
    {
      id: 32,
      slug: "rise-of-pickleball-in-tamil-nadu",
      title:
        "The Rise of Pickleball in Tamil Nadu: Why Now Is the Time to Build a Court",
      excerpt:
        "Pickleball is booming across Tamil Nadu — from apartment rooftops to farmhouses. Learn why 2025 is the perfect year to invest in your own court and how GameOn Solution can help you build it right.",
      image: "/blog/Blog32.webp",
    },
    {
      id: 33,
      slug: "cost-of-football-and-cricket-turf-construction-india",
      title:
        "What Determines the Cost of Football and Cricket Turf Construction in India?",
      excerpt:
        "From turf size to materials, drainage to certifications, discover what really affects turf construction costs in India. Whether it’s for cricket or football, GameOn Solution helps you make the right investment.",
      image: "/blog/Blog33.webp",
    },
    {
      id: 34,
      slug: "gen-alpha-aqua-eco-friendly-turf-rajapalayam",
      title: "South TN’s First Aqua Eco-Friendly Turf Is Here - GEN ALPHA",
      excerpt:
        "GameOn Solution launches GEN ALPHA in Rajapalayam — South Tamil Nadu's first aqua blue, eco-friendly multi-sport turf. Built for high performance, low maintenance, and future-ready play.",
      image: "/blog/Blog34.webp",
    },
    {
      id: 35,
      slug: "sports-infrastructure-products-gameon-solution",
      title: "What We Build at GameOn Solution - Our Sports Infra Products",
      excerpt:
        "From multi-sport turfs to skating tracks and pickleball courts, GameOn Solution builds world-class sports infrastructure across South India. Explore all our offerings.",
      image: "/blog/Blog35.webp",
    },
    {
      id: 36,
      slug: "bangalore-largest-multipurpose-turf-gameon-solution",
      title:
        "Bangalore’s BIGGEST Turf - 25,000 Sq. Ft. of Sporting Excellence!",
      excerpt:
        "GameOn Solution unveils Bangalore's largest turf with 25,000 sq. ft. of world-class sports infra. FIFA-grade grass, cricket mats, and multi-game setups await players!",
      image: "/blog/Blog36.webp",
    },
    {
      id: 37,
      slug: "turf-construction-cost-karnataka",
      title: "Turf Construction Cost in Karnataka (2025 Guide)",
      excerpt:
        "Planning to build a sports turf in Karnataka? Your biggest question is likely “How much will it cost to build a turf ground here?",
      image: "/blog/Blog37.webp",
    },
    {
      id: 38,
      slug: "turf-construction-cost-ap-telangana",
      title:
        "Turf Construction Cost in Andhra Pradesh & Telangana (2025 Guide)",
      excerpt:
        "Planning to build a turf in Andhra Pradesh or Telangana? You’re in the right place. At GameOn Solution, we’ve helped clients across South India — from Guntur to Hyderabad — build pro-grade turfs that fit their land and budget.",
      image: "/blog/Blog38.webp",
    },
    {
      id: 39,
      slug: "turf-construction-cost-kerala",
      title: "Turf Construction Cost in Kerala (2025 Guide)",
      excerpt:
        "If you’re planning turf construction in Kerala — whether Kochi, Trivandrum, or Calicut — GameOn Solution offers state-specific expertise.",
      image: "/blog/Blog38.webp",
    },
    {
      id: 40,
      slug: "turf-calculator-online-estimate-tool",
      title:
        "Turf Calculator India (2025): Instantly Estimate Turf Construction Cost",
      excerpt:
        "Use GameOn Solution’s free Turf Calculator to estimate football, cricket, or pickleball turf construction costs in seconds. Plan smarter with real-time pricing.",
      image: "/blog/Blog40.webp",
    },
    {
      id: 41,
      slug: "turf-construction-cost-chennai",
      title: "Turf Construction Cost in Chennai 2025: A Complete Local Guide",
      excerpt:
        "Planning a turf in Chennai? This 2025 local guide breaks down everything you need to know about turf construction costs, from OMR to Velachery.",
      image: "/blog/Blog41.webp",
    },
    {
      id: 42,
      slug: "best-turf-builder-bangalore-2025",
      title:
        "Best Turf Builder in Bengaluru: Top Picks & Installation Costs (2025)",
      excerpt:
        "Looking to build a turf in Bangalore? Discover why GameOn Solution is Bengaluru’s #1 turf builder with project costs, features, and real examples from 2025.",
      image: "/blog/Blog42.webp",
    },
    {
      id: 43,
      slug: "turf-installation-kochi-cost-permits-locations",
      title:
        "Turf Installation in Kochi: Cost, Permits & Popular Locations (2025 Guide)",
      excerpt:
        "Planning turf installation in Kochi? Learn the complete 2025 guide to turf construction costs, permits, drainage requirements, and the best localities in Kerala.",
      image: "/blog/Blog43.webp",
    },
    {
      id: 44,
      slug: "pickleball-court-dimensions-builder-guide",
      title:
        "Pickleball Court Dimensions: What Every Builder Should Know (2025 Guide)",
      excerpt:
        "Discover the essential pickleball court dimensions every builder must know. This comprehensive 2025 guide covers court sizes, net height, indoor vs outdoor layouts, surface materials, lighting, fencing, and more for successful construction.",
      image: "/blog/Blog44.webp",
    },
    {
      id: 45,
      slug: "pickleball-court-layout-elements",
      title: "Key Elements of an Effective Pickleball Court Layout",
      excerpt:
        "Master the key elements that make a pickleball court layout safe, functional, and tournament-ready—from dimensions to lighting and surface texture.",
      image: "/blog/Blog45.webp",
    },
    {
      id: 46,
      slug: "pickleball-court-installation-cost",
      title: "How Much Should You Budget for Pickleball Court Installation?",
      excerpt:
        "Discover the pickleball court installation cost breakdown and budgeting tips for a smooth court creation process—from materials and labor to DIY vs professional options.",
      image: "/blog/Blog46.webp",
    },
    {
      id: 47,
      slug: "pickleball-court-surface-options",
      title: "Discover the Most Durable Pickleball Court Surface Options",
      excerpt:
        "Explore the top pickleball court surface options! From asphalt to artificial turf, find the perfect fit for your game.",
      image: "/blog/Blog47.webp",
    },
    {
      id: 48,
      slug: "artificial-turf-installation-cost",
      title: "Artificial Turf Installation Cost: A Comprehensive Guide",
      excerpt:
        "Discover the ins and outs of artificial turf installation costs. From materials to labor, get the full breakdown here!",
      image: "/blog/Blog48.webp",
    },
    {
      id: 49,
      slug: "artificial-turf-infill-options",
      title: "Artificial Turf Infill Options: Which One Is Best for You?",
      excerpt:
        "Discover the top artificial turf infill options for your sports field! Make the right choice for performance and maintenance.",
      image: "/blog/Blog49.webp",
    },
    {
      id: 50,
      slug: "best-artificial-turf-for-football",
      title:
        "Why the Best Artificial Turf for Football Is Worth the Investment",
      excerpt:
        "Discover why investing in the best artificial turf for football is a game-changer for performance and sustainability!",
      image: "/blog/Blog50.webp",
    },
    {
      id: 51,
      slug: "football-field-turf-construction-mistakes",
      title: "Football Field Turf Construction: Common Mistakes to Avoid",
      excerpt:
        "Avoid common mistakes in football field turf construction! Learn how to ensure longevity and top performance.",
      image: "/blog/Blog51.webp",
    },
    {
      id: 52,
      slug: "benefits-of-artificial-turf-football-fields",
      title: "The Benefits of Choosing Artificial Turf for Football Fields",
      excerpt:
        "Discover the advantages of artificial turf for football fields—from durability to FIFA standards, elevate your game!",
      image: "/blog/Blog52.webp",
    },
    {
      id: 53,
      slug: "pickleball-court-dimensions-guide",
      title: "Pickleball Court Dimensions: What Every Builder Should Know",
      excerpt:
        "Discover essential pickleball court dimensions for your project. Ensure precision in construction for the perfect game setup!",
      image: "/blog/Blog53.webp",
    },
    {
      id: 54,
      slug: "rubber-infilled-vs-eco-friendly-turf",
      title:
        "Rubber Infilled vs Eco-Friendly Turf: Which is Best for South India?",
      excerpt:
        "Compare Rubber Infilled and Eco-Friendly Turf to choose the right surface for your sports ground in Tamil Nadu and South India. Learn about durability, cost, and environmental benefits.",
      image: "/blog/Blog54.webp",
    },
    {
      id: 55,
      slug: "turf-maintenance-services-south-india",
      title:
        "Complete Guide to Turf Maintenance Services for South Indian Climate",
      excerpt:
        "Discover the ultimate guide to turf maintenance services in South India. Learn how to maintain football and cricket turfs for durability, safety, and peak performance year-round.",
      image: "/blog/Blog55.webp",
    },
  ];

  const mergedBlogs = [...staticBlogs, ...extraBlogs];

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <TabSEO
        title={seoData.blog.title}
        description={seoData.blog.description}
        keywords={seoData.blog.keywords}
        image={seoData.blog.image}
        url={seoData.blog.url}
      />
      {/* <section className="flex flex-col items-center min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28 mt-20"> */}
      <section className="flex flex-col items-center min-h-screen bg-primary px-6 md:px-10 lg:px-20 pb-16 lg:pb-28 mt-20">
        {/* Moved the heading to the start of the section */}
        <div className="text-center py-10 w-full">
          <AnimatedCard>
            <p className="text-[12px] font-secondary uppercase tracking-[1px] text-secondary">
              Our Blog
            </p>
          </AnimatedCard>
          <AnimatedCard>
            <h1 className="flex text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight">
              <TextHoverAnimation text="Latest" />
              <span className="text-secondary">
                <TextHoverAnimation text="Articles" />{" "}
              </span>
            </h1>
          </AnimatedCard>
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full py-10">
          {mergedBlogs.map((blog, idx) => (
            <AnimatedCard key={blog.slug ?? blog.id ?? idx}>
              <div
                className="cursor-pointer group bg-black/20 hover:bg-black/30 transition rounded-lg overflow-hidden"
                onClick={() => handleBlogClick(blog.slug)}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h2 className="text-xl font-primary text-secondary group-hover:text-yellow-400">
                    {blog.title}
                  </h2>
                  <p className="text-white text-sm mt-2 opacity-80">
                    {blog.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-yellow-400">Read More →</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        <div className="px-10 lg:px-48">
          <div className=" flex flex-col items-center justify-center border-t border-secondary  ">
            <h3 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl  py-10  font-primary text-secondary uppercase leading-tight flex gap-3">
              <RiAwardFill className="h-10" />

              <TextHoverAnimation text="Awards" />
              <span className="text-white">
                <TextHoverAnimation text="From" />
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {awards.map((image, index) => (
                <AnimateCard key={index}>
                  <div className="border border-gray-50/10 p-3 transform transition duration-300 ease-in-out hover:scale-105 rounded-xl bg-white/5 w-full max-w-[160px] mx-auto">
                    <div className="w-full h-28 md:h-32 flex items-center justify-center bg-white/10 rounded-md">
                      <img
                        src={image.icon}
                        alt={`award-logo-${index + 1}`}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                    <p className="text-sm md:text-base font-primary leading-tight text-center text-secondary uppercase mt-3">
                      {image.title}
                    </p>
                  </div>
                </AnimateCard>
              ))}
            </div>
          </div>
        </div>
        <WhatsAppButton />
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
