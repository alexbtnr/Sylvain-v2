import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const PhotoTextCard = ({ img, paragraph, title }) => {
  return (
    <StyledCard>
      <img src={img} alt='title' />
      <div className='card-text'>
        <p>{paragraph}</p>
        <h4>{title}</h4>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  background: #000;
  color: #fff;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 95%;
    height: 70%;
    object-position: center;
    object-fit: cover;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-bottom: 1.5rem;
    gap: 1rem;

    h4 {
      text-transform: uppercase;
      font-weight: lighter;
      letter-spacing: 1px;
    }
  }
`;

export default PhotoTextCard;
