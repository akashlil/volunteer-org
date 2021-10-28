import React from "react";
import useLoadedata from "../../Hooks/useLoadedata";
import Service from "./Service/Service";

const Services = () => {
  const { allEvents } = useLoadedata();
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4 my-5 text-white m-0">
      {allEvents?.map((event) => (
        <Service key={event?._id} event={event}></Service>
      ))}
    </div>
  );
};

export default Services;
