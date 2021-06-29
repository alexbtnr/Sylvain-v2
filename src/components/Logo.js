import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import logo2 from "../img/logo2.png";

const Logo = () => {
  return (
    <StyledLogo>
      <motion.img
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.8, type: "spring", bounce: "0.5" }}
        src={logo2}
        alt='Sylvain'
      />
    </StyledLogo>
  );
};

const StyledLogo = styled(motion.div)`
  img {
    cursor: pointer;
  }
`;

export default Logo;
