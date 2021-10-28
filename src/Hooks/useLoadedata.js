import { useEffect } from "react";
import { useState } from "react";

const useLoadedata = () => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    fetch("https://limitless-mesa-88825.herokuapp.com/showallevents")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);

  return {
    allEvents,
    setAllEvents,
  };
};

export default useLoadedata;
