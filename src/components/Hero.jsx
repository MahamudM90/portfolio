import React, { useEffect, useState, useRef } from "react";
import hero from "../assets/images/hero.png";
import { FaInstagramSquare, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      {/* Left Side - Image */}
      <div
        className={`flex-1 flex items-center justify-center h-full transition-transform duration-[3000ms] ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        <img src={hero} alt="Hero" className="md:w-10/12 h-full object-cover" />
      </div>

      {/* Right Side - Text */}
      <div
        className={`flex-1 transition-transform duration-[3000ms] ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hey!
              <br />
            </span>
            I am <span>Mahamud</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Software Engineer | Front-End Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>

          {/* Social Media Links */}
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <Link to="https://www.instagram.com/mahamud_m90/">
                <FaInstagramSquare />
              </Link>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <Link to="https://www.linkedin.com/in/mahamudm90/">
                <FaLinkedin />
              </Link>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <Link to="https://github.com/MahamudM90">
                <FaGithub />
              </Link>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer">
              <Link to="https://web.facebook.com/mdmahamud.mdmahamud.980">
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
