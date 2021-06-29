import React from "react";
import Landing from "../components/Landing";

const Home = ({ formList, setFormList }) => {
  return (
    <div>
      <Landing formList={formList} setFormList={setFormList} />
    </div>
  );
};

export default Home;
