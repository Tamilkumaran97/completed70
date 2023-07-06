import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "./Clonewebsite/Home";
import Navbar from "./Clonewebsite/Navbar";
import Giving from "./Clonewebsite/Giving";
import "./App.css";

import Connect from "./Clonewebsite/Connect";
import AboutUs from "./Clonewebsite/AboutUs";
import Churchlife from "./Clonewebsite/Churchlife";

import "locomotive-scroll/dist/locomotive-scroll.css";
import PlanVisit from "./Clonewebsite/PlanVisit";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Navbar />
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />

          <Route path="/giving" element={<Giving />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/life" element={<Churchlife />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plan" element={<PlanVisit />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
