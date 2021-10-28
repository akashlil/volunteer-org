import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Context/useAuth";
import "./Login.css";

const Login = () => {
  const { googleWithLogin, setUser, setError, setDataLoaded } = useAuth();

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleWithLoginHandler = () => {
    googleWithLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setDataLoaded(false);
        history.replace(from);
      });
  };
  return (
    <div className="bg-light">
      <div className=" full-height d-flex justify-content-center align-items-center ">
        <div className="card p-md-5">
          <div className=" card-body text-center">
            <h4 className="card-title p-3 fw-bolder">Login With</h4>
            <button
              onClick={googleWithLoginHandler}
              className="border-1 rounded-3 p-2 bg-light"
            >
              <i className="fab fa-google me-2"></i>Continue with Google
            </button>
            <p className="card-text p-3">
              Don't have an account?{" "}
              <Link to="/singup">Crerate an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
