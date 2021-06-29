import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingForm = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [hikers, setHikers] = useState("");
  const [form, setForm] = useState(null);

  const checkInHandler = (e) => {
    setCheckIn(e.target.value);
  };
  const checkOutHandler = (e) => {
    setCheckOut(e.target.value);
  };
  const hikersHandler = (e) => {
    setHikers(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();

    setForm({
      checkIn,
      checkOut,
      hikers,
    });

    setCheckIn("");
    setCheckOut("");
    setHikers("");
  };

  return (
    <>
      {form ? (
        <SubmittedForm>
          <p>Thank you! Your booking details have been received!</p>
          <button onClick={() => setForm(null)}>
            Make another reservation!
          </button>
          <Link to='/reservations' id='secondary-reservations-wrapper'>
            <button id='secondary-reservations'>Reservations</button>
          </Link>
        </SubmittedForm>
      ) : (
        <StyledForm onSubmit={formHandler}>
          <div className='inputs-wrap'>
            <div className='form-group'>
              <label htmlFor='check-in'>Check-in</label>
              <input
                type='text'
                id='check-in'
                name='check-in'
                placeholder='Feb 14'
                value={checkIn}
                onChange={checkInHandler}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='check-out'>Check-out</label>
              <input
                type='text'
                id='check-out'
                name='check-out'
                placeholder='Jan 02'
                value={checkOut}
                onChange={checkOutHandler}
                required
              />
            </div>
            <div className='form-group'>
              <label id='hikers-label' htmlFor='hikers'>
                Hikers
              </label>
              <input
                type='text'
                id='hikers'
                name='hikers'
                placeholder='3 Persons'
                value={hikers}
                onChange={hikersHandler}
                required
              />
            </div>
          </div>
          <input type='submit' className='form-button' value='BOOK NOW' />
        </StyledForm>
      )}
    </>
  );
};

const StyledForm = styled(motion.form)`
  display: flex;
  align-items: flex-end;

  .inputs-wrap {
    display: flex;

    .form-group {
      display: flex;
      flex-direction: column;

      label {
        text-align: start;
        font-size: 1.3rem;
        font-weight: bold;
        color: #fff;
      }

      input {
        height: 3.8rem;
        color: #fff;
        width: 10rem;
        text-align: center;
        outline: none;
        border: 2px solid #fff;
        background: #000;
        border-right: 0;
      }
    }
  }

  .form-button {
    height: 3.8rem;
    width: 10rem;
    border: 2px solid #fff;
    background: #444;
    font-weight: 500;
    font-size: 1.1rem;
    letter-spacing: 2px;
    cursor: pointer;
    color: #fff;
  }
`;

const SubmittedForm = styled(motion.div)`
  height: 3.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding: 1.3rem;
    background: #fff;
  }
  button {
    height: 3.8rem;
    width: 100%;
    padding: 1.3rem;
    border: 2px solid #fff;
    background: #444;
    font-size: 1rem;
    letter-spacing: 2px;
    cursor: pointer;
    color: #fff;
  }

  button#secondary-reservations {
    border-top: none;
  }
  #secondary-reservations-wrapper {
    width: 100%;
  }
`;

export default LandingForm;
