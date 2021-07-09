import React, { useContext } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { contactTextAnimationWrapper, contactAnimationX } from "../animations";

import { formButtonHover, formInputHover } from "../animations";
import { useInView } from "react-intersection-observer";
import { LanguageContext } from "../contexts/LanguageContext";

const ContactForm = () => {
  const { isRo, ro, en } = useContext(LanguageContext);
  const lang = isRo ? ro : en;
  const controls = useAnimation();
  const [element3, view] = useInView({ threshold: 0.8 });

  if (view) {
    controls.start("animate");
  }

  return (
    <StyledContactForm>
      <motion.div
        variants={contactTextAnimationWrapper}
        initial='initial'
        animate={controls}
        ref={element3}
        className='contact-text'
      >
        <motion.h2 variants={contactAnimationX} className='relax'>
          {lang.contactText1}
        </motion.h2>
        <motion.div variants={contactAnimationX} className='no'>
          <h4>&</h4>
          <h4>{lang.contactText2}</h4>
        </motion.div>
        <motion.h2 variants={contactAnimationX} className='stress'>
          {lang.contactText3}
        </motion.h2>
      </motion.div>
      <form name='contact' method='POST' className='contact-form'>
        <input type='hidden' name='form-name' value='contact' />
        <h4 className='contact-message'>{lang.contactMsg}</h4>
        <input
          type='text'
          placeholder='Don’t fill this out if you’re human!'
          className='hidden-pot'
        />
        <div className='form-group'>
          <motion.input
            variants={formInputHover}
            whileHover='hover'
            transition={{ duration: 0.5 }}
            initial='initial'
            type='text'
            id='name'
            name='name'
            placeholder={lang.contactPlaceholderName}
            required
          />
          <motion.input
            variants={formInputHover}
            whileHover='hover'
            transition={{ duration: 0.5 }}
            initial='initial'
            type='text'
            name='subject'
            placeholder={lang.contactPlaceholderSubject}
            required
          />
        </div>

        <motion.input
          variants={formInputHover}
          whileHover='hover'
          transition={{ duration: 0.5 }}
          initial='initial'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <motion.textarea
          variants={formInputHover}
          whileHover='hover'
          transition={{ duration: 0.5 }}
          initial='initial'
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder={lang.contactPlaceholderMessage}
          required
        ></motion.textarea>
        <motion.input
          variants={formButtonHover}
          whileHover='hover'
          transition={{ duration: 0.5 }}
          initial='initial'
          type='submit'
          value={lang.contactBtn}
          className='form-button'
        />
      </form>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15rem;
  align-items: center;

  /* width: 100%; */
  width: 80%;

  .contact-text {
    /* max-width: 20%; */
    flex: 2;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 0 2rem;
    justify-content: center;

    .no {
      display: flex;
      justify-content: space-between;
      width: 82%;
      background: rgba(0, 0, 0, 0.8);
      align-items: center;

      h4 {
        font-size: 2rem;
      }
    }
    h2.relax {
      letter-spacing: 0.6rem;
    }
    h2 {
      font-size: 4rem;
      /* max-width: 50%; */
      text-transform: uppercase;
    }
  }

  .contact-form {
    display: flex;
    flex: 3;

    flex-direction: column;

    .hidden-pot {
      display: none;
    }

    .contact-message {
      font-size: 1.2rem;
      /* background: rgba(0, 0, 0, 0.8); */
      margin-bottom: 0.5rem;
    }

    .form-group {
      display: flex;

      #name {
        border-right: none;
      }
    }

    input,
    textarea {
      height: 3.8rem;
      color: #fff;
      width: 10rem;
      /* text-align: center; */
      padding: 0 1.5rem;
      outline: none;
      border: 2px solid #fff;
      /* border: 2px solid #812f2f; */
      background: #000;
      border-bottom: 0;
      width: 100%;
    }
    textarea {
      border: 2px solid #fff;
      padding: 1.5rem;
      font-family: "Roboto", sans-serif;
      height: 8rem;
    }

    .form-button {
      height: 3.8rem;
      width: 10rem;
      border: 2px solid #fff;
      background: #444;
      font-weight: 500;
      font-size: 1.1rem;
      letter-spacing: 2px;
      cursor: pointer;
      color: #fff;
      border-top: none;
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 5rem;
    .contact-text {
      display: none;
    }
    .contact-form {
      .contact-message {
        margin-bottom: 0;
        padding: 1rem 0.5rem;
        background: rgba(0, 0, 0, 0.6);
        text-align: center;
        border: 2px solid #fff;
        border-bottom: none;
        font-weight: lighter;
      }
    }
  }
`;

export default ContactForm;
