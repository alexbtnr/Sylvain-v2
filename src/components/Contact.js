import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

import beautifulTree from "../img/beautifulTree.jpg";

const Contact = () => {
  return (
    <StyledContact id='contact'>
      <div className='overlay'>
        <div className='container'>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  margin: 2rem 0 0;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: url(${beautifulTree}) no-repeat center center/cover;
  color: #fff;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);

    .container {
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    height: 65rem;

    .container {
      max-height: 60%;
    }
  }
`;

export default Contact;
