import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Contactus from "./Contactus";
import About from "./About";
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link"> Home </Link>
        <Link to="/about" className="link"> About </Link>
        <Link to="/contactus" className="link"npm> Contact us </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
    </Router>
  );


}

export default App;
