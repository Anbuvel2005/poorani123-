import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Anbuvel. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            Anbuvel
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/Anbuvel2005"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
