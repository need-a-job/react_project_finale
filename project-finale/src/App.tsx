import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import About from "./components/about";
import UserContext from "./MyContext";
import backgroundPic from "./images/background_2.jpg";
import HomeAfterRegisterBizz from "./components/homeAfterRegisterBizz";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Card from "./components/Card";
import AllCards from "./components/allCards";

function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundPic})` }}></div>

      <UserContext.Provider value="">
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/homeAfter" element={<HomeAfterRegisterBizz />} />
              <Route path="/register" element={<Register />} />
              <Route path="/nav" element={<Navigation />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/allCards" element={<AllCards />} />
            </Routes>
          </Router>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
