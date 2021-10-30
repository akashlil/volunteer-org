import React from "react";
import useLoadedata from "../../../Hooks/useLoadedata";

const VolunteerRegList = () => {
  const { volunteerList, setVolunteerList, deletevolunteerlist } =
    useLoadedata();

  let i = 1;
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
          {volunteerList.map((voluntee) => {
            console.log(voluntee._id);
            return (
              <tr>
                <th scope="row">{i++}</th>
                <td>{voluntee.fullname}</td>
                <td>{voluntee.email}</td>
                <td>{voluntee.organizebooksname}</td>

                <td>
                  <button
                    onClick={() => deletevolunteerlist(voluntee?._id)}
                    className="btn btn-sm btn-danger"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerRegList;
