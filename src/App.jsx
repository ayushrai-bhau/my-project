import React, { useEffect, useState } from "react";
import AOS from "aos"; // Add AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBriefcase,
  faBullhorn,
  faTrophy,
  faLayerGroup,
  faBookOpen,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/uiuxlogo.png";
import Img1 from "./assets/Img-1.jpg";
import Img2 from "./assets/Img-2.jpg";
import Img3 from "./assets/Img-3.jpg";
import Img4 from "./assets/UiuxPic.jpg";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-6 fixed w-full bg-white bg-opacity-90 shadow-md z-10 transition duration-300 ease-in-out">
  <div className="container mx-auto flex justify-between items-center">
    {/* Brand logo and name */}
    <div className="flex items-center">
      <img
        src={Logo}
        alt="Brand Logo"
        className="h-12 w-12 mr-3 animate-bounce"
      />
      <h1 className="text-xl font-semibold text-gray-800">UI/UXclub</h1>
    </div>
    {/* Hamburger Menu Button for Mobile */}
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="focus:outline-none hover:text-blue-500 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="text-2xl text-gray-700"
        />
      </button>
    </div>
    {/* Navigation Links for larger screens */}
    <ul className="hidden md:flex space-x-8 text-gray-700">
      <li>
        <a
          href="#about"
          className="hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#features"
          className="hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
        >
          Features
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
        >
          Contact Us
        </a>
      </li>
    </ul>
  </div>
</nav>


      {/* Mobile Menu - Fullscreen Overlay with Close Icon */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 z-30 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Icon Inside Menu */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <ul className="space-y-8 text-center text-white text-2xl">
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-300 transition duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-300 transition duration-200"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-300 transition duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section
  id="hero"
  className="flex-1 flex flex-col justify-center items-center text-center pt-32 bg-gradient-to-b from-blue-600 to-blue-400 min-h-[60vh]"
>
  {/* Content */}
  <div
    className="space-y-6 px-4 flex flex-col items-center"
    data-aos="fade-up"
  >
    <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
      Elevate Your <span className="text-yellow-400">UI/UX Career</span>{" "}
      with <span className="text-white">uiuxclub</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
      Join the largest UI/UX community and unlock exclusive content,
      networking opportunities, and career growth tools.
    </p>
    <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300">
      Start Your Membership Today
    </button>
  </div>
</section>


      {/* About Us Section */}

{/* About Us Section */}
<section id="about" className="py-20 bg-white" data-aos="fade-up">
  <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
    {/* Logo Image on the left */}
    <div className="md:w-1/3 flex justify-center md:justify-start">
      <img
        src={Img4}
        alt="UI/UX Club Logo"
        className="h-48 w-48 object-cover rounded-lg shadow-lg"
      />
    </div>
    {/* About Us Text on the right */}
    <div className="md:w-2/3 text-left">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        About Us
      </h2>
      <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
        uiuxclub is a thriving community built for UI/UX professionals,
        whether you're an experienced designer or just starting. Our
        platform offers a supportive space for growth, learning, and
        collaboration. With workshops, webinars, and access to exclusive job
        listings, uiuxclub helps you stay updated and connected with
        industry leaders. Members can showcase their work, participate in
        design challenges, and get feedback from peers. Our vast library of
        learning resources includes articles and tutorials, making it easy
        to stay current on the latest design trends. Join uiuxclub to
        elevate your UI/UX career.
      </p>
    </div>
  </div>
</section>





      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: faUsers,
              title: "Vibrant Community",
              text: "Engage with fellow designers, share insights, and collaborate in our forums.",
            },
            {
              icon: faBriefcase,
              title: "Meetups & Workshops",
              text: "Expand your network and learn from industry leaders in real-world and online events.",
            },
            {
              icon: faBullhorn,
              title: "Showcase Your Designs",
              text: "Get feedback, showcase your best work, and gain inspiration from peers.",
            },
            {
              icon: faTrophy,
              title: "Career Opportunities",
              text: "Access exclusive job listings, internships, and freelance opportunities.",
            },
            {
              icon: faLayerGroup,
              title: "Design Contests",
              text: "Participate in contests and build your portfolio with real projects.",
            },
            {
              icon: faBookOpen,
              title: "Learning Resources",
              text: "Curated resources to help you stay ahead, including webinars, articles, and more.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-blue-500 text-4xl mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: Img1,
                name: "Sarah L.",
                text: "uiuxclub.com has been a game-changer for my design career!",
              },
              {
                img: Img2,
                name: "Mike T.",
                text: "As a newcomer, this platform provided the support I needed to grow.",
              },
              {
                img: Img3,
                name: "Rachel K.",
                text: "The design contests keep me engaged and constantly learning.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md"
                data-aos="zoom-in"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 animate-fadeIn"
                />
                <p className="italic text-gray-600">"{testimonial.text}"</p>
                <p className="mt-4 font-bold text-gray-700">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have questions or need help? Get in touch with our team, and we’ll
            get back to you as soon as possible.
          </p>
          <div className="flex justify-center">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md shadow-lg transition transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 p-6 text-center text-gray-400">
  <div className="container mx-auto">
    <ul className="flex flex-col sm:flex-row justify-center flex-wrap space-y-4 sm:space-y-0 sm:space-x-8 mb-4">
      <li>
        <a href="#about" className="hover:text-white">
          About Us
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-white">
          Terms of Service
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-white">
          Blog
        </a>
      </li>
    </ul>
    <p className="text-sm sm:text-base">© 2024 uiuxclub.com. All rights reserved.</p>
  </div>
</footer>


    </div>
  );
};

export default App;
