import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 min-h-screen flex items-center"
    >
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I’m <span className="text-yellow-400">Kalaiselvan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2 text-white">
            <span className="text-yellow-400">I'm an</span>
            <Typewriter
              options={{
                strings: [
                  "Electronics Engineer.",
                  "Embedded Systems Enthusiast.",
                  "IoT Innovator.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          <p className="text-lg md:text-xl text-white font-medium">
            I am passionate about{" "}
            <span className="text-yellow-300">Core Electronics</span>, Digital
            Electronics, Circuit Design, and Microcontrollers. Learning{" "}
            <span className="text-yellow-300">
              Embedded Systems, IoT, and PCB Design
            </span>{" "}
            for real-world projects.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:gap-6 space-y-3 md:space-y-0 text-white">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt size={20} />
              <span>Vellore</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} />
              <span>6382283655</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={20} />
              <span>kalaiselvanece@gmail.com</span>
            </div>
          </div>

          <div className="bg-yellow-400 px-5 py-2 rounded-2xl font-bold hover:bg-yellow-500 transition-all mt-4">
            <a href="#">Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./public/kalai Image 2025-08-27 at 23.21.15_0d993e4b.jpg" // replace with your image path
            alt="Profile"
            className="w-64 h-72 rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
