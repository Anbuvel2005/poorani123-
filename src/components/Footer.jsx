import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-blue-100 p-6 text-center">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Name */}
        <h2 className="text-xl font-bold">Pooranivenkat</h2>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-yellow-300 transition-all">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-300 transition-all">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-yellow-300 transition-all">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kalaiselvanece@gmail.com"
            className="hover:text-yellow-300 transition-all"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} PooraniVenkat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
