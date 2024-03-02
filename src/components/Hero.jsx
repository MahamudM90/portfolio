import React from "react";
import hero from "../assets/images/hero.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

const Hero = () => {
 
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-10/12 h-full object-cover" />
      </div>
      <div className="flex-1">
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
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5"> 
          <div className=" text-gray-600 hover:text-white cursor-pointer">
            <Link to='https://www.instagram.com/mahamud_m90/?fbclid=IwAR14knCKIBevSQNcVVPDs6NF7hM19fitCaW5kpzyIOZ3Xtpb_nAdSYqW8O8'><FaInstagramSquare /></Link>
            </div>
            <div className=" text-gray-600 hover:text-white cursor-pointer">
             <Link to='https://www.linkedin.com/in/mahamudm90/'><FaLinkedin /></Link> 
             </div>
             <div className=" text-gray-600 hover:text-white cursor-pointer">
            <Link to='https://github.com/MahamudM90'><FaGithub /></Link>  
            </div>
            <div className=" text-gray-600 hover:text-white cursor-pointer">
            <Link to='https://web.facebook.com/mdmahamud.mdmahamud.980'><FaFacebook /></Link>  
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
