import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/LanguageContext";

const CarouselItem = ({ id, img, secondaryTitle, paragraph }) => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  return (
    <StyledItem>
      <img src={img} alt={id} id={id} />
      <div className='carousel-text'>
        <h6>{lang.carouselTitle1}</h6>
        <h4>{secondaryTitle}</h4>
        <p>{paragraph}</p>
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  /* max-width: 50%; */
  margin: auto;

  display: flex;
  img {
    height: 35rem;
    width: 60%;
    object-position: center bottom;
  }

  img#cabinInterior1 {
    object-position: center center;
  }

  .carousel-text {
    width: 40%;
    color: #fff;
    background: #000;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 3rem;
    justify-content: flex-end;

    h6 {
      font-weight: 100;
      opacity: 0.5;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    h4 {
      padding: 2rem 0;
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }

  @media (max-width: 830px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img,
    .carousel-text {
      width: 100%;
      height: 20rem;
    }
    .carousel-text {
      padding: 1rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 15rem;
    }
  }
`;

export default CarouselItem;
