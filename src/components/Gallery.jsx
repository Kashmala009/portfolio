import { ArrowRight, Home, User, GalleryHorizontal } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import Lightbox from "react-simple-lightbox";
// import "react-simple-lightbox/dist/index.css";
import Image1 from "./../images/image1.jpeg";
import Image2 from "./../images/image2.jpeg";
import Image3 from "./../images/image3.jpeg";
import Image4 from "./../images/image4.jpeg";
import Image5 from "./../images/image5.jpeg";
import Image6 from "./../images/image6.jpeg";


const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
];

export default function Gallery() {
    return (
        <div className="p-8 bg-white min-h-screen">
          <h1 className="text-4xl font-bold text-center mb-10">
            My Last Project — Gallery
          </h1>
    
          <Lightbox>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 px-10">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-xl cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={src}>
                    <img
                      src={src}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto object-cover rounded-xl hover:brightness-110 transition duration-300"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </Lightbox>
            {/* Right Vertical Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col">
        <Link to='/portfolio'><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><Home /></button></Link>
        <Link to="/about"><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><User /></button></Link>
        <Link to="/gallery"><button className="bg-white p-3 rounded-full shadow hover:bg-[#00a79d] hover:text-white transition"><GalleryHorizontal /></button></Link>
       
      </div>
        </div>
      );
}