import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ScrollArrow = ({ hrefCheck }) => {
  return (
    <StyledArrow>
      <a href={hrefCheck ? "#contact" : "#about"}>
        <i className='las la-arrow-down la-2x'></i>
      </a>
    </StyledArrow>
  );
};

const StyledArrow = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #fff;
    cursor: pointer;
  }
`;

export default ScrollArrow;
