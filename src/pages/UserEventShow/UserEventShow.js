import React, { useEffect, useState } from "react";
import useAuth from "../../Context/useAuth";
import useLoadedata from "../../Hooks/useLoadedata";

const UserEventShow = () => {
  const { user } = useAuth();

  const { volunteerList, deletevolunteerlist } = useLoadedata();

  let uservolunteerListItem = volunteerList?.filter(
    (volunteer) => volunteer.email === user?.email
  );

  return (
    <div className="row row-cols-md-3 row-cols-1">
      {uservolunteerListItem.map((items) => (
        <div className="col">
          <div className="shadow py-3 m-4 bg-body rounded" key={items._id}>
            <div className="d-flex justify-content-between align-items-center  px-4">
              <div>
                <p className="m-0">{items.organizebooksname}</p>
              </div>
              <div>
                <button
                  className="btn btn-light"
                  onClick={() => deletevolunteerlist(items._id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserEventShow;
