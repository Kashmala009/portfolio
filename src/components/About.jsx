import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ArrowRight, Home, User, GalleryHorizontal } from "lucide-react";
import { Download } from "lucide-react";


export default function About() {
    const skills = [
        { name: "HTML", percent: 80 },
        { name: "JavaScript", percent: 60 },
        { name: "CSS", percent: 70 },
        { name: "React JS", percent: 60 },
        { name: "Tailwind CSS", percent: 60 },
    ];

    return (
        <div className="py-16 px-24 bg-white text-center">
            {/* Title */}
            <h2 className="text-gray-100 text-8xl font-extrabold opacity-5 mb-2">RESUME</h2>
            <h3 className="text-4xl font-bold text-gray-800 mb-12">
                <span className="text-[#00a79d]">ABOUT</span> ME
            </h3>

            <div className="flex flex-row px-20">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 text-left w-[100%]">
                    <div className="space-y-10">
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
                    <div className="space-y-10">
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
                <div className="grid md:grid-cols-2 gap-6 mb-16 w-1/2">
                    <div className="p-6 border rounded-lg shadow text-center">
                        <h4 className="text-3xl font-bold text-green-600">1+</h4>
                        <p className="text-gray-600 mt-2">Years of Experience</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow text-center">
                        <h4 className="text-3xl font-bold text-green-600">4+</h4>
                        <p className="text-gray-600 mt-2">Completed Projects</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow text-center">
                        <h4 className="text-3xl font-bold text-green-600">4+</h4>
                        <p className="text-gray-600 mt-2">Happy Customers</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow text-center">
                        <h4 className="text-3xl font-bold text-green-600">2+</h4>
                        <p className="text-gray-600 mt-2">Awards Won</p>
                    </div>
                </div>
            </div>

            {/* Skills Progress */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                        <div className="relative w-24 h-24 rounded-full border-4 border-green-600 flex items-center justify-center text-xl font-bold text-green-600">
                            {skill.percent}%
                        </div>
                        <p className="font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>

            {/* Resume Timeline */}
            <div className="grid md:grid-cols-2 gap-8 text-left px-20">
                <div className="space-y-6">
                    <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-bold">2025 - Present</h4>
                        <h5 className="text-green-600 font-semibold">Frontend Engineer — DevMastersLearningTech</h5>
                        <p className="text-gray-600">Currently, I am working on ATS Mobile Accessories, a POS 
                            (Point of Sale) application designed for managing sales and inverntory. I focus on creating user-friendly, 
                            efficient forntend components.</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-bold">2024 - 2025</h4>
                        <h5 className="text-green-600 font-semibold">UI/UX Designer — DevMastersLearningTech</h5>
                        <p className="text-gray-600">I am working as a UI/UX Designer at DevMastersLearningTech, where I desing 
                            intuitive, user-centered interfaces that enhance the overall user experience across web and mobile platforms.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Vertical Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col">
        <Link to='/portfolio'><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><Home /></button></Link>
        <Link to="/about"><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><User /></button></Link>
        <Link to="/gallery"><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><GalleryHorizontal /></button></Link>
       
      </div>
        </div>
    );
}
