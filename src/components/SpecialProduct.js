import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { useProductsContext } from "../contexts/products_context";
import { Loading } from ".";
import { ProductInfo } from ".";
import { Button } from "./SliderButton";
const SpecialProduct = () => {
  const { specialProducts, isLoading } = useProductsContext();
  const ref = useRef(null);
  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <ul style={{ marginBottom: "40px" }}> {dots} </ul>
      </div>
    ),
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper  className="section-center">
      <h1>
        <span>SPECIAL</span> EDITION
      </h1>
      <Button onClick={next} next>
        {">"}
      </Button>
      <Button onClick={previous}>{"<"}</Button>
      <Slider ref={ref} {...settings} className="slider">
        {specialProducts.map((product) => {
          const { id,  images } = product;
          return (
            <div key={id} className="slide__wrapper">
              <div className="slide">
                <img src={images[0].url} alt="name" />

                <ProductInfo product={product} title="special" />
              </div>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 60px;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;

  :hover {
    ${Button} {
      opacity: 1;
      visibility: visible;
    }
  }
  .slick-dots li button:before {
    font-size: 20px;
    color: var(--primary-color);
  }
  .slider {
    border: 2px solid #ccc;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
    padding-bottom:80px;
    padding-top:40px;
    cursor: grab;
    @media (min-width: 662px) {
      padding-bottom: 100px;
 
    }
   
  }
  .slide__wrapper {
    padding: 0 40px;
    .slide {
      @media (min-width: 662px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
      }
      img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        margin-bottom: 20px;
        @media(min-width:662px){
          height: 400px;
        }
        @media(min-width:992px){
          width: 400px;
          height: 350px;
        }
      }

      a {
        margin-left: 0;
      }
    }
  }
`;
export default SpecialProduct;
