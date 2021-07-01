import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styled from "styled-components";

const MainTitle = () => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  return (
    <StyledTitle>
      {lang.mainTitle}
      <br /> - John Muir
    </StyledTitle>
  );
};

const StyledTitle = styled.h1``;

export default MainTitle;
