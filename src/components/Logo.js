import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import logo2 from "../img/logo2.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      <StyledLogo>
        <motion.img
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.8, type: "spring", bounce: "0.5" }}
          src={logo2}
          alt='Sylvain'
        />
      </StyledLogo>
    </Link>
  );
};

const StyledLogo = styled(motion.div)`
  img {
    cursor: pointer;
  }
`;

export default Logo;
