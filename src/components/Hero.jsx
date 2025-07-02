import { Link } from "react-router-dom";
import { ArrowRight, Home, User, GalleryHorizontal } from "lucide-react";
import ProfileImage from "./../images/portfolio.jpeg";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-white">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/3 relative flex items-center justify-center bg-[#00a79d] p-6 sm:p-8">
        <img
          src={ProfileImage}
          alt="Profile"
          className="rounded-[30px] object-cover w-full h-auto max-h-[500px] sm:max-h-[600px] md:max-h-[90%] shadow-xl border-black border-4"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-start p-6 sm:p-10 lg:p-12 space-y-6">
        <h2 className="text-[#00a79d] text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
          KASHMALA KHAN
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">
          WEB DESIGNER | FRONTEND ENGINEER
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
          Passionate and skilled Web Developer with expertise in HTML5, CSS3,
          JavaScript, and React JS. Proficient in creating visually appealing
          and user-friendly websites using Tailwind CSS and Figma. I hold an ADP
          in Computer Science from Islamia University Bahawalpur, where I
          developed a solid foundation in web development and design principles.
          Committed to leveraging my technical skills and creativity to deliver
          high-quality web solutions and enhance user experiences.
        </p>
        <Link to="/about">
          <button className="flex items-center border-2 text-sm sm:text-base border-[#00a79d] text-[#00a79d] px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#00a79d] hover:text-white transition">
            MORE ABOUT ME
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </div>

      {/* Right Vertical Sidebar (optional: hide on small screens) */}
       <div className="fixed right-2 top-1/2 transform -translate-y-1/2 space-y-3 flex flex-col z-50">
        <Link to="/">
          <button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition">
            <Home />
          </button>
        </Link>
        <Link to="/about">
          <button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition">
            <User />
          </button>
        </Link>
        <Link to="/gallery">
          <button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition">
            <GalleryHorizontal />
          </button>
        </Link>
      </div>
    </div>
  );
}
