import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-50 to-white p-6 text-center">
      
    //   <motion.h1
    //     className="text-4xl sm:text-5xl font-bold mb-4"
    //     initial={{ opacity: 0, y: -40 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     style={{ color: '#00a79d' }}
    //   >
    //     Hi, I'm <span className="text-black">Kashmala Khan</span>
    //   </motion.h1>

    //   <motion.p
    //     className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ delay: 0.4 }}
    //   >
    //     A passionate Frontend Developer skilled in HTML, CSS, JavaScript, ReactJS & Tailwind CSS
    //   </motion.p>

    //   <motion.a
    //     href="#contact"
    //     className="bg-[#00a79d] text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-xl hover:bg-[#00998f] transition duration-300"
    //     whileHover={{ scale: 1.05 }}
    //     whileTap={{ scale: 0.95 }}
    //   >
    //     Hire Me
    //   </motion.a>
    // </section>
    // second design 
    <div className="bg-[#0f0f1b] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Kashmala Khan</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-[#00a79d]">Home</a>
          <a href="#" className="hover:text-[#00a79d]">About me</a>
          <a href="#" className="hover:text-[#00a79d]">Projects</a>
          <a href="#" className="hover:text-[#00a79d]">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-6">
        {/* <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-[#00a79d] mb-6"
        /> */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Hello, I'm <span className="text-[#00a79d]">Kashmala Khan</span></h2>
        <p className="text-gray-300 mb-6 max-w-md">
          Freelance UI Designer, Frontend Developer, passionate about building seamless web experiences.
        </p>
        <div className="space-x-4">
          <button className="bg-[#00a79d] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#008c84] transition">About Me</button>
          <button className="border border-[#00a79d] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#00a79d] transition">Projects</button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#161625] py-12 px-6">
        <h3 className="text-xl font-semibold text-[#00a79d] mb-4">About me:</h3>
        <p className="text-gray-300 max-w-2xl mb-6">
          Hi, my name is Kashmala Khan. I am a Frontend Developer & UI Designer. I specialize in creating intuitive user interfaces and have experience in modern frameworks like ReactJS.
        </p>
        <div className="text-5xl font-bold text-white mb-4">5+ <span className="text-lg font-normal">Years of experience</span></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['UI & UX DESIGNING', 'WEB DEVELOPMENT', 'MOBILE DEVELOPMENT', 'WEB SCRAPING'].map((item, i) => (
            <div key={i} className="bg-gray-800 p-4 text-center rounded-md text-sm hover:scale-105 transition">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0f0f1b] py-12 px-6">
        <h3 className="text-xl font-semibold text-[#00a79d] mb-8">The services I offer:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'UI & UX DESIGNING', desc: 'I design interfaces using Figma & Adobe XD.' },
            { title: 'WEB DEVELOPMENT', desc: 'I build frontend using HTML, CSS, JavaScript & React.' },
            { title: 'MOBILE DEVELOPMENT', desc: 'Skilled in Flutter & React Native for mobile apps.' },
            { title: 'VERSION CONTROL', desc: 'I use GitHub & Git for managing code.' },
            { title: 'NPM & NODEJS', desc: 'Experience with packages and Node backend.' },
            { title: 'WEB SCRAPING', desc: 'Collect & analyze data from web using Python.' },
          ].map((srv, index) => (
            <div key={index} className="bg-[#161625] p-5 rounded-md border border-gray-700 hover:border-[#00a79d] transition">
              <h4 className="font-bold text-white mb-2">{srv.title}</h4>
              <p className="text-gray-400 text-sm">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161625] text-center text-sm py-6 border-t border-gray-700">
        <p className="text-gray-400">© 2025 Kashmala Khan. All rights reserved.</p>
      </footer>
    </div>
  )
}
