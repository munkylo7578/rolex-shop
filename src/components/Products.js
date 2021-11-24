import React, { Suspense } from "react";
import { Category } from ".";
import { LoadableProductList } from "../loadables";
import styled from "styled-components";

const Products = ({ category, title }) => {
  return (
    <Wrapper className="section-center">
      <Category />
      <Suspense fallback={<div></div>}>
        <LoadableProductList title={title} category={category} />
      </Suspense>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 3fr;

    grid-column-gap: 30px;
  }
`;
export default Products;
