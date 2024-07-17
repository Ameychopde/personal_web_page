import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaVoicemail } from "react-icons/fa6";
import Button from './ui/Button';
import MagicButton from './ui/Button';
const Footer = () => {
    const socialMedia = [
        {
          id: 1,
          img: <FaVoicemail href='amey.chopde27@gmail.com'></FaVoicemail>,
        },
        {
          id: 2,
          img: <FaLinkedin   > <a href="https://www.linkedin.com/in/amey-chopde-624556211/"></a></FaLinkedin>,
        },
        {
          id: 3,
          img: <FaGithub href='https://github.com/Ameychopde'></FaGithub>,
        },
    ]
  return (
    <footer className=" pt-20 relative" id="contact">
    {/* background grid */}
   

    <div id='contact' className="flex flex-col items-center">
      <h1 className="relative text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
      Unlock Your Digital Potential
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-center">
      Let's Collaborate and Achieve Greatness Together!
      </p>
      
   
    <a  href="https://www.linkedin.com/in/amey-chopde-624556211/">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
    <div className="flex mt-16 md:flex-col justify-between items-center">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Amey Chopde
      </p>
      </div>

      {/* <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
           {info.img} 
          </div>
        ))}
      </div> */}
      
    </div>
  </footer>
);
  
}

export default Footer
