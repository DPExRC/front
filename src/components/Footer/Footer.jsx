import React from "react";
import './Footer.css';
import { FaInstagram, FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';

const ItemsContainer = () => {
  return (
    <div className="footer-list flex justify-center space-x-4 mb-4">
      <div className="m-2 p-2 bg-gray-800 text-white rounded-lg">Item 1</div>
      <div className="m-2 p-2 bg-gray-800 text-white rounded-lg">Item 2</div>
      <div className="m-2 p-2 bg-gray-800 text-white rounded-lg">Item 3</div>
    </div>
  );
};

// Modificamos SocialIcons para incluir enlaces en los íconos
const SocialIcons = ({ icons }) => {
  return (
    <div className="flex justify-center space-x-4">
      {icons.map(({ icon: Icon, link }, index) => (
        <a 
          key={index} 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-5 h-5 text-gray-400 hover:text-teal-400"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  // Definimos los íconos y sus enlaces
  const icons = [
    { icon: FaInstagram, link: "https://www.instagram.com/jsidodkodoskdkdoododkdkdiidkdk" },
    { icon: FaGithub, link: "https://github.com/DPExRC" },
    { icon: FaEnvelope, link: "mailto:david.raimilla2003@gmail.com" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/david-raimilla/"}
  ];

  return (
    <footer className="footer-container bg-gray-900 text-white py-8">
      <div className="footer-header text-center mb-6">
        <h1 className="lg:text-4xl text-3xl font-semibold"></h1>
      </div>
      
      <ItemsContainer />
      
      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm pb-4 pt-4">
        <span>© 2020 David Raimilla. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons icons={icons} />
      </div>
    </footer>
  );
};

export default Footer;
