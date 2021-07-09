import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/LanguageContext";
import roFlag from "../img/roFlag.png";
import ukFlag from "../img/ukFlag.png";

const LanguageToggler = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { isRo } = useContext(LanguageContext);

  return (
    <StyledToggler onClick={toggleLanguage}>
      {/* {isRo ? `Ro` : `En`} */}
      {isRo ? (
        <div className='language-setter'>
          <img src={roFlag} alt='flag of Romania' />
          <span>RO</span>
        </div>
      ) : (
        <div className='language-setter'>
          <img src={ukFlag} alt='flag of United Kingdom' />
          <span>UK</span>
        </div>
      )}
    </StyledToggler>
  );
};

// const StyledToggler = styled.li`
//   list-style: none;
//   cursor: pointer;
//   margin-left: 1rem;
//   background: #333;
//   border: 1px solid #000;
//   padding: 0.5rem;
//   text-align: center;
//   width: 10rem;
//   font-size: 1.2rem;
//   color: #eee;
//   transition: all 0.5s ease;
//   &:hover {
//     color: #333;
//     background: #eee;
//     transform: scale(1.1);
//   }
// `;

const StyledToggler = styled.div`
  div.language-setter {
    display: flex;
    text-align: center;
    align-items: center;
    margin-left: 1rem;
    transition: all 0.5s ease;
    cursor: pointer;
    img {
      width: 2rem;
    }
    span {
      margin-left: 0.5rem;
    }

    &:hover {
      /* color: #333; */
      /* background: #eee; */
      transform: scale(1.1);
    }
  }
`;

export default LanguageToggler;
