import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ScrollArrow = ({ hrefCheck }) => {
  return (
    <StyledArrow>
      <a href={hrefCheck ? "#contact" : "#about"}>
        <motion.i
          whileHover={{ scale: 1.1 }}
          className='las la-arrow-down la-2x'
        ></motion.i>
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

  @media (max-width: 830px) {
    display: none;
  }
`;

export default ScrollArrow;
