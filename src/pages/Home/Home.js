import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="bg-light">
        <div className="row">
          <h1 className="baner-title mt-5">
            I grow by helping people in need.
          </h1>
          <div className="col-md-4 mx-auto">
            <div className="input-group my-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary border-0 "
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Services></Services>
      </div>
    </>
  );
};

export default Home;
