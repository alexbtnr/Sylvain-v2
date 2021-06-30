import React from "react";
import styled from "styled-components";

const Alert = ({ setAlert }) => {
  const deleteAlertHandler = () => {
    setAlert(false);
  };

  return (
    <StyledAlert>
      <i onClick={deleteAlertHandler} className='las la-times-circle la-2x'></i>
      <h4>Maximum number of reservations made.</h4>
      <i className='las la-exclamation-triangle la-3x'></i>
      <h4>Delete one or more if you wish to continue making reservations.</h4>
    </StyledAlert>
  );
};

const StyledAlert = styled.div`
  background: rgba(255, 0, 0, 0.7);
  color: #000;
  font-size: 1.1rem;
  text-align: center;
  width: 80%;
  /* padding */
  margin: auto;
  border: 5px solid #222;
  border-radius: 10px;
  position: relative;
  h4 {
    width: 100%;
    padding: 1rem;
  }
  .la-times-circle {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;

export default Alert;
