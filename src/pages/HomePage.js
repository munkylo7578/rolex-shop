import React from "react";
import { IntroSlider } from "../components";
import {
  LoadableIntroSlider,
  
} from "../loadables";
import { FeaturedProduct,Collection,SpecialProduct } from "../components";
import styled from "styled-components";
const HomePage = () => {
  const collectionRef = React.useRef(null);
  const featuredRef = React.useRef(null)
  const specialRef = React.useRef(null)
  React.useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        collectionRef?.current?.classList.add("display");
      }
      if (window.pageYOffset > 600) {
        featuredRef?.current?.classList.add("display");
      }
   
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  return (
    <Wrapper>
      <IntroSlider />
      <Collection ref={collectionRef} />
      <FeaturedProduct ref={featuredRef} />
      <SpecialProduct ref={specialRef} />
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

  .display {
    opacity: 1;
    visibility: visible;
    transition: all 1.3s ease-in-out;
  }
`;
export default HomePage;
