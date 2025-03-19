import React, { useEffect, useState } from "react";
import aboutImg from "../assets/images/about.png";

const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "02" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          {/* Left Side - Text */}
          <div
            className={`p-2 md:w-1/2 transition-all duration-[3000ms] ease-in-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                As a front-end developer, I have a strong understanding of HTML, CSS, and JavaScript, as well as experience with front-end frameworks
                such as React & Next.js. I am well-versed in responsive design and have experience creating visually appealing and user-friendly websites and web
                applications. I am a quick learner and am eager to continue developing my skills in the field.
              </p>

              {/* Statistics */}
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>

              {/* Download CV Button */}
              <div className="mt-8">
                <a href="/mahamud-resume.pdf" download>
                  <button className="btn-primary transition-transform duration-300 hover:-translate-y-1 hover:scale-110">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`flex-1 md:mt-0 mt-6 flex justify-center items-center md:w-1/2 transition-all duration-[3000ms] ease-in-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <img
                src={aboutImg}
                alt="About Me"
                className="w-full object-cover bg-cyan-600 rounded-xl transition-transform duration-[3000ms] ease-in-out hover:skew-y-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
