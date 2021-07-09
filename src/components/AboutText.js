import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/LanguageContext";

const AboutText = () => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  return (
    <StyledText>
      <h2>{lang.aboutMainText}</h2>
      <h4>{lang.aboutSecondaryText}</h4>
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

  @media (max-width: 800px) {
    display: block;
    margin-top: 16rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;

export default AboutText;
