import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/LanguageContext";

const LanguageToggler = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { isRo } = useContext(LanguageContext);

  return (
    <StyledToggler onClick={toggleLanguage}>
      {isRo ? `Limba: Ro` : `Language: En`}
    </StyledToggler>
  );
};

const StyledToggler = styled.li`
  list-style: none;
  cursor: pointer;
  margin-left: 1rem;
  background: #333;
  border: 1px solid #000;
  padding: 0.5rem;
  text-align: center;
  width: 10rem;
  font-size: 1.2rem;
  color: #eee;
  transition: all 0.5s ease;
  &:hover {
    color: #333;
    background: #eee;
    transform: scale(1.1);
  }
`;

export default LanguageToggler;
