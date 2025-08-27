import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-inter">
      {/* Header with gradient */}
      <Header />

      {/* Home Section */}
      <Home />

      {/* About Section with gradient */}
      <About />

      {/* Contact Section with gradient */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
