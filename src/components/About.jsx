import { FaMicrochip, FaLaptopCode } from "react-icons/fa";
import {
  SiArduino,
  SiRaspberrypi,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

const About = () => {
  const skills = [
    {
      name: "Arduino",
      icon: <SiArduino className="text-[#00979D] w-14 h-14" />,
    },
    {
      name: "Raspberry Pi",
      icon: <SiRaspberrypi className="text-[#C51A4A] w-14 h-14" />,
    },
    { name: "Python", icon: <SiPython className="text-[#3776AB] w-14 h-14" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C] w-14 h-14" /> },
    {
      name: "Microcontrollers",
      icon: <FaMicrochip className="text-[#FF5733] w-14 h-14" />,
    },
    {
      name: "Embedded Systems",
      icon: <FaLaptopCode className="text-[#FF8C00] w-14 h-14" />,
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 py-10"
      style={{
        background: "linear-gradient(135deg, #C2FFD8 0%, #FFB6C1 100%)",
      }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
      <p className="text-lg md:text-xl text-gray-800 text-center max-w-3xl mb-10">
        I am a core electronics enthusiast with experience in digital
        electronics, circuit design, and microcontrollers. I am learning
        embedded systems, IoT, and PCB design. My goal is to work on real-world
        projects combining hardware and software to innovate in electronics.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-white p-5 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            {skill.icon}
            <span className="font-semibold text-gray-900">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
