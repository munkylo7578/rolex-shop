import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>rolex shop</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`

  position: absolute;
  bottom: -100px;
  width: 100%;

  height: 4rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  letter-spacing: 3px;
  span {
    color: white;
  }
  h5 {
    color: white;
  }
`;
export default Footer;
