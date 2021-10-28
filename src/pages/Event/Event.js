import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import AddEvent from "./AddEvent/AddEvent";
import "./Event.css";
import VolunteerRegList from "./VolunteerRegList/VolunteerRegList";

function Child({ name }) {
  return (
    <div>
      {name === "registerlist" ? (
        <VolunteerRegList>ok</VolunteerRegList>
      ) : (
        <AddEvent></AddEvent>
      )}
    </div>
  );
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Event = () => {
  return (
    <div className="row full-page-h my-5">
      <div className="col-md-3 ">
        <div className="mx-3 h-full side-bar rounded-3 shadow-lg ">
          <div className="ps-4 py-4">
            <div className="my-2">
              <NavLink
                className=" text-decoration-none "
                to="/admin/?name=registerlist"
              >
                <i className="fab fa-google me-2"></i>Volunteer register list
              </NavLink>
              <br />
            </div>
            <div className="my-2">
              <NavLink className=" text-decoration-none" to="/admin/?name=sads">
                <i className="fas fa-plus me-2"></i>
                Add event
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9 ">
        <div className="mx-3 h-full  rounded-3 mt-md-0 mt-5 shadow-lg">
          <div className="ps-5 py-4">
            <Child name={useQuery().get("name")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
