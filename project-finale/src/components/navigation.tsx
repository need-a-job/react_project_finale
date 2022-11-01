import { FunctionComponent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  const [isBizz, setIsBizz] = useState<boolean>(false);

  useEffect(() => {
    setIsBizz(sessionStorage.getItem("isBizz") === "true" ? true : false);
  });

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  function login_or_logout() {
    const user = sessionStorage.getItem("user");
    if (!user) {
      return (
        <div>
          <Link to={"/login"} className="btn  my-1 py-3">
            sign in
          </Link>
          <Link to={"/register"} className="btn  my-1 py-3">
            sign up
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/allCards"} className="btn  my-1 py-3">
            all cards
          </Link>
          <button onClick={logout} className="btn  my-1 py-3">
            Logout
          </button>
        </div>
      );
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="btn  my-1 py-3">
            Real App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={"/about"} className="btn  my-1 py-3">
                About
              </Link>
            </ul>
            {isBizz ? (
              <Link to={"/homeAfter"} className="btn  my-1 py-3">
                Add Card
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="d-flex">{login_or_logout()}</div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
