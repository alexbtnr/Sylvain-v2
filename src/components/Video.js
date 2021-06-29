import React from "react";
import styled from "styled-components";
import forestVideo from "../img/forestVideo.mp4";

const Video = () => {
  return (
    <StyledVideo id='video'>
      <div className='overlay'>
        <div className='container'>
          <div className='content'>
            <h4>
              "A walk in nature walks the soul back home." <br /> - Mary Davis{" "}
            </h4>
            <h2>
              If you've decided on when and where you want to go hiking simply
              click the button below to book a reservation
            </h2>
            <a href='#showcase'>Book Now</a>
          </div>
        </div>
      </div>
      {window.innerWidth < 800 || window.screen.width < 800 ? (
        <video muted>
          <source src={forestVideo} type='video/mp4' />
          Your browser does not support background videos.
        </video>
      ) : (
        <video autoPlay loop muted>
          <source src={forestVideo} type='video/mp4' />
          Your browser does not support background videos.
        </video>
      )}
    </StyledVideo>
  );
};

const StyledVideo = styled.section`
  position: relative;
  max-height: 100vh;
  video {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    z-index: -1;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f1f1f1;

    .content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 50%;

      h4,
      h2 {
        letter-spacing: 0.5px;
        font-weight: lighter;
      }

      h4 {
        font-size: 1.1rem;
      }

      a {
        height: 3.8rem;
        width: 14rem;
        border: 1px solid #fff;
        font-weight: lighter;
        text-transform: uppercase;
        padding: 1.2rem 3rem;
        font-size: 1.1rem;
        letter-spacing: 2px;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
        transition: all 0.5s ease-in-out;
      }

      a:hover {
        background: #000;
        border: 1px solid #000;
      }
    }
  }
`;

export default Video;
