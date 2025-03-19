import React, { useEffect, useState } from "react";
import hireMe from "../assets/images/hireMe.png";

const Hireme = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3}
    );

    const section = document.getElementById("hireme");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>

      {/* Animated Container */}
      <div
        className={`bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center
        transition-transform duration-[3000ms] ease-in-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Left Side Text */}
        <div>
          <h2 className="text-2xl font-semibold">Do you want any work from me?</h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I'm a front-end developer who turns caffeine into code.☕️
            <br />
            I'm well-versed in languages such as JavaScript, React, and Redux.
            <br />
            My passion lies in crafting interactive Web Experiences and User Interfaces and also in exploring the realms of Next.js and Material UI.
            <br />
            Whenever I can, I channel my enthusiasm for frontend development with Modern UI Frameworks and Libraries like Tailwind CSS and React.js to bring designs to life.
          </p>
          <button className="btn-primary mt-10 transition-transform duration-500 hover:scale-105">
            Say Hello
          </button>
        </div>

        {/* Right Side Image */}
        <img
          src={hireMe}
          alt="Hire Me"
          className="lg:h-[26rem] h-80 lg:absolute bottom-0 -right-3 object-cover transition-transform duration-500 ease-in-out hover:skew-y-3"
        />
      </div>
    </section>
  );
};

export default Hireme;
