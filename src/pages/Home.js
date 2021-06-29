import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";

const Home = ({ formList, setFormList }) => {
  return (
    <div>
      <Landing formList={formList} setFormList={setFormList} />
      <About />
    </div>
  );
};

export default Home;
