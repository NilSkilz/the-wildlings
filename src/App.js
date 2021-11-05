import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
