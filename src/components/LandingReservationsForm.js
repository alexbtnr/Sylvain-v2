import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { formInputHover, formButtonHover } from "../animations";
import Reservation from "./Reservation";
import Alert from "./Alert";
import { v4 as uuid } from "uuid";
import { contactAnimationY, contactAnimationX } from "../animations";

const LandingReservationsForm = ({
  formList,
  setFormList,
  alert,
  setAlert,
}) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [hikers, setHikers] = useState("");

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

    if (formList.length < 8) {
      setFormList([
        ...formList,
        {
          checkIn,
          checkOut,
          hikers,
          id: uuid(),
        },
      ]);

      setCheckIn("");
      setCheckOut("");
      setHikers("");
    } else {
      setAlert(true);
      setCheckIn("");
      setCheckOut("");
      setHikers("");
    }
  };

  return (
    <>
      <StyledForm onSubmit={formHandler}>
        <motion.div
          variants={contactAnimationY}
          initial='initial'
          animate='animate'
          className='flex-left'
        >
          <div className='form-group'>
            <label htmlFor='check-in'>Check-in</label>
            <motion.input
              variants={formInputHover}
              whileHover='hover'
              transition={{ duration: 0.5 }}
              initial='initial'
              required
              type='text'
              name='check-in'
              id='check-in'
              placeholder='Feb 14'
              value={checkIn}
              onChange={checkInHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='check-out'>Check-out</label>
            <motion.input
              variants={formInputHover}
              whileHover='hover'
              transition={{ duration: 0.5 }}
              initial='initial'
              required
              type='text'
              name='check-out'
              id='check-out'
              placeholder='Jan 02'
              value={checkOut}
              onChange={checkOutHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='hikers' id='hikers-label'>
              Hikers
            </label>
            <motion.input
              variants={formInputHover}
              whileHover='hover'
              transition={{ duration: 0.5 }}
              initial='initial'
              required
              type='text'
              name='hikers'
              id='hikers'
              placeholder='3 Persons'
              value={hikers}
              onChange={hikersHandler}
            />
          </div>
          <div className='form-group'>
            <motion.input
              variants={formButtonHover}
              whileHover='hover'
              transition={{ duration: 0.5 }}
              initial='initial'
              className='form-button'
              type='submit'
              value='BOOK NOW'
              id='bookBtn'
            />
          </div>
        </motion.div>
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { type: "tween" } }}
              exit={{ scale: 0 }}
              id='alert-wrapper'
            >
              <Alert setAlert={setAlert} />
            </motion.div>
          )}
        </AnimatePresence>

        {formList.length > 0 ? (
          <motion.div
            variants={contactAnimationY}
            initial='initial'
            animate='animate'
            className='flex-right'
          >
            {formList.map((reservation) => (
              <Reservation
                formList={formList}
                setFormList={setFormList}
                key={reservation.id}
                reservation={reservation}
              />
            ))}
            {formList.length && (
              <motion.input
                onClick={() => setFormList([])}
                variants={formButtonHover}
                whileHover='hover'
                transition={{ duration: 0.5 }}
                initial='initial'
                className='form-button'
                type='submit'
                value='Clear Reservations'
                id='clearBtn'
              />
            )}
          </motion.div>
        ) : (
          <div className='flex-right'></div>
        )}
      </StyledForm>
    </>
  );
};

const StyledForm = styled(motion.form)`
  display: flex;
  justify-content: space-evenly;
  width: 1280px;

  .flex-left {
    display: flex;
    flex-direction: column;

    .form-group {
      text-align: left;
      display: flex;
      justify-content: space-between;
      label {
        /* padding-right: 1rem; */
        padding: 0.5rem;
        cursor: pointer;
        text-align: start;
        font-size: 1.3rem;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.5);
        width: 9rem;
        color: #fff;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
      }
      label#hikers-label {
        border-bottom: 2px solid #fff;
      }
      input {
        height: 3.8rem;
        color: #fff;
        width: 10rem;
        text-align: center;
        outline: none;
        border: 2px solid #fff;
        background: #000;
        border-bottom: 0;
      }
      input#hikers {
        border-bottom: 2px solid #fff;
      }
      #bookBtn {
        align-self: flex-end;
        height: 3.8rem;
        width: 100%;
        border: 2px solid #fff;
        border-top: none;
        background: #444;
        font-weight: 500;
        font-size: 1.1rem;
        letter-spacing: 2px;
        cursor: pointer;
        color: #fff;
      }
    }
  }

  .flex-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;

    #clearBtn {
      height: 3.8rem;
      width: 26.5rem;
      border: 2px solid #fff;
      border-top: 1px solid #fff;
      background: #444;
      font-weight: 500;
      font-size: 1.1rem;
      letter-spacing: 2px;
      cursor: pointer;
      color: #fff;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    /* max-width: 60%; */
    justify-content: center;
    align-items: center;

    .flex-right {
      order: 1;
      margin-bottom: 1.5rem;
      max-width: 60%;

      .form-button#clearBtn {
        width: 20.5rem;
      }
    }

    .flex-left {
      order: 2;
      margin-bottom: 1.5rem;
      max-width: 60%;
    }

    #alert-wrapper {
      order: 3;
      max-width: 30%;
    }
  }
`;

export default LandingReservationsForm;
