import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import PhotoTextCard from "./PhotoTextCard";
import StoriesText from "./StoriesText";
import hikerGirl2 from "../img/hikerGirl2.jpg";
import hikerGroup4 from "../img/hikerGroup4.jpg";
import hikerMan3 from "../img/hikerMan3.jpg";
import hikerPuppy from "../img/hikerPuppy.jpg";

const PeopleAndStories = () => {
  return (
    <StyledStories id='stories'>
      <div className='container'>
        <StoriesText />
        <div className='grid-container'>
          <div>
            <PhotoTextCard
              img={hikerPuppy}
              paragraph={`"A Golden Retriever Puppy approves of Sylvain's services"`}
              title='Golden Retriever Puppy'
            />
          </div>
          <div>
            <PhotoTextCard
              img={hikerMan3}
              paragraph='"Not all those who wander are lost."'
              title='Enzo Russo'
            />
          </div>
          <div>
            <PhotoTextCard
              img={hikerGroup4}
              paragraph='"A unique place to explore and discover by yourself or with a group of friends"'
              title='A group of friends'
            />
          </div>
          <div>
            <PhotoTextCard
              img={hikerGirl2}
              paragraph='"A unique space to unload and recharge your batteries away from the city life"'
              title='Anna Johansen'
            />
          </div>
        </div>
      </div>
    </StyledStories>
  );
};

const StyledStories = styled(motion.div)`
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
`;

export default PeopleAndStories;
