import React from "react";
import Contact from "../components/Contact";
import GoToTopButton from "../components/GoToTopButton";
import LandingReservations from "../components/LandingReservations";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Reservations = ({ formList, setFormList, alert, setAlert }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <LandingReservations
        formList={formList}
        setFormList={setFormList}
        alert={alert}
        setAlert={setAlert}
      />
      <Contact />
      <GoToTopButton showBelow={200} />
    </motion.div>
  );
};

export default Reservations;
