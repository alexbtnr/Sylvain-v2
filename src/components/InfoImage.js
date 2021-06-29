import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Counter from "./Counter";
import circleBridge from "../img/circleBridge.jpg";

const InfoImage = () => {
  const [element, view] = useInView({ threshold: 0.4 });

  return (
    <StyledSection ref={element}>
      <div className='overlay'>
        <div className='container'>
          <div className='flex-text'>
            <h4>Find your path</h4>
            <p>
              A few examples of classic (and challenging!) hiking routes in
              Norway are Preikestolen, Trolltunga, Galdhøpiggen, Besseggen, and
              Romsdalseggen.
            </p>
          </div>
          <div className='flex-numbers'>
            <div className='numbers'>
              {view ? <Counter from={0} to={5} /> : <h4>5</h4>}

              <p>Countries</p>
            </div>
            <div className='numbers'>
              {view ? <Counter from={0} to={65} /> : <h4>65</h4>}
              <p>Trails</p>
            </div>
            <div className='numbers'>
              {view ? <Counter from={0} to={35} /> : <h4>35</h4>}
              <p>Camps</p>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  height: 60vh;
  background: url(${circleBridge}) no-repeat center center/cover;
  color: #fff;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .flex-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 10rem;
        gap: 1rem;
        width: 40%;
        text-align: left;

        h4 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.1rem;
          font-weight: lighter;
        }
      }

      .flex-numbers {
        display: flex;
        justify-content: space-between;
        margin: 0 10rem;
        align-items: center;
        text-align: center;

        h4 {
          font-size: 4rem;
        }

        p {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media (max-width: 800px) {
    height: 37rem;
    .overlay {
      .container {
        .flex-text {
          margin: 0 auto;
          width: 80%;
          text-align: center;
          padding-top: 2rem;
        }
        .flex-numbers {
          display: block;
          padding: 2rem 0;

          .numbers {
            padding: 0.5rem;
          }
        }
      }
    }
  }
`;

export default InfoImage;
