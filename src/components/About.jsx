import { FaMicrochip, FaLaptopCode, FaDraftingCompass } from "react-icons/fa";
import {
  SiArduino,
  SiRaspberrypi,
  SiPython,
  SiCplusplus,
  SiKicad,
  SiEspressif,
} from "react-icons/si";

const About = () => {
  const skills = [
    {
      name: "Arduino",
      icon: <SiArduino className="text-[#00b4d8] w-14 h-14" />,
    },
    {
      name: "Raspberry Pi",
      icon: <SiRaspberrypi className="text-[#e63946] w-14 h-14" />,
    },
    { name: "Python", icon: <SiPython className="text-[#f9c74f] w-14 h-14" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#90e0ef] w-14 h-14" /> },
    {
      name: "ESP32 / IoT",
      icon: <SiEspressif className="text-[#ff6b6b] w-14 h-14" />,
    },
    {
      name: "STM32 & Microcontrollers",
      icon: <FaMicrochip className="text-[#f9844a] w-14 h-14" />,
    },
    {
      name: "PCB Design (KiCad)",
      icon: <SiKicad className="text-[#0077b6] w-14 h-14" />,
    },
    {
      name: "Embedded Systems",
      icon: <FaLaptopCode className="text-[#f77f00] w-14 h-14" />,
    },
    {
      name: "Circuit Design",
      icon: <FaDraftingCompass className="text-[#2a9d8f] w-14 h-14" />,
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 py-12"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
      <p className="text-lg md:text-xl text-blue-100 text-center max-w-4xl mb-12 leading-relaxed">
        I am an{" "}
        <span className="font-bold text-yellow-300">
          Embedded Systems & PCB Design Enthusiast
        </span>{" "}
        with hands-on experience in microcontrollers, circuit design, and IoT
        solutions. My passion lies in bridging the gap between hardware and
        software — developing innovative, real-world applications that integrate
        sensors, communication protocols, and efficient PCB layouts.
      </p>

      {/* Skills */}
      <h3 className="text-2xl font-semibold mb-8 text-white">
        Technical Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-blue-700/50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <span className="font-semibold text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
