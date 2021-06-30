import React from "react";
import Contact from "../components/Contact";
import GoToTopButton from "../components/GoToTopButton";
import LandingReservations from "../components/LandingReservations";

const Reservations = ({ formList, setFormList, alert, setAlert }) => {
  return (
    <div>
      <LandingReservations
        formList={formList}
        setFormList={setFormList}
        alert={alert}
        setAlert={setAlert}
      />
      <Contact />
      <GoToTopButton />
    </div>
  );
};

export default Reservations;
