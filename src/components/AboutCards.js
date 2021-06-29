import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  cardsAnimationHover,
  cardsIconAnimation,
  cardsTitleAnimation,
  cardsParagraphAnimation,
} from "../animations";

const AboutCards = () => {
  return (
    <StyledCards>
      <motion.div
        variants={cardsAnimationHover}
        whileHover='animate'
        whileTap='animate'
        initial='initial'
      >
        <motion.i
          variants={cardsIconAnimation}
          className='las la-mountain la-3x'
        ></motion.i>
        <motion.p variants={cardsParagraphAnimation}>
          From Mont Blanc to Mountain Jungfrau or The Carpathian Mountains, no
          matter the place, going up to the summit is one of the most serene
          things a human can experience.
        </motion.p>
        <motion.h4 variants={cardsTitleAnimation}>
          Climb Into Quietness
        </motion.h4>
      </motion.div>
      <motion.div
        variants={cardsAnimationHover}
        whileHover='animate'
        whileTap='animate'
        initial='initial'
      >
        <motion.i
          variants={cardsIconAnimation}
          className='las la-camera-retro la-3x'
        ></motion.i>
        <motion.p variants={cardsParagraphAnimation}>
          You can take the trip when the landscape get painted in red, yellow,
          and orange during late summer and autumn in order to enjoy a majestic
          scenery.
        </motion.p>
        <motion.h4 variants={cardsTitleAnimation}>
          Capture Breathtaking Sights
        </motion.h4>
      </motion.div>
      <motion.div
        variants={cardsAnimationHover}
        whileHover='animate'
        whileTap='animate'
        initial='initial'
        id='forest-hiking'
      >
        <motion.i
          variants={cardsIconAnimation}
          className='las la-tree la-3x'
        ></motion.i>
        <motion.p variants={cardsParagraphAnimation}>
          After a long winter, people of all age groups and social backgrounds
          head outdoors and go trekking in the mountains, along the coast, or in
          the forests.
        </motion.p>
        <motion.h4 variants={cardsTitleAnimation}>
          Enjoy Forest Hiking
        </motion.h4>
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

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 15rem;

    div {
      background: #000;
      padding: 2rem;
      border: 1px solid #fff;
      width: 90%;
      margin: 0 auto 2rem;

      i,
      p {
        padding-bottom: 1rem;
      }
    }
  }
`;

export default AboutCards;
