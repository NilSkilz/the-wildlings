import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Activities from "./Pages/Activities";
import Blog from "./Pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Header />
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
