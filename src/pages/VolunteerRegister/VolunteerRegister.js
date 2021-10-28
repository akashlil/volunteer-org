import React from "react";
import { useHistory, useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import useAuth from "../../Context/useAuth";

const VolunteerRegister = () => {
  const { user } = useAuth();
  const { titlename } = useParams();
  const history = useHistory();

  const [registerVolenteer, setRegisterVolenteer] = useState({
    fullname: user?.displayName,
    email: user?.email,
    organizebooksname: titlename,
    desicription: " ",
  });
  const valueChangeHandler = (e) => {
    setRegisterVolenteer({
      ...registerVolenteer,
      [e.target.name]: e.target.value,
    });
  };
  const registerVolunteer = (e) => {
    e.preventDefault();
    fetch(`https://limitless-mesa-88825.herokuapp.com/registervolunteer`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerVolenteer),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        history.push("/");
      });
  };
  return (
    <div className="bg-light">
      <div className=" full-height d-flex justify-content-center align-items-center">
        <div className="card col-md-4 col-10">
          <div className="card-body">
            <div className="p-3">
              <h3 className="fw-bolder mb-4">Register as a Volunter</h3>
              <form onSubmit={registerVolunteer}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    placeholder="FullName"
                    required
                    value={registerVolenteer?.fullname || ""}
                    onChange={valueChangeHandler}
                  />
                  <label htmlFor="floatingInput">FullName</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="name@example.com"
                    required
                    value={registerVolenteer?.email || ""}
                    onChange={valueChangeHandler}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="organizebooksname"
                    required
                    placeholder="Organize books at the library."
                    value={registerVolenteer.organizebooksname || ""}
                    onChange={valueChangeHandler}
                  />
                  <label htmlFor="floatingInput">
                    Organize books at the library.
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Desicription"
                    required
                    name="desicription"
                    value={registerVolenteer.desicription}
                    onChange={valueChangeHandler}
                  />
                  <label htmlFor="floatingInput">Desicription</label>
                </div>

                <button className="btn btn-primary w-100 rounded-0">
                  Registation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegister;
