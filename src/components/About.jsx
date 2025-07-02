import { Link } from "react-router-dom";
import { Home, User, GalleryHorizontal } from "lucide-react";

export default function About() {
  const skills = [
    { name: "HTML", percent: 80 },
    { name: "JavaScript", percent: 60 },
    { name: "CSS", percent: 70 },
    { name: "React JS", percent: 60 },
    { name: "Tailwind CSS", percent: 60 },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 md:px-16 bg-white text-center">
      {/* Title */}
      <h2 className="text-gray-100 text-6xl sm:text-7xl md:text-8xl font-extrabold opacity-5 mb-2">
        RESUME
      </h2>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        <span className="text-[#00a79d]">ABOUT</span> ME
      </h3>

      {/* Info Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full lg:w-2/3 mb-8">
          <div className="space-y-6 sm:space-y-8">
            <p>
              <strong>First Name:</strong> Kashmala
            </p>
            <p>
              <strong>Last Name:</strong> Khan
            </p>
            <p>
              <strong>Age:</strong> 27 Years
            </p>
            <p>
              <strong>Nationality:</strong> Pakistan
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <p>
              <strong>Address:</strong> Ahmad Pur East, District Bahawalpur
            </p>
            <p>
              <strong>Phone:</strong> +92309-7108258
            </p>
            <p>
              <strong>Email:</strong> kashmalak797@gmail.com
            </p>
            <p>
              <strong>Languages:</strong> English, Urdu
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/3">
          {[
            { value: "1+", label: "Years of Experience" },
            { value: "4+", label: "Completed Projects" },
            { value: "4+", label: "Happy Customers" },
            { value: "2+", label: "Awards Won" },
          ].map((stat, i) => (
            <div key={i} className="p-4 border rounded-lg shadow text-center">
              <h4 className="text-2xl font-bold text-green-600">
                {stat.value}
              </h4>
              <p className="text-gray-600 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 mb-16">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-green-600 flex items-center justify-center text-lg sm:text-xl font-bold text-green-600">
              {skill.percent}%
            </div>
            <p className="font-medium text-sm sm:text-base">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        <div className="space-y-6">
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-bold">2025 - Present</h4>
            <h5 className="text-green-600 font-semibold">
              Frontend Engineer — DevMastersLearningTech
            </h5>
            <p className="text-gray-600 text-sm">
              Currently, I am working on ATS Mobile Accessories, a POS (Point of
              Sale) application designed for managing sales and inventory. I
              focus on creating user-friendly, efficient frontend components.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-bold">2024 - 2025</h4>
            <h5 className="text-green-600 font-semibold">
              UI/UX Designer — DevMastersLearningTech
            </h5>
            <p className="text-gray-600 text-sm">
              I am working as a UI/UX Designer at DevMastersLearningTech, where
              I design intuitive, user-centered interfaces that enhance the
              overall user experience across web and mobile platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Sidebar */}
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
