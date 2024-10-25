import React, { useEffect } from 'react';
import AOS from 'aos'; // Add AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBriefcase, faBullhorn, faTrophy, faLayerGroup, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Logo from './assets/uiuxlogo.png';
import Img1 from './assets/Img-1.jpg';
import Img2 from './assets/Img-2.jpg';
import Img3 from './assets/Img-3.jpg';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-6 fixed w-full bg-white shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand logo and name */}
          <div className="flex items-center">
            <img src={Logo} alt="Brand Logo" className="h-12 w-12 mr-3 animate-bounce" />
            <h1 className="text-xl font-semibold text-gray-800">uiuxclub.com</h1>
          </div>
          <ul className="flex space-x-8 text-gray-700">
            <li><a href="#about" className="hover:text-blue-500 transition duration-200">About Us</a></li>
            <li><a href="#features" className="hover:text-blue-500 transition duration-200">Features</a></li>
            <li><a href="#join" className="hover:text-blue-500 transition duration-200">Join</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex-1 flex items-center justify-center text-center pt-24 bg-gradient-to-b from-blue-500 to-blue-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full filter blur-3xl"></div>
        <div className="space-y-4 z-10" data-aos="fade-up">
          <h2 className="text-6xl font-extrabold text-white animate-pulse">
            Elevate Your UI/UX Career with <span className="text-yellow-300">uiuxclub.com</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Join the largest UI/UX community and unlock exclusive content, networking opportunities, and career growth tools.
          </p>
          <button className="mt-6 bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            Start Your Membership Today
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h2>
          <p className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
            uiuxclub.com is a vibrant ecosystem designed for UI/UX professionals. Whether you're a seasoned expert or just starting, our platform provides a space for growth, learning, and collaboration.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { icon: faUsers, title: "Vibrant Community", text: "Engage with fellow designers, share insights, and collaborate in our forums." },
            { icon: faBriefcase, title: "Meetups & Workshops", text: "Expand your network and learn from industry leaders in real-world and online events." },
            { icon: faBullhorn, title: "Showcase Your Designs", text: "Get feedback, showcase your best work, and gain inspiration from peers." },
            { icon: faTrophy, title: "Career Opportunities", text: "Access exclusive job listings, internships, and freelance opportunities." },
            { icon: faLayerGroup, title: "Design Contests", text: "Participate in contests and build your portfolio with real projects." },
            { icon: faBookOpen, title: "Learning Resources", text: "Curated resources to help you stay ahead, including webinars, articles, and more." }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up">
              <FontAwesomeIcon icon={feature.icon} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: Img1, name: "Sarah L.", text: "uiuxclub.com has been a game-changer for my design career!" },
              { img: Img2, name: "Mike T.", text: "As a newcomer, this platform provided the support I needed to grow." },
              { img: Img3, name: "Rachel K.", text: "The design contests keep me engaged and constantly learning." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="zoom-in">
                <img src={testimonial.img} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 animate-fadeIn" />
                <p className="italic text-gray-600">"{testimonial.text}"</p>
                <p className="mt-4 font-bold text-gray-700">{testimonial.name}</p>
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
            Have questions or need help? Get in touch with our team, and we’ll get back to you as soon as possible.
          </p>
          <div className="flex justify-center">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4" placeholder="Your Message"></textarea>
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
          <ul className="flex justify-center space-x-8 mb-4">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
          <p>© 2024 uiuxclub.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;