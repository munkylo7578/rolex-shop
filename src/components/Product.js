import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";
import styled from "styled-components";
const Product = ({ product }) => {
  return (
    <Wrapper key={product.id}>
      <Link
        className="product-list__item"
        to={`/cua-hang/san-pham/${product.id}`}
      >
        {product.images?.map((image) => {
          return <img key={image.id} src={image.url} alt={product.name} />;
        })}
        <p>{product.name}</p>
        <div>{formatPrice(product.price)}</div>
      </Link>
      <Link to="/cart" className="btn--add-product">
        +
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  position: relative;
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  transition: all 0.5s ease-in;
  padding-bottom: 10px;
  height: 290px;
  @media (min-width: 772px) {
    grid-template-rows: 320px;

    @media (min-width: 992px) {
      grid-template-rows: 360px;
    }
  }
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  :hover img:nth-child(2) {
    opacity: 1;
  }
  @media (min-width: 772px) {
    :hover .btn--add-product {
      opacity: 1;
    }
  }

  .btn--add-product {
    opacity: 0;
    content: "";
    position: absolute;
    padding: 3px 5px 3px 7px;
    color: var(--primary-color);
    bottom: 20%;
    left: 6%;
    transition: all 0.5 ease-out;
    border: 2px solid var(--primary-color);
    :hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
  .product-list__item {
    height: 100%;
    width: 100%;
    display: block;
    transition: opacity ease-in 2s;
    position: relative;

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
`;
export default Product;
