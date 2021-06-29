import React from "react";
import styled from "styled-components";

import { motion, useAnimation } from "framer-motion";
import {
  contactTextAnimationWrapper,
  contactAnimationX,
  contactAnimation_X,
  contactAnimationY,
} from "../animations";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [element4, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start("animate");
  }

  return (
    <StyledFooter>
      <div className='container'>
        <motion.div
          variants={contactTextAnimationWrapper}
          ref={element4}
          initial='initial'
          animate={controls}
          className='flex-container'
        >
          <motion.div
            variants={contactAnimationX}
            className='flex-group'
            id='first'
          >
            <p>Copyright © 2021 Alex Butnaru.</p>
            <p>
              Logo made with
              <span className='chevron-right'>
                <i className='las la-chevron-right'></i>
                <a
                  href='https://www.logomaker.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LogoMaker.com
                </a>
                .
              </span>
            </p>
            <p className='last-link'>
              Images and video taken from
              <span className='chevron-right'>
                <i className='las la-chevron-right'></i>
                <a
                  href='https://www.pexels.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Pexels.com
                </a>
                .
              </span>
            </p>
          </motion.div>
          <div className='line' id='first-line'></div>
          <motion.div
            variants={contactAnimationY}
            className='flex-group'
            id='second'
          >
            <p>
              Inspiration for design from
              <span className='chevron-right'>
                <i className='las la-chevron-right'></i>
                <a
                  href='https://shelter-html5-template.webflow.io/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </span>
            </p>
            <p>
              <span className='chevron-right'>
                <i className='las la-chevron-right'></i>
                <a
                  href='http://preview.themeforest.net/item/upking-hiking-club-wordpress-theme/full_screen_preview/21348987'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </span>
            </p>
            <p className='last-inspiration'>
              and
              <span className='chevron-right'>
                <i className='las la-chevron-right'></i>
                <a
                  href='https://nicepage.com/website-design/preview/norway-17055?device=desktop'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </span>
            </p>
          </motion.div>
          <div className='line' id='second-line'></div>

          <motion.div
            variants={contactAnimation_X}
            className='flex-group'
            id='third'
          >
            <div className='socials'>
              <a
                href='https://alex-butnaru-portfolio.netlify.app/'
                target='_blanks'
              >
                <i className='las la-user la-2x'></i>
              </a>
              <a href='https://github.com/alexbtnr' target='_blanks'>
                <i className='lab la-github la-2x'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/alex-butnaru-21a4861b4/'
                target='_blanks'
              >
                <i className='lab la-linkedin la-2x'></i>
              </a>
            </div>
            <p className='email-contact'>
              <i className='las la-envelope la-2x'></i> Email:{" "}
              <a href='mailto:alex.butnaru1102@gmail.com'>
                alex.butnaru1102@gmail.com
              </a>
            </p>
            <p>
              <i className='las la-phone la-2x'></i> Phone: 0751 704 584
            </p>
          </motion.div>
        </motion.div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background: rgba(0, 0, 0, 0.8);
  .container {
    margin: auto;
    min-height: 20vh;

    width: 100%;

    .flex-container {
      display: flex;
      min-width: 100%;
      justify-content: space-evenly;
      align-items: center;

      div.line {
        display: none;
      }

      .flex-group#second {
        text-align: end;
      }

      .flex-group#third {
        /* margin-left: 10rem; */
        /* width: 20%; */
        .socials {
          display: flex;
          justify-content: flex-start;
          gap: 5rem;
          /* text-align: center; */
          align-items: center;
          a {
            border: 1px solid #fff;
            border-radius: 50%;
            transition: all 0.5s ease;
          }
          a:hover {
            background: #fff;
            transform: scale(1.2);
          }
          a:hover i {
            color: #000;
            transform: scale(1.2);
          }
          i {
            padding: 0.2rem;
            transition: all 0.5s ease;
          }
        }
      }

      span.chevron-right:hover .la-chevron-right {
        transform: translateX(2px);
      }

      a {
        text-decoration: none;
        color: #fff;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 800px) {
    min-height: 30rem;
    bottom: 0;
    .container {
      /* max-width: 20%; */
      /* height: 100%; */
      .flex-container {
        flex-direction: column;
        align-items: center;
        height: 30rem;

        div.line {
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          width: 80%;
          display: block;
        }
        div.line#first-line {
          order: 2;
        }
        div.line#second-line {
          order: 4;
        }

        .flex-group#first {
          text-align: center;
          order: 3;
          p {
            margin-bottom: 0.5rem;
          }
          p.last-link {
            margin-bottom: 0;
          }
        }

        .flex-group#third {
          order: 1;
          .socials,
          p.email-contact {
            margin-bottom: 0.5rem;
          }
        }

        .flex-group#second {
          order: 5;
          p {
            margin-bottom: 0.5rem;
          }
          p.last-inspiration {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export default Footer;
