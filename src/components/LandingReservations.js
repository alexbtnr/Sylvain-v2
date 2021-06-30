import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import backgroundForest from "../img/backgroundForest.jpg";
import MainTitle from "./MainTitle";
import LandingForm from "./LandingForm";
import LandingReservationsForm from "./LandingReservationsForm";
import ScrollArrow from "./ScrollArrow";
import { useLocation } from "react-router-dom";

const LandingReservations = ({ formList, setFormList, alert, setAlert }) => {
  const location = useLocation();

  return (
    <StyledLanding id='showcase'>
      {location.pathname === "/" ? (
        <div className='container'>
          <header className='header'>
            <Logo />
            <Nav hrefList={["/", "#contact"]} textList={["Home", "Contact"]} />
          </header>
          <div className='main-content'>
            <MainTitle />
            <LandingForm formList={formList} setFormList={setFormList} />
            <ScrollArrow />
          </div>
        </div>
      ) : (
        <div className='container'>
          <header className='header'>
            <Logo />
            <Nav hrefList={["/", "#contact"]} textList={["Home", "Contact"]} />
          </header>

          <div className='main-content'>
            <LandingReservationsForm
              formList={formList}
              setFormList={setFormList}
              alert={alert}
              setAlert={setAlert}
            />
            <ScrollArrow hrefCheck={true} />
          </div>
        </div>
      )}
    </StyledLanding>
  );
};

const StyledLanding = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: url(${backgroundForest}) no-repeat center center/cover;

  .container {
    margin: auto;

    .header {
      height: 20vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      justify-content: center;
      align-items: center;
      margin-top: 6rem;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    height: 70rem;

    .container {
      min-width: 100%;

      .header {
        position: relative;
      }
    }
  }
`;

export default LandingReservations;
