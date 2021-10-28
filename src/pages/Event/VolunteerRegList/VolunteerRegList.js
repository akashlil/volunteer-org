import React from "react";

const VolunteerRegList = () => {
  return (
    <div className=" table-responsive">
      <table className="table  table-borderless   caption-top">
        <caption className="fw-bolder fs-4">Volunteer register list</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email id</th>
            <th scope="col">Volunteer List</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className="btn btn-sm btn-danger">
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerRegList;
