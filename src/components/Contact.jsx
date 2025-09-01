import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! I will get back to you soon.");
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-5 py-10"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
      <p className="text-center text-lg md:text-xl mb-8 text-blue-100 max-w-2xl">
        Have a question or want to work together? Fill out the form below and
        I’ll get back to you as soon as possible.
      </p>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="flex items-center gap-4 text-blue-100 text-lg">
            <FaPhoneAlt className="text-yellow-300" size={24} />
            <span>6382283655</span>
          </div>
          <div className="flex items-center gap-4 text-blue-100 text-lg">
            <FaEnvelope className="text-yellow-300" size={24} />
            <span>kalaiselvanece@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-blue-100 text-lg">
            <span className="text-yellow-300 font-bold">Location:</span>{" "}
            Vellore, India
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
