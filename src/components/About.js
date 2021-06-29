import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout id='about'>
      <div className='container'>about lmao</div>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.section)`
  background: #000;
  color: #fff;
  width: 100%;
  height: 90vh;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
`;

export default About;
