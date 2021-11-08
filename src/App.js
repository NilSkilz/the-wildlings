import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Activities from "./Pages/Activities";
import Blog from "./Pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Button } from "reactstrap";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Header setSideMenuOpen={setSideMenuOpen} />
        <Offcanvas
          toggle={() => setSideMenuOpen(!sideMenuOpen)}
          isOpen={sideMenuOpen}
        >
          <OffcanvasHeader toggle={() => setSideMenuOpen(!sideMenuOpen)}>
            Offcanvas
          </OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
          </OffcanvasBody>
        </Offcanvas>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
