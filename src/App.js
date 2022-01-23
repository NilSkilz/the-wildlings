import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Activities from "./Pages/Activities";
import ActivityDetail from "./Pages/Activities/ActivityDetail";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import SideMenu from "./Components/Offcanvas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Header setSideMenuOpen={setSideMenuOpen} />
        <SideMenu
          sideMenuOpen={sideMenuOpen}
          setSideMenuOpen={setSideMenuOpen}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/camp-fire" element={<ActivityDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
