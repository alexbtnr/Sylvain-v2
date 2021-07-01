import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Nav = ({ hrefList, textList }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      {location.pathname === "/reservations" ? (
        <div>
          <div className='normal-nav2'>
            <ul>
              <li className='language-setter'>
                <label htmlFor='switchBtn' className='ro'>
                  Ro
                </label>
                <label className='switch'>
                  <input type='checkbox' id='switchBtn' name='switchBtn' />
                  <span className='slider round'></span>
                </label>
                <label htmlFor='switchBtn' className='en'>
                  En
                </label>
              </li>

              <li>
                <Link to={hrefList[0]}>{textList[0]}</Link>
              </li>
              <li>
                <a href={hrefList[1]}>{textList[1]}</a>
              </li>
            </ul>
          </div>
          <div className='mobile-nav2'>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <li className='language-setter'>
                  <label htmlFor='switchBtn' className='ro'>
                    Ro
                  </label>
                  <label className='switch'>
                    <input type='checkbox' id='switchBtn' name='switchBtn' />
                    <span className='slider round'></span>
                  </label>
                  <label htmlFor='switchBtn' className='en'>
                    En
                  </label>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <Link to={hrefList[0]}>{textList[0]}</Link>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <a href={hrefList[1]}>{textList[1]}</a>
                </li>
              </motion.ul>
            )}
          </div>
          <div className='hamburger-wrapper'>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
      ) : (
        <div>
          <div className='normal-nav'>
            <ul>
              <li className='language-setter'>
                <label htmlFor='switchBtn' className='ro'>
                  Ro
                </label>
                <label className='switch'>
                  <input type='checkbox' id='switchBtn' name='switchBtn' />
                  <span className='slider round'></span>
                </label>
                <label htmlFor='switchBtn' className='en'>
                  En
                </label>
              </li>
              <li>
                <a href={hrefList[0]}>{textList[0]}</a>
              </li>
              <li>
                <a href={hrefList[1]}>{textList[1]}</a>
              </li>
              <li>
                <a href={hrefList[2]}>{textList[2]}</a>
              </li>
              <li>
                <a href={hrefList[3]}>{textList[3]}</a>
              </li>
              <li>
                <a href={hrefList[4]}>{textList[4]}</a>
              </li>
              <li>
                <a href={hrefList[5]}>{textList[5]}</a>
              </li>
            </ul>
          </div>
          <div className='mobile-nav'>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -500 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -500 }}
                  transition={{ duration: 0.5 }}
                >
                  <li className='language-setter'>
                    <label htmlFor='switchBtn' className='ro'>
                      Ro
                    </label>
                    <label className='switch'>
                      <input type='checkbox' id='switchBtn' name='switchBtn' />
                      <span className='slider round'></span>
                    </label>
                    <label htmlFor='switchBtn' className='en'>
                      En
                    </label>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <a href='#showcase'>Home</a>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <a href={hrefList[0]}>{textList[0]}</a>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <a href={hrefList[1]}>{textList[1]}</a>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <a href={hrefList[2]}>{textList[2]}</a>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <a href={hrefList[3]}>{textList[3]}</a>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <a href={hrefList[4]}>{textList[4]}</a>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <a href={hrefList[5]}>{textList[5]}</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className='hamburger-wrapper' id='wrapper'>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
      )}
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  ul {
    display: flex;
    list-style: none;
    align-items: center;

    .language-setter {
      display: flex;
      .switch {
        margin: 0 0.5rem;
      }
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 26px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 4px;
      background-color: #333;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #000;
    }
    input:checked + .slider:before {
      background-color: #fff;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #000;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    li {
      margin-left: 2rem;
      font-weight: bold;
      font-size: 1.5rem;

      a {
        color: #000;
        text-decoration: none;
      }
    }

    li:after {
      display: block;
      content: "";
      border-bottom: solid 2px #000;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    }
    li:hover:after {
      opacity: 1;
    }
  }

  div.mobile-nav,
  div.mobile-nav2,
  .hamburger-react {
    display: none;
  }

  @media (max-width: 800px) {
    div.normal-nav,
    div.normal-nav2 {
      display: none;
    }

    div.mobile-nav,
    div.mobile-nav2,
    .hamburger-react {
      display: block;
    }

    div.mobile-nav,
    div.mobile-nav2 {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;

      ul {
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        flex-direction: column;
        text-align: left;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 12vh;

        li {
          margin: 0;
          margin-bottom: 0.5rem;
          padding-left: 5%;
          width: 100%;
          color: #fff;

          a {
            color: #fff;
          }
        }
        li:after {
          border-bottom: 0;
        }
        li:first-child {
          border-top: 2px solid #fff;
        }
      }
    }
    .hamburger-wrapper {
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      z-index: 10;
      position: fixed;
      top: 3%;
      right: 3%;
    }
  }
`;

export default Nav;
