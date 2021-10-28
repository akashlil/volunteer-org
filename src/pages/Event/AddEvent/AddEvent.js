import React, { useState } from "react";

const AddEvent = () => {
  const [eventAdd, setEventAdd] = useState({});

  const getAddevendata = (e) => {
    setEventAdd({ ...eventAdd, status: 1, [e.target.name]: e.target.value });
  };

  const handlereventadd = (e) => {
    e.preventDefault();

    fetch(`https://limitless-mesa-88825.herokuapp.com/addevent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
      });
  };

  return (
    <div>
      <p className="fw-bolder fs-4 ms-2">Add event</p>
      <form onSubmit={handlereventadd}>
        <div className="mb-3 row me-4">
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Event Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onBlur={getAddevendata}
              name="eventTitle"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Banner Images
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onBlur={getAddevendata}
              required
              name="bannerImg"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onBlur={getAddevendata}
              name="description"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary ms-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
