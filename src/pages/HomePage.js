import React from "react";

import { LoadableIntroSlider,LoadableCollection } from "../loadables";
import styled from "styled-components";
const HomePage = () => {
  const collectionRef = React.useRef(null);
  

  React.useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 250) {
       collectionRef?.current?.classList.add("display");
      }
     /*  if(window.pageYOffset > 1000){
        test2Ref.current.classList.add("display");
     
      } */
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  return (
    <Wrapper>
      <LoadableIntroSlider />
      <LoadableCollection ref={collectionRef} />
    
    </Wrapper>
  );
};
const Wrapper = styled.main`
 
 
  
  .display {
    opacity: 1;
    visibility: visible;
    transition: all 0.7s ease-in-out;
  }
`;
export default HomePage;
