import { FaGithub, FaLinkedin, FaTwitter,FaRegEnvelope  } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8">
    <div className="container mx-auto px-6 lg:px-12 text-center">
      {/* Social Icons Section */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/Chamindu24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-indigo-500 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/chamindu-sathsara-95a2402a3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-indigo-500 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-indigo-500 transition-all duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:chamindus.22@cse.mrt.ac.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-indigo-500 transition-all duration-300"
        >
          <FaRegEnvelope />
        </a>
      </div>

      {/* Copyright Section */}
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Chamindu Sathsara.  All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
