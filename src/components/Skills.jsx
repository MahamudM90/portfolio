import React, { useEffect, useState, useRef } from "react";

const Skills = () => {
  const skills = [
    { logo: "logo-javascript", level: "Intermediate", count: 80 },
    { logo: "logo-css3", level: "Expert", count: 90 },
    { logo: "logo-react", level: "Intermediate", count: 60 },
    { logo: "logo-nodejs", level: "Beginner", count: 50 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [animatedCounts, setAnimatedCounts] = useState(
    skills.map(() => 0) // Initialize all counts to 0
  );
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimatedCounts((prevCounts) =>
          prevCounts.map((val, index) =>
            val < skills[index].count ? val + 1 : val
          )
        );
      }, 30); // Speed of the count animation

      setTimeout(() => clearInterval(interval), 3000); // Stop counting after 3s
    }
  }, [isVisible]);

  return (
    <section id="skills" ref={sectionRef} className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl transition-transform duration-[3000ms] ease-out ${
                isVisible
                  ? i % 2 === 0
                    ? "translate-x-0 opacity-100"
                    : "translate-x-0 opacity-100"
                  : i % 2 === 0
                  ? "-translate-x-20 opacity-0"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3 font-bold text-cyan-400">
                {animatedCounts[i]}%
              </p>
              <p className="text-lg mt-1 text-gray-300">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
