import React, { forwardRef } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { useProductsContext } from "../contexts/products_context";
import { Loading } from ".";
import { ProductInfo } from ".";
const SpecialProduct = (props, specialRef) => {
  const { specialProducts, isLoading } = useProductsContext();
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    appendDots: dots => (
        <div
          style={{
          
            borderRadius: "50%",
            padding: "10px"
          }}
        >
          <ul style={{ marginBottom: "32px" }}> {dots} </ul>
        </div>
    ),
 
    
   
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper ref={specialRef} className="section-center">
      <h1>
          <span>SPECIAL</span> EDITION
        </h1>
    <Slider {...settings}>
        {specialProducts.map(product=>{
            const {id,name,images,price} = product
            return (
                <div key={id} className="slide">
                    <img src={images[0].url} alt="name" />
                  
                     <ProductInfo  product={product} title="special" />
                </div>
            )
        })}
    </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 60px;
  margin-bottom: 30px;
  .slick-dots li button:before{
      font-size: 20px;
      color: var(--primary-color);
       
      
  }
    .slide{
        border-bottom: 2px solid #ccc;
        padding-bottom: 80px;
        box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.4);
        padding-left: 30px;
        img{
            width: 300px;
            height: 300px;
            object-fit: cover;
            margin-bottom: 20px;
        }
       
        a{
            margin-left: 0;
        }
    }
`;
export default forwardRef(SpecialProduct);
