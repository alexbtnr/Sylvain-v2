import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import logo2 from "../img/logo2.png";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo2} alt='Sylvain' />
    </StyledLogo>
  );
};

const StyledLogo = styled(motion.div)`
  img {
    cursor: pointer;
  }
`;

export default Logo;
