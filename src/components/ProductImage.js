import React, { memo } from "react";
import styled from "styled-components";

const ProductImages = ({ images,setMainIndex,mainIndex }) => {

  return (
    <Wrapper>
      <img className="main-image" src={images[mainIndex].url} alt="" />
      <div className="sub-img__container">
        {images.map((image, index) => {
          return (
            <img
              onClick={() => setMainIndex(index)}
              key={image.id}
              className={`sub-image ${index === mainIndex ? "active" : null}`}
              src={image.url}
              alt="sub-img"
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  margin-right: 72px;
  .main-image {
    
    align-self: center;
    display: block;
    height: auto;
    width: 70vw;
    @media(min-width: 650px){
      width: 40vw;
        }
  }
  .sub-img__container {
    margin-top: 30px;
    display: flex;
    @media(min-width: 662px){
      flex-wrap: wrap;
        }
    img {
      width: 18vw;
      margin-right: 28px;
      opacity: 0.5;
      transition: all 0.2s ease-in;
      @media(min-width: 662px){
      width: 15vw;
        }
        @media (min-width: 992px){
          width: 10vw;
    }
      :hover {
        cursor: pointer;
        opacity: 1;
        border: 1px solid #ccc;
        transform: translateY(-5px);
      }
    }
    .active {
      opacity: 1;
      border: 1px solid #ccc;
      transform: translateY(-5px);
    }
  }
`;
export default memo(ProductImages);
