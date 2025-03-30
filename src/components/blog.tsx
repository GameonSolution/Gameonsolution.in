// "use client";

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import AnimatedCard from "../components/animateCard";
// import TextHoverAnimation from "../components/textHoverAnimation";

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get("https://api.gameonsolution.in/blogs");
//         setBlogs(response.data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const handleBlogClick = (slug) => {
//     navigate(`/blog/${slug}`);
//   };

//   return (
//     <section className="flex flex-col items-center min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28">
//       <div className="text-center py-10">
//         <AnimatedCard>
//           <p className="text-[12px] font-secondary uppercase tracking-[1px] text-secondary">
//             Our Blog
//           </p>
//         </AnimatedCard>
//         <AnimatedCard>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white uppercase leading-tight">
//             <TextHoverAnimation text="Latest" />
//             <span className="text-secondary">
//               {" "}
//               <TextHoverAnimation text="Articles" />{" "}
//             </span>
//           </h1>
//         </AnimatedCard>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
//         {blogs.map((blog) => (
//           <AnimatedCard key={blog.id}>
//             <div
//               className="cursor-pointer group bg-black/20 hover:bg-black/30 transition rounded-lg overflow-hidden"
//               onClick={() => handleBlogClick(blog.slug)}
//             >
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-primary text-secondary group-hover:text-yellow-400">
//                   {blog.title}
//                 </h2>
//                 <p className="text-white text-sm mt-2 opacity-80">
//                   {blog.excerpt}
//                 </p>
//                 <p className="mt-3 text-xs text-yellow-400">Read More →</p>
//               </div>
//             </div>
//           </AnimatedCard>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogPage;

"use client";

import { useNavigate } from "react-router-dom";
import AnimatedCard from "../components/animateCard";
import TextHoverAnimation from "../components/textHoverAnimation";
import { Footer } from "./Footer";
import { RiAwardFill } from "react-icons/ri";
import AnimateCard from "./animateCard";
import WhatsAppButton from "./WhatsappButton";

const awards = [
  {
    icon: "/sunNewsLogo.png",
    date: "2023",
    title: "Best Sportd Infra Solution",
  },
  {
    icon: "/sitaLogo.png",
    date: "2021-2023",
    title: "South India's best Sports infrastructure Firm Award",
  },
  {
    icon: "/vikadanLogo.png",
    date: "2023",
    title: "Best Sportd Infra Solution",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      slug: "importance-of-quality-turf",
      title: "The Importance of Quality Turf in Sports Fields",
      excerpt:
        "Discover why high-quality synthetic turf enhances gameplay, safety, and durability for all sports.",
      image:
        "https://www.sporteeno.com/wp-content/uploads/2021/06/main-banner-01.jpg",
    },
    {
      id: 2,
      slug: "turf-maintenance-guide",
      title: "Essential Turf Maintenance Guide",
      excerpt:
        "Learn expert tips on how to keep your artificial turf in pristine condition year-round.",
      image:
        "https://www.sporteeno.com/wp-content/uploads/2021/06/main-banner-01.jpg",
    },
    {
      id: 3,
      slug: "natural-vs-artificial-turf",
      title: "Natural Grass vs. Artificial Turf: Pros & Cons",
      excerpt:
        "A deep dive into the benefits and drawbacks of both turf options for sports grounds.",
      image:
        "https://www.sporteeno.com/wp-content/uploads/2021/06/main-banner-01.jpg",
    },
    {
      id: 4,
      slug: "best-turf-for-football",
      title: "Choosing the Best Turf for Football Fields",
      excerpt:
        "Find out the key factors in selecting the perfect artificial turf for football stadiums.",
      image:
        "https://www.sporteeno.com/wp-content/uploads/2021/06/main-banner-01.jpg",
    },
    {
      id: 5,
      slug: "eco-friendly-turf-options",
      title: "Eco-Friendly Turf: Sustainable Choices for Sports",
      excerpt:
        "Explore environmentally friendly artificial turf solutions that balance performance and sustainability.",
      image:
        "https://www.sporteeno.com/wp-content/uploads/2021/06/main-banner-01.jpg",
    },
  ];

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <section className="flex flex-col items-center min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28 mt-20">
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
          {blogs.map((blog) => (
            <AnimatedCard key={blog.id}>
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
            <div className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {awards.map((image, index) => (
                <AnimateCard key={index}>
                  <div
                    key={index}
                    className="border border-gray-50/10 p-1 transform transition duration-500 ease-in-out hover:scale-105"
                  >
                    <div className="w-full shadow-md overflow-hidden bg-yellow-100/20 flex items-center justify-center">
                      <img
                        src={image.icon} // Replace with actual paths
                        alt={`image ${index + 1}`}
                        className="w-32 h-28 object-cover"
                      />
                    </div>
                    <p className="text-lg flex md:text-lg lg:text-lg p-4  font-primary   leading-tight text-wrap  items-center  justify-center text-secondary uppercase text-center ">
                      {image.title}
                    </p>
                  </div>
                </AnimateCard>
              ))}
            </div>
          </div>
        </div>
        <WhatsAppButton />
        <Footer />
      </section>
    </>
  );
};

export default BlogPage;
