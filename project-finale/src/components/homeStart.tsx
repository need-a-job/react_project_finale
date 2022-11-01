import { FunctionComponent } from "react";
import React from "react";
import "./homeStart.css";
import webPic from "../images/webPic.png";
import { Link } from "react-router-dom";

interface HomeStartProps {}

const HomeStart: FunctionComponent<HomeStartProps> = () => {
  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${webPic})` }}>
        <div className="welcome">  
            <h1>welcome to our site</h1>
        <Link to={"/login"} className="btn">
          Login
        </Link>
        <Link to={"/register"} className="btn">
          Register
        </Link></div>
      
      </div>
    </>
  );
};

export default HomeStart;
