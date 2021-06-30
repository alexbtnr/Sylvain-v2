import React, { useEffect } from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import InfoImage from "../components/InfoImage";
import PeopleAndStories from "../components/PeopleAndStories";
import PhotoGallery from "../components/PhotoGallery";
import Carousel from "../components/Carousel";
import Video from "../components/Video";
import Contact from "../components/Contact";
import GoToTopButton from "../components/GoToTopButton";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Home = ({ formList, setFormList }) => {
  useEffect(() => {
    document.title = "Sylvain | Homepage";
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Landing formList={formList} setFormList={setFormList} />
      <About />
      <InfoImage />
      <PeopleAndStories />
      <PhotoGallery />
      <Carousel />
      <Video />
      <Contact />
      <GoToTopButton showBelow={400} />
    </motion.div>
  );
};

export default Home;
