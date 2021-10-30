import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const useLoadedata = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [volunteerList, setVolunteerList] = useState([]);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch("https://limitless-mesa-88825.herokuapp.com/showallevents")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);

  useEffect(() => {
    fetch("https://limitless-mesa-88825.herokuapp.com/volunteerlist")
      .then((res) => res.json())
      .then((data) => setVolunteerList(data));
  }, []);

  const deletevolunteerlist = (id) => {
    Swal.fire({
      title: "Hello World",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://limitless-mesa-88825.herokuapp.com/deletevoluneerlist/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const dataRefress = volunteerList.filter(
                (volunteer) => volunteer._id !== id
              );
              setVolunteerList(dataRefress);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return {
    allEvents,
    setAllEvents,
    volunteerList,
    deletevolunteerlist,
    setVolunteerList,
  };
};

export default useLoadedata;
