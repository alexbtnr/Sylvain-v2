import { motion, useAnimation } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import PhotoTextCard from "./PhotoTextCard";
import StoriesText from "./StoriesText";
import hikerGirl2 from "../img/hikerGirl2.jpg";
import hikerGroup4 from "../img/hikerGroup4.jpg";
import hikerMan3 from "../img/hikerMan3.jpg";
import hikerPuppy from "../img/hikerPuppy.jpg";
import { useInView } from "react-intersection-observer";
import { storiesAnimationWrapper, storiesAnimationY } from "../animations";
import { LanguageContext } from "../contexts/LanguageContext";

const PeopleAndStories = () => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  const controls = useAnimation();
  const [element, view] = useInView();

  if (view) {
    controls.start("animate");
  }

  return (
    <StyledStories id='stories'>
      <div className='container'>
        <StoriesText />
        <motion.div
          className='grid-container'
          variants={storiesAnimationWrapper}
          initial='initial'
          animate={controls}
          ref={element}
        >
          <motion.div variants={storiesAnimationY}>
            <PhotoTextCard
              img={hikerPuppy}
              paragraph={`${lang.storiesText1}`}
              title={`${lang.storiesTitle1}`}
            />
          </motion.div>
          <motion.div variants={storiesAnimationY}>
            <PhotoTextCard
              img={hikerMan3}
              paragraph={`${lang.storiesText2}`}
              title='Enzo Russo'
            />
          </motion.div>
          <motion.div variants={storiesAnimationY}>
            <PhotoTextCard
              img={hikerGroup4}
              paragraph={`${lang.storiesText3}`}
              title={`${lang.storiesTitle3}`}
            />
          </motion.div>
          <motion.div variants={storiesAnimationY}>
            <PhotoTextCard
              img={hikerGirl2}
              paragraph={`${lang.storiesText4}`}
              title='Anna Johansen'
            />
          </motion.div>
        </motion.div>
      </div>
    </StyledStories>
  );
};

const StyledStories = styled(motion.div)`
  background: #e5eaef;

  .container {
    padding: 5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      width: 90%;
    }
  }

  @media (max-width: 800px) {
    .container {
      display: block;
      text-align: center;

      .grid-container {
        display: block;
        margin: 0 auto;

        div {
          margin: 1rem 0;
        }
      }
    }
  }
`;

export default PeopleAndStories;
