import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Context/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut, setUser } = useAuth();
  const history = useHistory();
  const logo = `https://i.ibb.co/CbVDfVG/Group-1329.png`;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Volunteer" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donation">
                Donation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usereventshow">
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <button className="btn btn-sm btn-secondary">Admin</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/singup">
                <button className="btn btn-sm btn-primary">SingUp</button>
              </Link>
            </li>
            <li className="nav-item">
              <b className="nav-link">
                {user.email ? (
                  <button
                    onClick={() => {
                      logOut();
                      setUser({});
                      history.push("/login");
                    }}
                    className=" btn btn-sm btn-danger"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className=" btn btn-sm btn-secondary"
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    Login
                  </button>
                )}
              </b>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
