import React, { useContext } from "react";
import hikerGroup2 from "../img/hikerGroup2.jpg";
import hikerGroup3 from "../img/hikerGroup3.jpg";
import forestRoad from "../img/forestRoad.jpg";
import lakeMountain from "../img/lakeMountain.jpg";
import orangeTrees from "../img/orangeTrees.jpg";
import hikerGroup1 from "../img/hikerGroup1.jpg";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  galleryAnimationWrapper,
  galleryTitleAnimationX,
  galleryAnimationY,
} from "../animations";
import { SRLWrapper } from "simple-react-lightbox";
import { LanguageContext } from "../contexts/LanguageContext";

const PhotoGallery = () => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  const controls = useAnimation();
  const [element2, view] = useInView();

  if (view) {
    controls.start("animate");
  } else {
    controls.start("initial");
  }

  const images = [
    { id: "1", imageName: hikerGroup1 },
    { id: "2", imageName: hikerGroup2 },
    { id: "3", imageName: hikerGroup3 },
    { id: "4", imageName: lakeMountain },
    { id: "5", imageName: forestRoad },
    { id: "6", imageName: orangeTrees },
  ];

  const options = {
    settings: {
      autoplaySpeed: 3000,
    },
    caption: {
      showCaption: false,
    },
    progressBar: {
      showProgressBar: true,
    },
  };

  return (
    <StyledGallery id='gallery'>
      <motion.div
        variants={galleryAnimationWrapper}
        initial='initial'
        animate={controls}
        ref={element2}
        className='container'
      >
        <motion.h4 variants={galleryTitleAnimationX}>
          {lang.galleryTitle}
        </motion.h4>
        <SRLWrapper options={options}>
          <div className='images-container'>
            {images.map((image) => (
              <motion.div
                variants={galleryAnimationY}
                key={image.id}
                className='image-wrapper'
              >
                <a href={image.imageName}>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    id={image.id}
                    src={image.imageName}
                    alt={image.imageName}
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </SRLWrapper>
      </motion.div>
    </StyledGallery>
  );
};

const StyledGallery = styled(motion.section)`
  padding: 2rem 0;

  .container {
    height: 100%;
    position: relative;

    h4 {
      font-weight: lighter;
      font-size: 2.5rem;
      position: absolute;
    }

    .images-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: end;
      height: 100%;
      gap: 1.5rem;

      div.image-wrapper {
        width: 100%;
        height: 35rem;
        overflow: hidden;
        img {
          height: 100%;
          cursor: pointer;
        }
      }
    }
    div.image-wrapper:nth-child(2),
    div.image-wrapper:nth-child(5) {
      height: 40rem;
      img {
        height: 100%;
      }
    }
    div.image-wrapper:nth-child(3),
    div.image-wrapper:nth-child(6) {
      align-self: center;
    }
  }

  @media (max-width: 800px) {
    .container {
      h4 {
        position: static;
        text-align: center;
        padding-bottom: 2rem;
      }

      .images-container {
        grid-template-columns: 1fr;

        div.image-wrapper {
          width: 80%;
          margin: 0 auto;
          height: 30rem;
        }
      }
    }
  }
`;

export default PhotoGallery;
