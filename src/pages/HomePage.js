import React from "react";
import { IntroSlider } from "../components";

import { FeaturedProduct,Collection,SpecialProduct } from "../components";
import styled from "styled-components";
const HomePage = () => {
 
  return (
    <Wrapper>
      <IntroSlider />
      <Collection  />
      <FeaturedProduct />
      <SpecialProduct />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  h1 {
    text-align: center;

    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 80px;
    span {
      color: var(--primary-color);
    }
  }

  
`;
export default HomePage;
