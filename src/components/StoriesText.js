import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const StoriesText = () => {
  return (
    <StyledStoriesText>
      <h4>PEOPLE AND STORIES</h4>
      <h2>Why Choose Sylvain?</h2>
      <p>
        Here are a couple of testimonials from our regular clients on why they
        prefer our hiking services.
      </p>
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
