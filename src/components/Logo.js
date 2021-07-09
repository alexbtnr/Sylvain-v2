import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import logo2 from "../img/logo2.png";
import { Link } from "react-router-dom";
import LanguageToggler from "./LanguageToggler";

const Logo = () => {
  return (
    <LogoWrapper>
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
      <LanguageToggler />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLogo = styled(motion.div)`
  /* margin-right: 1rem; */
  img {
    cursor: pointer;
  }
`;

export default Logo;
