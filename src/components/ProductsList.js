import React, { useEffect } from "react";
import styled from "styled-components";
import { useProductsContext } from "../contexts/products_context";
import { useFilteredContext } from "../contexts/filtered_context";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { Products, Loading } from ".";
import { formatPrice } from "../utils/helper";
const ProductsList = ({ category }) => {
  const { products, isLoading } = useProductsContext();
  const { allProduct, filterProductsWithCategory, productsWithCategory } =
    useFilteredContext();
  useEffect(() => {
    filterProductsWithCategory(category);
  }, [category, products]);

  if (category === "all") {
    return (
      <Wrapper>
        {allProduct?.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/cua-hang/san-pham/${product.id}`}>
                {product.images?.map(image=>{
                  return(
                    <img key={image.id} src={image.url} alt={product.name} />
                  )
                })}
                <p>{product.name}</p>
                <div>{formatPrice(product.price) }</div>
              </Link>
            </article>
          );
        })}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {productsWithCategory?.map((product) => {
        return (
          <article key={product.id}>
            <Link to={`/cua-hang/san-pham/${product.id}`}>
            {product.images.map(image=>{
                  return(
                    <img key={image.id} src={image.url} alt={product.name} />
                  )
                })}
              <p>{product.name}</p>
            </Link>
          </article>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 20px;
  article {
    border-left: 1px solid red;
    border-right: 1px solid red;
    border-bottom: 1px solid red;

    a {
      height: 280px;
      width: 100%;
      display: block;
      transition: opacity ease-in 2s;
      position: relative;

      @media (min-width: 772px) {
        height: 320px;
        :hover img:nth-child(2) {
          opacity: 1;
        }
        @media (min-width: 992px) {
          height: 360px;
        }
      }

      img {
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
        width: 90%;
        height: 80%;
        -webkit-transition: opacity 0.5s ease-in-out;
        -moz-transition: opacity 0.5s ease-in-out;
        -ms-transition: opacity 0.5s ease-in-out;
        -o-transition: opacity 0.5s ease-in-out;
        transition: opacity 0.5s ease-in-out;
      }
      img:not(img:nth-child(1)){
        opacity: 0;
      }

     
      p {
        font-size: 90%;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        bottom: 0;
        left: 0;
        right: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height: 10%;
        max-width: 65%;
      }
      div{
        position: absolute;
        left: 0;
      }
    }
  }
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default ProductsList;
