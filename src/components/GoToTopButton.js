import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { topButtonAnimation } from "../animations";

const GoToTopButton = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <StyledButton>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={topButtonAnimation}
            initial='initial'
            animate='animate'
            transition='transition'
            exit={{ y: 500, transition: { duration: 0.55 } }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
              transition: { duration: 0.5, yoyo: Infinity },
            }}
          >
            <motion.a
              // whileHover={{
              //   y: [0, -15, 15],
              //   transition: { yoyo: Infinity, duration: 1.15 },
              // }}
              initial={{ y: 0 }}
              href='#showcase'
            >
              <i className='las la-arrow-up'></i>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledButton>
  );
};

const StyledButton = styled(motion.div)`
  div {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #000;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    position: fixed;
    bottom: 1%;
    right: 1%;
    font-size: 5rem;
    color: #fff;
    cursor: pointer;

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    transition: all 0.5s ease;

    i,
    a {
      font-size: 2rem;
      text-decoration: none;
      color: #fff;
      transition: all 0.5s ease;
      width: 100%;
    }
  }
  div:hover {
    background: #fff;
    border: 1px solid #fff;
  }
  div:hover a,
  div:hover i {
    /* transform: translateY(-1px); */
    color: #000;
  }
`;

export default GoToTopButton;
