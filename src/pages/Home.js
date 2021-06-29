import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import InfoImage from "../components/InfoImage";

const Home = ({ formList, setFormList }) => {
  return (
    <div>
      <Landing formList={formList} setFormList={setFormList} />
      <About />
      <InfoImage />
    </div>
  );
};

export default Home;
