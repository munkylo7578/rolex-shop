import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProductsContext } from "../contexts/products_context";
import { useFilteredContext } from "../contexts/filtered_context";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { Products, Loading } from ".";
import { formatPrice } from "../utils/helper";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
const ProductsList = ({ category }) => {
  const { products, isLoading,sort } = useProductsContext();

  const {
    page,
    allProduct,
    productPerPage,
    filterProductsWithCategory,
    productsWithCategory,
    getAllProduct,
    changePage,
  } = useFilteredContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      getAllProduct();
    }, 0);
    return () => clearTimeout(timer);
  }, [products, page,sort]);
  useEffect(() => {
    filterProductsWithCategory(category);
  }, [category, products,sort]);
  if (isLoading) {
    return <Loading />;
  }
  if (category === "all") {
    console.log("all")
    return (
      <Wrapper>
        {productPerPage?.map((product) => {
          return (
            <article key={product.id}>
              <Link
                className="product-list__item"
                to={`/cua-hang/san-pham/${product.id}`}
              >
                {product.images?.map((image) => {
                  return (
                    <img key={image.id} src={image.url} alt={product.name} />
                  );
                })}
                <p>{product.name}</p>
                <div>{formatPrice(product.price)}</div>
              </Link>
              <Link to="/cart" className="btn--add-product">
                +
              </Link>
            </article>
          );
        })}
        <div className="paginate-button__wrapper">
          {page > 0 && (
            <button
              className="change-page-btn"
              onClick={() => changePage("prev")}
            >
              <GrFormPrevious />
            </button>
          )}

          {allProduct?.map((product, index) => {
            return (
              <button
                onClick={() => changePage(index)}
                disabled={index === page}
                key={uniqid()}
              >
                {index + 1}
              </button>
            );
          })}
          {page < allProduct.length - 1 && (
            <button
              className="change-page-btn"
              onClick={() => changePage("next")}
            >
              <GrFormNext />
            </button>
          )}
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {productsWithCategory?.map((product) => {
        return (
          <article key={product.id}>
            <Link
              className="product-list__item"
              to={`/cua-hang/san-pham/${product.id}`}
            >
              {product.images.map((image) => {
                return (
                  <img key={image.id} src={image.url} alt={product.name} />
                );
              })}
              <p>{product.name}</p>
              <div>{formatPrice(product.price)}</div>
            </Link>
            <Link to="/cart" className="btn--add-product">
              +
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
    position: relative;
    border-left: 1px solid #ececec;
    border-right: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    transition: all 0.5s ease-in;
    padding-bottom: 10px;
    :hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
    :hover img:nth-child(2) {
      opacity: 1;
    }
    .btn--add-product {
      display: block;
      content: "";
      position: absolute;
      padding: 4px 5px 4px 7px;
      color: var(--primary-color);
      bottom: 20%;
      left: 5%;
      border: 2px solid var(--primary-color);
      :hover {
        background-color: var(--primary-color);
        color: white;
      }
    }
    .product-list__item {
      height: 280px;
      width: 100%;
      display: block;
      transition: opacity ease-in 2s;
      position: relative;

      @media (min-width: 772px) {
        height: 320px;

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
        opacity: 0;
        -webkit-transition: opacity 0.5s ease-in-out;
        -moz-transition: opacity 0.5s ease-in-out;
        -ms-transition: opacity 0.5s ease-in-out;
        -o-transition: opacity 0.5s ease-in-out;
        transition: opacity 0.5s ease-in-out;
      }
      img:nth-child(1) {
        opacity: 1;
      }

      p {
        font-size: 90%;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        bottom: 4%;
        left: 0;
        right: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height: 10%;
        max-width: 80%;
        font-size: 0.8rem;
        color: #54657b;
      }
      div {
        position: absolute;
        left: 50%;
        bottom: 2%;

        transform: translateX(-50%);
        color: black;
        font-weight: 500;
      }
    }
  }
  .paginate-button__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/3;
    grid-row-end: auto;
    @media (min-width: 650px) {
    grid-column: 2/3;
    grid-row-end: 6
  }
    button {
      margin-left: 5px;
      border-radius: 50%;
      padding: 5px 10px;
      border: 2px solid black;
      cursor: pointer;
      transition: all 0.2s ease-in;
      color: black;
      :hover {
        background-color: var(--primary-color);
        color: white;
      }
      :hover .isPageActive {
        color: black;
      }
    }
    .change-page-btn {
      padding: 6px 7px 3px 7px;
    }
    button:disabled {
      background-color: var(--primary-color);
      cursor: default;
      color: black;
    }
  }
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default ProductsList;
