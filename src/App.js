import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Hero";
import AboutPage from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router basename="/portfolio">
      <div>
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      </Router>
   
  );
}

export default App;
