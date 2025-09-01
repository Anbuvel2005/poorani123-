import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-inter bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 text-white">
      {/* Header */}
      <Header />

      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
