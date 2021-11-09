import React from "react";
import { Hero, Products } from "../components";
import styled from "styled-components";

const ProductPage = ({ category, title }) => {
 
  return (
    <Wrapper>
      <Hero title={title} />
      <Products title={title} category={category}/>
    </Wrapper>
  );
};
const Wrapper = styled.main``;
export default ProductPage;
