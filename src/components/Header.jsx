import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white shadow-md z-50">
      <div className="max-w-[90%] mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold cursor-pointer">Kalaiselvan</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:text-yellow-300 transition-all"
            >
              <a href={link.href}>{link.name}</a>
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
        <ul className="flex flex-col gap-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-center py-6 md:hidden">
          {links.map((link) => (
            <li
              key={link.name}
              className="text-xl hover:text-yellow-300 transition-all"
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
