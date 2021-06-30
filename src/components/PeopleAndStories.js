import { motion, useAnimation } from "framer-motion";
import React from "react";
import styled from "styled-components";
import PhotoTextCard from "./PhotoTextCard";
import StoriesText from "./StoriesText";
import hikerGirl2 from "../img/hikerGirl2.jpg";
import hikerGroup4 from "../img/hikerGroup4.jpg";
import hikerMan3 from "../img/hikerMan3.jpg";
import hikerPuppy from "../img/hikerPuppy.jpg";
import { useInView } from "react-intersection-observer";
import {
  storiesAnimationWrapper,
  storiesAnimationX,
  storiesAnimationY,
} from "../animations";

const PeopleAndStories = () => {
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
              paragraph={`"A Golden Retriever Puppy approves of Sylvain's services"`}
              title='Golden Retriever Puppy'
            />
          </motion.div>
          <motion.div variants={storiesAnimationY}>
            <PhotoTextCard
              img={hikerMan3}
              paragraph='"Not all those who wander are lost."'
              title='Enzo Russo'
            />
          </motion.div>
          <motion.div variants={storiesAnimationY}>
            <PhotoTextCard
              img={hikerGroup4}
              paragraph='"A unique place to explore and discover by yourself or with a group of friends"'
              title='A group of friends'
            />
          </motion.div>
          <motion.div variants={storiesAnimationY}>
            <PhotoTextCard
              img={hikerGirl2}
              paragraph='"A unique space to unload and recharge your batteries away from the city life"'
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
