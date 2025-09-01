import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="bg-blue-600 min-h-screen flex items-center">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I’m <span className="text-yellow-300">PooraniVenkat</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2 text-white">
            <span className="text-yellow-300">I specialize in</span>
            <Typewriter
              options={{
                strings: [
                  "Embedded Systems Engineering",
                  "PCB Design & Circuit Development",
                  "IoT Solutions & Prototyping",
                  "Microcontroller Programming",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          <p className="text-lg md:text-xl text-white font-medium">
            A passionate{" "}
            <span className="text-yellow-300">Embedded Engineer</span> with
            strong interest in{" "}
            <span className="text-yellow-300">
              PCB design, IoT devices, and microcontrollers
            </span>
            . Skilled in circuit design, firmware development, and integrating
            hardware with software to create real-world electronic solutions.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:gap-6 space-y-3 md:space-y-0 text-white">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt size={20} />
              <span>Salem</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} />
              <span>6382283655</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={20} />
              <span>pooranivenkat@gmailcom</span>
            </div>
          </div>

          <div className="bg-yellow-400 px-5 py-2 rounded-2xl font-bold hover:bg-yellow-500 transition-all mt-4">
            <a href="#">Download Resume</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./Profile.png"
            alt="Profile"
            className="w-64 h-72 rounded-md object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
