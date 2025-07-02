import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ArrowRight, Home, User, GalleryHorizontal } from "lucide-react";
import ProfileImage from './../images/portfolio.jpeg';

export default function Hero() {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Image Section */}
      <div className="w-1/3 relative flex items-center justify-center bg-[#00a79d] p-8">
        <img
          src={ProfileImage} // 👈 replace this with your own image path
          alt="Profile"
          className="rounded-[30px] object-cover h-[95%] w-[95%] shadow-xl border-black border-4"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-1/2 flex flex-col justify-center items-start p-12 space-y-6">
        <h2 className="text-[#00a79d] text-5xl font-bold tracking-widest"> KASHMALA KHAN</h2>
        <h1 className="text-3xl font-extrabold text-gray-800">WEB DESIGNER | FRONTEND ENGINEER</h1>
        <p className="text-gray-600 leading-relaxed text-justify">
          Passionate and skilled Web Developer with expertise in HTML5, CSS3, JavaScript, and React JS. Proficient in creating visually appealing and user-friendly websites using Tailwind CSS and Figma. I hold an ADP in Computer Science from Islamia University Bahawalpur, where I developed a solid foundation in web development and design principles. Committed to leveraging my technical skills and creativity to deliver high-quality web solutions and enhance user experiences.
        </p>
        <Link to='/about'>
        <button className="flex items-center border-2 text-lg border-[#00a79d] text-[#00a79d] px-6 py-3 rounded-full hover:bg-[#00a79d] hover:text-white transition">
          MORE ABOUT ME
          <ArrowRight className="ml-2" />
        </button>
        </Link>
      </div>

      {/* Right Vertical Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col">
      <Link to='/'><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><Home /></button></Link>
        <Link to="/about"><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><User /></button></Link>
        <Link to="/gallery"><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><GalleryHorizontal /></button></Link>
      </div>
    </div>
  );
}