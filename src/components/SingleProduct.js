import React from "react";
import styled from "styled-components";

const SingleProduct = ({images}) => {

  return (
    <Wrapper className="section-center">
      
        <article>
          <img src={images[0].url} alt="" />
          <p>test</p>
        </article>
     
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default SingleProduct;
