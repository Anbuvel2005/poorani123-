import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },

    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white shadow-md z-50">
      <div className="max-w-[90%] mx-auto flex justify-between items-center py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer">
          PooraniVenkat
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="hover:text-yellow-400 transition duration-200"
              >
                {link.name}
              </a>
              {/* Underline on hover */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <span className="text-3xl">{open ? "✖" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-6 bg-blue-800 text-center py-6 md:hidden font-semibold">
          {links.map((link) => (
            <li
              key={link.name}
              className="text-xl hover:text-yellow-400 transition duration-200"
            >
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
