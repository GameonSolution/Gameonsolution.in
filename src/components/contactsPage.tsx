import { useCantacts } from "@/hook/useContact";
import { useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegCommentAlt } from "react-icons/fa";
import { Footer } from "./Footer";
interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
  location: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
  location?: string;
}
export const ContactsPage = () => {
  const { createContact } = useCantacts();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    location: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    const phoneRegex = /^(\+?\d{1,2})?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;
    if (!formData.location?.trim()) newErrors.location = "Location is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      await createContact.mutateAsync({ ...formData }).then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          location: "",
        });
        setErrors({});
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="flex relative flex-col justify-center select-none items-center min-h-screen w-full pt-32 px-10 lg:px-48 pb-16">
        <div className="w-full h-full flex flex-col pt-10 lg:pt-20 gap-5 lg:gap-10">
          <div className="flex justify-center items-center p-2">
            <p className="font-secondary uppercase font-medium tracking-[1.5px] text-[12px]">
              Home / <span className="text-secondary">Contacts</span>
            </p>
          </div>
          <div className="flex justify-center items-center p-2 w-full">
            <p className="font-primary uppercase font-medium tracking-[1.5px] text-4xl md:text-6xl lg:text-8xl">
              Get in <span className="text-secondary">Touch</span>
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col pt-10 lg:pt-20 gap-10 lg:gap-24">
          <div className="flex flex-col md:flex-row md:justify-between gap-16 md:px-6">
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-7">
              <AiOutlineMobile className="text-6xl md:text-7xl lg:text-8xl opacity-60" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-xl md:text-2xl text-white">
                  Call
                </p>
                <p className="flex flex-col xl:flex-row tracking-[1.5px] justify-center items-center gap-1 font-secondary uppercase text-xs font-medium text-white">
                  Office :{" "}
                  <span className="flex flex-col xl:flex-row justify-center items-center gap-1.5">
                    <span className="tracking-[1.5px]">+91 9615737373</span>
                    <span>(or)</span>
                    <span className="tracking-[1.5px]">+91 9715131313</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-7">
              <FaRegCommentAlt className="text-6xl md:text-7xl lg:text-8xl opacity-60" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-xl md:text-2xl text-white">
                  Write
                </p>
                <p className="font-secondary uppercase text-xs font-medium text-white tracking-[1.5px]">
                  sales@gameonsolution.in
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-7">
              <FaMapMarkerAlt className="text-6xl md:text-7xl lg:text-8xl opacity-60" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-2xl text-white">
                  Visit
                </p>
                <p className="font-secondary tracking-[1.5px] uppercase text-center text-xs font-medium text-white">
                  Hanifa Nagar, NGO Colony, Dindigul, Tamil Nadu 624005
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-10">
            <div className="w-full flex flex-col justify-center items-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-primary uppercase">
                Let's <span className="text-secondary">Talk</span>
              </p>
              <form
                onSubmit={handleSubmit}
                className="py-10 w-full flex flex-col gap-8"
              >
                <div className="flex md:flex-row flex-col gap-10">
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-b-2 text-xs border-gray-300/60 w-full p-5 text-white uppercase font-secondary font-medium placeholder:opacity-65 focus:border-yellow-600"
                      placeholder="What's your name"
                    />
                    {errors.name && !formData.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-b-2 text-xs border-gray-300/60 w-full p-5 text-white uppercase font-secondary font-medium placeholder:opacity-65 focus:border-yellow-600"
                      placeholder="Your Email"
                    />
                    {errors.email && !formData.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      type="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-transparent border-b-2 text-xs border-gray-300/60 w-full p-5 text-white uppercase font-secondary font-medium placeholder:opacity-65 focus:border-yellow-600"
                      placeholder="Your Phone"
                    />
                    {errors.phone && !formData.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      type="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="bg-transparent border-b-2 text-xs border-gray-300/60 w-full p-5 text-white uppercase font-secondary font-medium placeholder:opacity-65 focus:border-yellow-600"
                      placeholder="Your location"
                    />
                    {errors.location && !formData.location && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col  w-full">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-gray-300/60 w-full text-xs p-5 text-white uppercase font-secondary font-medium placeholder:opacity-65 focus:border-yellow-600 min-h-48 max-h-48"
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && !formData.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-5 md:flex-row md:items-center">
                  <p className="text-sm font-normal font-secondary md:w-1/2">
                    *We promise not to disclose your personal information to
                    third parties.
                  </p>
                  <div className="w-full flex justify-center md:justify-end">
                    <button
                      type="submit"
                      className="py-5 px-12 border border-yellow-500 rounded-full bg-secondary text-white  hover:border-yellow-600 hover:scale-105 transition-transform duration-500 ease-in-out"
                    >
                      {createContact.isPending ? "Loading.." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full flex flex-col gap-10">
              <div>
                <p className="font-primary uppercase text-xl md:text-2xl text-white">
                  Head Office Dindigul
                </p>

                <div className="bg-white w-full lg:w-1/2 flex">
                  <div
                    style={{
                      position: "relative",
                      textAlign: "right",
                      width: "100%",
                      height: "250px", // Default height for mobile
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        background: "none",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <iframe
                        title="Google Map"
                        style={{
                          width: "100%", // Responsive width
                          height: "100%", // Responsive height
                          border: "0",
                        }}
                        src="https://www.google.com/maps/embed/v1/place?q=Game+ON+·+Dindigul,+Tamil+Nadu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      />
                    </div>

                    {/* Inline media queries as an alternative */}
                    <style>
                      {`
                   @media (min-width: 640px) {
                     div[style*="relative"] {
                       height: 350px; /* Height for tablets */
                     }
                   }
                   @media (min-width: 1024px) {
                     div[style*="relative"] {
                       height: 450px; /* Height for desktops */
                     }
                   }
                 `}
                    </style>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-primary uppercase text-xl md:text-2xl text-white">
                  Head Office Chennai
                </p>
                <div className="bg-white w-full lg:w-1/2 flex">
                  <div
                    style={{
                      position: "relative",
                      textAlign: "right",
                      width: "100%",
                      height: "250px", // Default height for mobile
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        background: "none",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <iframe
                        title="Google Map"
                        style={{
                          width: "100%", // Responsive width
                          height: "100%", // Responsive height
                          border: "0",
                        }}
                        src="https://www.google.com/maps/embed/v1/place?q=GameOn+Solution+-+South+India’s+leading+Sports+infra+developers+·+Chennai,+Tamil+Nadu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      />
                    </div>

                    {/* Inline media queries as an alternative */}
                    <style>
                      {`
                    @media (min-width: 640px) {
                      div[style*="relative"] {
                        height: 350px; /* Height for tablets */
                      }
                    }
                    @media (min-width: 1024px) {
                      div[style*="relative"] {
                        height: 450px; /* Height for desktops */
                      }
                    }
                  `}
                    </style>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-primary uppercase text-xl md:text-2xl text-white">
                  Bangalore Office
                </p>
                <div className="bg-white w-full lg:w-1/2 flex">
                  <div
                    style={{
                      position: "relative",
                      textAlign: "right",
                      width: "100%",
                      height: "250px", // Default height for mobile
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        background: "none",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <iframe
                        title="Google Map"
                        style={{
                          width: "100%", // Responsive width
                          height: "100%", // Responsive height
                          border: "0",
                        }}
                        src="https://www.google.com/maps/embed/v1/place?q=Ennar+Eminence+Aradhana+Apartments+·+Bengaluru,+Karnataka&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      />
                    </div>

                    {/* Inline media queries as an alternative */}
                    <style>
                      {`
                    @media (min-width: 640px) {
                      div[style*="relative"] {
                        height: 350px; /* Height for tablets */
                      }
                    }
                    @media (min-width: 1024px) {
                      div[style*="relative"] {
                        height: 450px; /* Height for desktops */
                      }
                    }
                  `}
                    </style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
