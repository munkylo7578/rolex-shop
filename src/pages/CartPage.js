import React from "react";
import {  useHistory } from "react-router-dom";
import { useCartContext } from "../contexts/cart_context";
import styled from "styled-components";

import { CartHeading, CartItem, NoCart, CartPrice } from "../components";
const CartPage = () => {
  const { cart} = useCartContext();
  const history = useHistory();
  const handleBackRoute = () => {
    history.goBack();
  };
  if (cart.length === 0) {
    return <NoCart  />;
  }

  return (
    <CartWrapper>
      <section className="section-center">
        <article className="cart-item__container">
          <CartHeading />
          <CartItem />
          <button onClick={handleBackRoute} className="back-btn">
            TIẾP TỤC XEM SẢN PHẨM
          </button>
        </article>
        <article className="cart-price__container">
          <CartPrice />
        </article>
      </section>
    </CartWrapper>
  );
};
const CartWrapper = styled.main`
  section {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 992px) {
      grid-template-columns: 3fr 2fr;
      grid-column-gap: 40px;
    }
    .cart-item__container {
      .back-btn {
        margin-top: 12px;

        background-color: transparent;
        padding: 6px 14px;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        transition: all 0.3s ease-out;
        font-size: 0.8rem;
        font-weight: 540;
        letter-spacing: 1px;
        :hover {
          cursor: pointer;
          background-color: var(--primary-color);
          color: white;
        }
      }
    }
    .cart-price__container {
      margin-top: 62px;

      @media (min-width: 992px) {
        margin-top: 0;
      }
    }
  }
`;

export default CartPage;
