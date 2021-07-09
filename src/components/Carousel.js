import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

import cabinDay from "../img/cabinDay.jpg";
import cabinNight from "../img/cabinNight.jpg";
import cabinCity from "../img/cabinCity.jpg";
import cabinInterior1 from "../img/cabinInterior1.jpg";
import cabinInterior2 from "../img/cabinInterior2.jpg";
import cabinInterior3 from "../img/cabinInterior3.jpg";

const images = [
  {
    id: 1,
    imageName: cabinDay,
    imageId: "cabinDay",
    secondaryTitle: "Lorem ipsum dolor sit amet.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos dolorem quae exercitationem non assumenda?",
  },
  {
    id: 2,
    imageName: cabinNight,
    imageId: "cabinNight",
    secondaryTitle: "Lorem ipsum dolor sit amet.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos dolorem quae exercitationem non assumenda?",
  },
  {
    id: 3,
    imageName: cabinCity,
    imageId: "cabinCity",
    secondaryTitle: "Lorem ipsum dolor sit amet.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos dolorem quae exercitationem non assumenda?",
  },
  {
    id: 4,
    imageName: cabinInterior1,
    imageId: "cabinInterior1",
    secondaryTitle: "Lorem ipsum dolor sit amet.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos dolorem quae exercitationem non assumenda?",
  },
  {
    id: 5,
    imageName: cabinInterior2,
    imageId: "cabinInterior2",
    secondaryTitle: "Lorem ipsum dolor sit amet.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos dolorem quae exercitationem non assumenda?",
  },
  {
    id: 6,
    imageName: cabinInterior3,
    imageId: "cabinInterior3",
    secondaryTitle: "Lorem ipsum dolor sit amet.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eos dolorem quae exercitationem non assumenda?",
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledCarousel id='carousel'>
      <div className='container'>
        <div className='slider-container'>
          <Slider {...settings}>
            {images.map((image) => (
              <CarouselItem
                key={image.id}
                img={image.imageName}
                id={image.imageId}
                secondaryTitle={image.secondaryTitle}
                paragraph={image.paragraph}
              />
            ))}
          </Slider>
        </div>
      </div>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.section`
  .container {
    padding-bottom: 2rem;

    .slider-container {
      text-align: center;

      .slick-slider {
        max-width: 97%;
        margin: auto;

        button.slick-arrow::before {
          color: #000;
          opacity: 0.5;
          transition: all 0.75s ease;
        }
        button.slick-arrow:hover::before,
        button.slick-arrow:hover {
          opacity: 1;
        }

        .slick-dots {
          li {
            button::before {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .container {
      .slider-container {
        .slick-slider {
          max-width: 75%;

          .slick-next:before,
          .slick-prev:before {
            font-size: 45px;
          }

          .slick-prev {
            left: -50px;
          }
        }
      }
    }
  }
`;

export default Carousel;
