import { FunctionComponent } from "react";
import React from "react";
import "./footer.css";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <footer id="footer" className="border-bottom mt-1">
        <i className="socials fab fa-facebook fa-2x px-2 mt-1"></i>
        <i className="socials fab fa-instagram fa-2x px-2 mt-1"></i>
        <i className="socials fab fa-twitter fa-2x px-2 m-1"></i>
        <i className="socials fas fa-envelope fa-2x px-2 m-1"></i>

        <p className="mt-1">
          2022 BizCards website was developed and Designed by
          <strong>
            {" "}
            <a className="link" href="https://roeiprints.com/" target="_blank">
              <span className="name">Roei Prints.</span>
            </a>
          </strong>
        </p>
      </footer>
    </>
  );
};

export default Footer;
