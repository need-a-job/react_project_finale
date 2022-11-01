import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import aboutPic from "../images/about_image.png";
import "./about.css";
import Navigation from "./navigation";
import Footer from "./footer";
import user from "../images/user.webp";
import hands from "../images/hands.jpg"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <Navigation />

      <div className="m-5">
        <img className="" src={aboutPic} width="3%"></img>
        <h1 className="d-flex justify-content-center">About Us</h1>
      </div>
      <div className="back">
        <h2 className="m-5">A little thing about us</h2>
        <div> <p className="m-5 d-flex row">
          our founder roei prints thought about it alot and said they wouldnt
          read the about section but if they do he thought itl be funny to write
          about himeself like hes not the one writing it to say that he did
          spend alot of time trying to conect this with the server still to this
          day dont know that went wrong but stil kept to do the stuff that he
          know like making the website look nice
        </p>
        <img src={hands} alt="" />
        </div>
       
      </div>

      <div className="back">
        <h2 className="m-5">More things about us</h2>

        <p className="m-5">
          gonna write more stuff on my great site cause why not its gonna be
          funny if someone read it didnt realy think someone will sow ill just
          write stuff sow the page will be all over with writing on the
          developer
        </p>
      </div>
      <div className="back">
        <h2 className="m-5">one last thing</h2>

        <p className="m-5">
          if you want you can also be an investor and get your company picture
          in the about page to join countless organization that help this site
        </p>
      </div>

      {/* helping business partners    */}

      <div className="container d-flex justify-content-around">
        <div className="card">
          <img id="user" src={user} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Want to be a user?</h5>
            <p className="card-text">
              Sign up to be a user and get the marketing you want
            </p>
            <Link
              to={"/register"}
              className="btn  my-1 py-3  d-flex justify-content-center"
            >
              User
            </Link>
          </div>
        </div>
        <div className="card">
          <img id="user" src={user} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Want to be a business </h5>
            <p className="card-text">
              Sign up and get your company on the map !
            </p>
            <Link
              to={"/register"}
              className="btn  my-1 py-3 d-flex justify-content-center"
            >
              Business
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
