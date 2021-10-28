import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = (props) => {
  const history = useHistory();
  const { bannerImg, eventTitle } = props?.event;
  const handlerservice = () => {
    history.push(`/register/${eventTitle}`);
  };
  return (
    <div className="col">
      <div className="card h-100 rounded-4 onclick" onClick={handlerservice}>
        <img
          src={bannerImg}
          className="card-img-top w-100"
          alt="Rectangle-22"
        />
        <div
          className={`card-body text-center p-4 bg-info  rounded-bottom-add`}
        >
          <h5 className="card-title">{eventTitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default Service;
