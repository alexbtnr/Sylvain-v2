import { motion } from "framer-motion";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ hrefList, textList }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      {location.pathname === "/reservations" ? null : (
        <div>
          <div className='normal-nav'>
            <ul>
              <li>
                <a href={hrefList[0]}>{textList[0]}</a>
              </li>
              <li>
                <a href={hrefList[1]}>{textList[1]}</a>
              </li>
              <li>
                <a href={hrefList[2]}>{textList[2]}</a>
              </li>
              <li>
                <a href={hrefList[3]}>{textList[3]}</a>
              </li>
              <li>
                <a href={hrefList[4]}>{textList[4]}</a>
              </li>
              <li>
                <a href={hrefList[5]}>{textList[5]}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)``;

export default Nav;
