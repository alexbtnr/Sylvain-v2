import { motion, useAnimation } from "framer-motion";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  cardsAnimationHover,
  cardsIconAnimation,
  cardsTitleAnimation,
  cardsParagraphAnimation,
} from "../animations";
import { LanguageContext } from "../contexts/LanguageContext";

const AboutCards = () => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const mobileAnimationsHandler = (e) => {
    if (
      (e._reactName === "onClick" || e.type === "click") &&
      (window.innerWidth < 800 || window.screen.width < 800)
    ) {
      if (e.target.id === "climb-quietness") {
        if (open1 === false) {
          controls1.start("animate");
          setOpen1(true);
        } else {
          controls1.start("initial");
          setOpen1(false);
        }
      } else if (e.target.id === "capture-sights") {
        if (open2 === false) {
          controls2.start("animate");
          setOpen2(true);
        } else {
          controls2.start("initial");
          setOpen2(false);
        }
      } else if (e.target.id === "forest-hiking") {
        if (open3 === false) {
          controls3.start("animate");
          setOpen3(true);
        } else {
          controls3.start("initial");
          setOpen3(false);
        }
      }
    }
  };

  return (
    <StyledCards>
      <motion.div
        variants={cardsAnimationHover}
        whileHover='animate'
        animate={controls1}
        onClick={mobileAnimationsHandler}
        initial='initial'
        id='climb-quietness'
      >
        <motion.i
          variants={cardsIconAnimation}
          className='las la-mountain la-3x'
        ></motion.i>
        <motion.p variants={cardsParagraphAnimation}>{lang.card1Text}</motion.p>
        <motion.h4 variants={cardsTitleAnimation}>{lang.card1Title}</motion.h4>
      </motion.div>
      <motion.div
        variants={cardsAnimationHover}
        whileHover='animate'
        animate={controls2}
        onClick={mobileAnimationsHandler}
        whileTap='animate'
        initial='initial'
        id='capture-sights'
      >
        <motion.i
          variants={cardsIconAnimation}
          className='las la-camera-retro la-3x'
        ></motion.i>
        <motion.p variants={cardsParagraphAnimation}>{lang.card2Text}</motion.p>
        <motion.h4 variants={cardsTitleAnimation}>{lang.card2Title}</motion.h4>
      </motion.div>
      <motion.div
        variants={cardsAnimationHover}
        whileHover='animate'
        animate={controls3}
        onClick={mobileAnimationsHandler}
        whileTap='animate'
        initial='initial'
        id='forest-hiking'
      >
        <motion.i
          variants={cardsIconAnimation}
          className='las la-tree la-3x'
        ></motion.i>
        <motion.p variants={cardsParagraphAnimation}>{lang.card3Text}</motion.p>
        <motion.h4 variants={cardsTitleAnimation}>{lang.card3Title}</motion.h4>
      </motion.div>
    </StyledCards>
  );
};

const StyledCards = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: space-evenly;

  div {
    flex: 1;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  @media (max-width: 830px) {
    display: block;
    margin-bottom: 15rem;

    div {
      background: #000;
      padding: 2rem;
      border: 1px solid #fff;
      width: 90%;
      margin: 0 auto 2rem;
    }
  }
`;

export default AboutCards;
