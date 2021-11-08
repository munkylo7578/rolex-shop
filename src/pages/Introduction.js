import React from "react";
import { Hero } from "../components";
import styled from "styled-components";
const Introduction = ({ title }) => {
  return (
    <Wrapper>
      <Hero title={title} />
      <div className="introduction-heading">
        <h1>MONA MEDIA</h1>
        <div className="separate"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          modi.
        </p>
      </div>
      <div className="introduction-content">
      
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .introduction-heading {
    text-align: center;
    margin-top: 64px;
    margin-bottom: 44px;
    h1 {
      margin: 0;
      font-size: 2.7rem;
    }
    p {
      max-width: 320px;
      margin: 0 auto;
      line-height: 1.6;
      font-size: 1.2rem;
      font-weight: 200;
      color: var(--text-color);
      @media (min-width: 992px) {
        max-width: 520px;
      }
    }
  }
  .introduction-content {
  }
`;
export default Introduction;
