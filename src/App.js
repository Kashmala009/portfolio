import "./App.css";
import React from "react";
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-6 space-y-16">
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
