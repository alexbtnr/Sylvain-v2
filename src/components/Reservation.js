import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { contactAnimationY } from "../animations";

const Reservation = ({ reservation, formList, setFormList }) => {
  const deleteHandler = () => {
    setFormList(formList.filter((element) => element.id !== reservation.id));
  };

  return (
    <StyledReservation
      variants={contactAnimationY}
      initial='initial'
      animate='animate'
      id={reservation.id}
    >
      <h4 className='reservations-checkin'>{reservation.checkIn}</h4>
      <h4 className='reservations-checkout'>{reservation.checkOut}</h4>
      <h4 className='reservations-hikers'>{reservation.hikers}</h4>
      <h4 onClick={deleteHandler} className='reservations-delete'>
        <i className='las la-trash-alt'></i>
      </h4>
    </StyledReservation>
  );
};

const StyledReservation = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: flex-start;
  /* width: 100%; */
  text-transform: capitalize;

  .reservations-checkin {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-weight: lighter;
    border: 1px solid #fff;
    padding: 0.5rem;
    width: 8rem;
    /* margin-left: 1rem; */
  }
  .reservations-checkout {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-weight: lighter;
    border: 1px solid #fff;
    padding: 0.5rem;
    width: 8rem;
  }
  .reservations-hikers {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-weight: lighter;
    border: 1px solid #fff;
    width: 8rem;
    padding: 0.5rem;
  }
  .reservations-delete {
    background: #444;
    color: #fff;
    width: 2.5rem;
    text-align: center;
    border: 1px solid #fff;
    padding: 0.3rem;
    font-size: 1.3rem;
    cursor: pointer;
    font-weight: lighter;
    transition: all 0.5s ease;
  }
  .reservations-delete:hover {
    background: #fff;
    color: #444;
  }

  @media (max-width: 800px) {
    .reservations-checkin,
    .reservations-checkout,
    .reservations-hikers {
      width: 6rem;
    }
  }
`;

export default Reservation;
