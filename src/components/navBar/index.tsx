// import React, { useState, useEffect, useRef } from "react";
// import { FaChevronDown, FaRegEnvelope } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import HamburgerMenu from "./hamburgar";
// import MenuDrawer from "./menuDrawer";
// import { useCarousel } from "@/hook/useCarousel";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuClick, setIsMenuClick] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<string | null>(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const { queryClient, getCarousels } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//     phoneUrl: string;
//   }[];

//   if (!data || !data?.length) getCarousels?.refetch();

//   // Set initial active tab based on location hash or pathname
//   useEffect(() => {
//     if (location.pathname === "/") {
//       setActiveTab(location.hash || "#home");
//     } else {
//       setActiveTab(location.pathname);
//     }
//   }, [location.pathname, location.hash]);

//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   const isClicked = () => {
//     setIsMenuClick((old) => !old);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleNavClick = (path: string) => {
//     if (path.startsWith("#")) {
//       if (location.pathname !== "/") {
//         // If not on the home page, navigate to it first
//         navigate("/", { replace: true });
//         setTimeout(() => {
//           const section = document.querySelector(path);
//           if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//           }
//           setActiveTab(path); // Set the active tab only for the clicked section
//         }, 100); // Delay to ensure the page has loaded
//       } else {
//         // Scroll directly if already on the home page
//         const section = document.querySelector(path);
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//         setActiveTab(path);
//       }
//     } else {
//       // External route navigation
//       navigate(path);
//       setActiveTab(path);
//     }

//     // Close dropdown or menu after navigation
//     setIsDropdownOpen(false);
//     setIsMenuClick(false);
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${
//         scrolled && !isMenuClick
//           ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
//           : `h-[15%] ${isMenuClick ? "bg-primary" : "bg-transparent"}`
//       }
//       flex items-center justify-center  lg:px-[5rem] xl:px-[20rem]`}
//     >
//       <div className="flex  absolute px-9 md:px-10 lg:px-5 xl:px-20 items-center w-full h-full">
//         <div className="w-[30%] lg:w-[20%] h-full">
//           <a
//             href="#home"
//             className="w-full h-full flex justify-center items-center"
//             onClick={() => handleNavClick("#home")}
//           >
//             <img src="/game_on_logo.webp" alt="Logo" className="w-full" />
//           </a>
//         </div>

//         <div className="hidden bg-[#181817] w-[70%] lg:w-[90%] md:bg-transparent lg:flex h-full items-center justify-center transition-all duration-500 ease-out">
//           {!isMenuClick ? (
//             <ul className="flex flex-col items-center justify-center w-full gap-8 md:gap-6 lg:gap-10 xl:gap-12 text-white md:flex-row md:w-auto font-secondary">
//               {[
//                 { path: "#home", label: "Home" },
//                 // { path: "#aboutUs", label: "About" },
//                 // { path: "#services", label: "Services" },
//                 { path: "#contact", label: "Contact" },
//                 { path: "/blog", label: "Blogs" },
//                 // { path: "/portfolio", label: "Portfolio" },
//                 { path: "/news", label: "News" },
//                 { path: "/testimonials", label: "Testimonials" },
//                 // { path: "/products", label: "Products" },
//                 // { path: "/turf-calculator", label: "Turf Calculator" },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <button
//                     className={`font-medium uppercase ${
//                       activeTab === item.path
//                         ? "text-secondary"
//                         : "text-[#D2D2D0]"
//                     } transition-all hover:text-secondary`}
//                     onClick={() => handleNavClick(item.path)}
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//               <li className="relative">
//                 <button
//                   className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
//                     isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                   } transition-all hover:text-secondary`}
//                   onClick={() => setIsDropdownOpen((prev) => !prev)}
//                 >
//                   Services
//                   <FaChevronDown className="ml-1" />
//                 </button>
//                 {isDropdownOpen && (
//                   <motion.div
//                     ref={dropdownRef}
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-gray-400/70 rounded-md shadow-lg z-50"
//                   >
//                     <ul className="flex flex-col">
//                       {[
//                         //360-circle-turf
//                         { path: "/football-turf", label: "Football Turf" },
//                         { path: "/pickleball-court", label: "Pickle Ball" },
//                         // {
//                         //   path: "/circle-turf",
//                         //   label: "Mini Cricket Stadium",
//                         // },

//                         { path: "/cricket-turf", label: "Cricket Nets" },
//                         { path: "/indoor-turf", label: "Indoor Turf" },
//                         { path: "/volleyball-turf", label: "Volleyball Court" },
//                         {
//                           path: "/multi-sports-turf",
//                           label: "MultiSports Turf",
//                         },
//                         { path: "/basket-ball", label: "Basket Ball Court" },
//                         { path: "/badminton-court", label: "Badminton Court" },
//                         { path: "/360-circle-turf", label: "360 Circle Turf" },
//                         {
//                           path: "/aqua-eco-friendly-turf",
//                           label: "Aqua-Themed Turf",
//                         },
//                       ].map((item) => (
//                         <li key={item.label}>
//                           <button
//                             className="block px-4 w-full py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                             onClick={() => {
//                               setIsDropdownOpen(false);
//                               handleNavClick(item.path);
//                             }}
//                           >
//                             {item.label}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </li>
//             </ul>
//           ) : null}
//         </div>

//         <div className="flex gap-7  h-full w-[70%] lg:w-[10%] lg:hidden justify-end items-center">
//           <FaRegEnvelope
//             onClick={() => navigate("/contact")}
//             className="text-xl md:text-2xl text-[#D2D2D0] cursor-pointer"
//           />
//           <HamburgerMenu isClicked={isClicked} isOpen={isMenuClick} />
//         </div>
//         <div
//           className="hidden  gap-7 h-full w-[50%] md:w-[70%] lg:flex lg:w-[10%] justify-center cursor-pointer items-center"
//           // onClick={() => navigate("/contact")}
//         >
//           <FaRegEnvelope
//             onClick={() => navigate("/contact")}
//             className="text-xl md:text-2xl text-[#D2D2D0]"
//           />
//         </div>
//       </div>
//       {isMenuClick && (
//         <div className="fixed inset-y-24 md:inset-y-32 w-full  h-full bg-primary z-[1000] transition-all duration-500 animate-zoomIn">
//           <MenuDrawer isCloseMenu={() => setIsMenuClick(false)} />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// New Code after Product Page

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaRegEnvelope } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HamburgerMenu from "./hamburgar";
import MenuDrawer from "./menuDrawer";
import { useCarousel } from "@/hook/useCarousel";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuClick, setIsMenuClick] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);

  const { queryClient, getCarousels } = useCarousel();
  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
    phoneUrl: string;
  }[];

  if (!data || !data?.length) getCarousels?.refetch();

  // Set initial active tab
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab(location.hash || "#home");
    } else {
      setActiveTab(location.pathname);
    }
  }, [location.pathname, location.hash]);

  const handleScroll = () => setScrolled(window.scrollY > 50);

  const isClicked = () => setIsMenuClick((old) => !old);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => {
          const section = document.querySelector(path);
          if (section) section.scrollIntoView({ behavior: "smooth" });
          setActiveTab(path);
        }, 100);
      } else {
        const section = document.querySelector(path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setActiveTab(path);
      }
    } else {
      navigate(path);
      setActiveTab(path);
    }

    // Close dropdowns and menu after navigation
    setIsServicesOpen(false);
    setIsProductsOpen(false);
    setIsMenuClick(false);
  };

  // Dropdown Toggle Handlers
  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsProductsOpen(false); // Close products when opening services
  };

  const toggleProducts = () => {
    setIsProductsOpen((prev) => !prev);
    setIsServicesOpen(false); // Close services when opening products
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
      ${
        scrolled && !isMenuClick
          ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
          : `h-[15%] ${isMenuClick ? "bg-primary" : "bg-transparent"}`
      } 
      flex items-center justify-center  lg:px-[5rem] xl:px-[20rem]`}
    >
      <div className="flex absolute px-9 md:px-10 lg:px-5 xl:px-20 items-center w-full h-full">
        {/* Logo */}
        <div className="w-[30%] lg:w-[20%] h-full">
          <a
            href="#home"
            className="w-full h-full flex justify-center items-center"
            onClick={() => handleNavClick("#home")}
          >
            <img src="/game_on_logo.webp" alt="Logo" className="w-full" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden bg-[#181817] w-[70%] lg:w-[90%] md:bg-transparent lg:flex h-full items-center justify-center transition-all duration-500 ease-out">
          {!isMenuClick ? (
            <ul className="flex flex-col items-center justify-center w-full gap-8 md:gap-6 lg:gap-10 xl:gap-12 text-white md:flex-row md:w-auto font-secondary">
              {[
                { path: "#home", label: "Home" },
                // { path: "#contact", label: "Contact" },
                { path: "/blog", label: "Blogs" },
                { path: "/news", label: "News" },
                { path: "/testimonials", label: "Testimonials" },
                { path: "/projects", label: "Projects" },
                { path: "/turf-calculator", label: "Turf Calculator" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    className={`font-medium uppercase ${
                      activeTab === item.path
                        ? "text-secondary"
                        : "text-[#D2D2D0]"
                    } transition-all hover:text-secondary`}
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Services Dropdown */}
              <li className="relative">
                <div ref={servicesRef}>
                  <button
                    className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
                      isServicesOpen ? "text-secondary" : "text-[#D2D2D0]"
                    } transition-all hover:text-secondary`}
                    onClick={toggleServices}
                  >
                    Services
                    <FaChevronDown className="ml-1" />
                  </button>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-gray-400/70 rounded-md shadow-lg z-50"
                    >
                      <ul className="flex flex-col">
                        {[
                          { path: "/football-turf", label: "Football Turf" },
                          { path: "/pickleball-court", label: "Pickleball" },
                          {
                            path: "/360-circle-turf",
                            label: "360 Circle Turf",
                          },
                          { path: "/cricket-turf", label: "Cricket Nets" },
                          { path: "/indoor-turf", label: "Indoor Turf" },
                          {
                            path: "/volleyball-turf",
                            label: "Volleyball Court",
                          },
                          {
                            path: "/multi-sports-turf",
                            label: "MultiSports Turf",
                          },
                          { path: "/basket-ball", label: "Basket Ball Court" },
                          {
                            path: "/badminton-court",
                            label: "Badminton Court",
                          },

                          {
                            path: "/aqua-eco-friendly-turf",
                            label: "Aqua Eco Friendly Turf",
                          },
                        ].map((item) => (
                          <li key={item.label}>
                            <button
                              className="block px-4 w-full py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
                              onClick={() => handleNavClick(item.path)}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </li>

              {/* Products Dropdown */}
              <li className="relative">
                <div ref={productsRef}>
                  <button
                    className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
                      isProductsOpen ? "text-secondary" : "text-[#D2D2D0]"
                    } transition-all hover:text-secondary`}
                    onClick={toggleProducts}
                  >
                    Products
                    <FaChevronDown className="ml-1" />
                  </button>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-gray-400/70 rounded-md shadow-lg z-50"
                    >
                      <ul className="flex flex-col">
                        {[
                          {
                            path: "/products/eco-friendly",
                            label: "Eco Friendly",
                          },
                          {
                            path: "/products/aqua-eco-friendly",
                            label: "Aqua Eco Friendly",
                          },
                          { path: "/products/360-turf", label: "360 Turf" },
                          {
                            path: "/products/u-shape-turf",
                            label: "U Shape Turf",
                          },
                          { path: "/products/oval-turf", label: "Oval Turf" },
                          {
                            path: "/products/skating-rink",
                            label: "Skating Rink",
                          },
                          {
                            path: "/products/semi-circle-turf",
                            label: "Semi Circle Turf",
                          },
                          {
                            path: "/products/diagonal-pitch",
                            label: "Diagonal Pitch",
                          },
                        ].map((item) => (
                          <li key={item.label}>
                            <button
                              className="block px-4 w-full py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
                              onClick={() => handleNavClick(item.path)}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </li>
            </ul>
          ) : null}
        </div>

        {/* Mobile Icons */}
        <div className="flex gap-7 h-full w-[70%] lg:w-[10%] lg:hidden justify-end items-center">
          <FaRegEnvelope
            onClick={() => navigate("/contact")}
            className="text-xl md:text-2xl text-[#D2D2D0] cursor-pointer"
          />
          <HamburgerMenu isClicked={isClicked} isOpen={isMenuClick} />
        </div>
        <div className="hidden gap-7 h-full w-[50%] md:w-[70%] lg:flex lg:w-[10%] justify-center cursor-pointer items-center">
          <FaRegEnvelope
            onClick={() => navigate("/contact")}
            className="text-xl md:text-2xl text-[#D2D2D0]"
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuClick && (
        <div className="fixed inset-y-24 md:inset-y-32 w-full h-full bg-primary z-[1000] transition-all duration-500 animate-zoomIn">
          <MenuDrawer isCloseMenu={() => setIsMenuClick(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
