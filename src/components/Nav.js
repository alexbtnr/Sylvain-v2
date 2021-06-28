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

const StyledNav = styled(motion.nav)`
  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      margin-left: 2rem;
      font-weight: bold;
      font-size: 1.5rem;

      a {
        color: #000;
        text-decoration: none;
      }
    }

    li:after {
      display: block;
      content: "";
      border-bottom: solid 2px #000;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }
    li:hover:after {
      opacity: 1;
    }
  }
`;

export default Nav;
