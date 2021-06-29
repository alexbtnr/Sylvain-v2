import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const AboutCards = () => {
  return (
    <StyledCards>
      <div>
        <i className='las la-mountain la-3x'></i>
        <p>
          From Mont Blanc to Mountain Jungfrau or The Carpathian Mountains, no
          matter the place, going up to the summit is one of the most serene
          things a human can experience.
        </p>
        <h4>Climb Into Quietness</h4>
      </div>
      <div>
        <i className='las la-camera-retro la-3x'></i>
        <p>
          You can take the trip when the landscape get painted in red, yellow,
          and orange during late summer and autumn in order to enjoy a majestic
          scenery.
        </p>
        <h4>Capture Breathtaking Sights</h4>
      </div>
      <div id='forest-hiking'>
        <i className='las la-tree la-3x'></i>
        <p>
          After a long winter, people of all age groups and social backgrounds
          head outdoors and go trekking in the mountains, along the coast, or in
          the forests.
        </p>
        <h4>Enjoy Forest Hiking</h4>
      </div>
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
