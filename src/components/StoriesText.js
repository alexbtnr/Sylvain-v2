import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/LanguageContext";

const StoriesText = () => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  return (
    <StyledStoriesText>
      <h4>{lang.storiesMainTitle}</h4>
      <h2>{lang.storiesSecondaryTitle}</h2>
      <p>{lang.storiesMainText}</p>
    </StyledStoriesText>
  );
};

const StyledStoriesText = styled(motion.div)`
  h4 {
    text-transform: uppercase;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: lighter;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.1rem;
  }

  @media (max-width: 800px) {
    padding-bottom: 2rem;
  }
`;

export default StoriesText;
