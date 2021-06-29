import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import backgroundForest from "../img/backgroundForest.jpg";
import MainTitle from "./MainTitle";
import LandingForm from "./LandingForm";
import ScrollArrow from "./ScrollArrow";

const Landing = () => {
  return (
    <StyledLanding id='showcase'>
      <div className='container'>
        <header className='header'>
          <Logo />
          <Nav
            hrefList={[
              "#about",
              "#stories",
              "#gallery",
              "#carousel",
              "#video",
              "#contact",
            ]}
            textList={[
              "About",
              "Stories",
              "Gallery",
              "Accomodation",
              "Video",
              "Contact",
            ]}
          />
        </header>
        <div className='main-content'>
          <MainTitle />
          <LandingForm />
          <ScrollArrow />
        </div>
      </div>
    </StyledLanding>
  );
};

const StyledLanding = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: url(${backgroundForest}) no-repeat center center/cover;

  .container {
    .header {
      height: 20vh;
      /* background: red; */
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
`;

export default Landing;
