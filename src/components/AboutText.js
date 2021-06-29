import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const AboutText = () => {
  return (
    <StyledText>
      <h2>
        Go hiking in 5 European countries and discover why the locals can’t get
        enough of nature.
      </h2>
      <h4>Our most scenic landscapes are definitely best enjoyed on foot.</h4>
    </StyledText>
  );
};

const StyledText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 80%;

  h2 {
    font-size: 3rem;
    font-weight: lighter;
    margin-bottom: 4rem;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: lighter;
    margin-bottom: 2rem;
  }
`;

export default AboutText;
