import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import InfoImage from "../components/InfoImage";
import PeopleAndStories from "../components/PeopleAndStories";
import PhotoGallery from "../components/PhotoGallery";

const Home = ({ formList, setFormList }) => {
  return (
    <div>
      <Landing formList={formList} setFormList={setFormList} />
      <About />
      <InfoImage />
      <PeopleAndStories />
      <PhotoGallery />
    </div>
  );
};

export default Home;
