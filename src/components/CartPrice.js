import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helper";
import { useCartContext } from "../contexts/cart_context";
const CartPrice = () => {
  const { total_price } = useCartContext();
  return (
    <Wrapper>
      <h5>TỔNG SỐ LƯỢNG</h5>
      <div>
        <p>Tổng phụ</p>
        <strong>{formatPrice(total_price)}</strong>
      </div>
      <div>
        <p>Giao hàng</p>
        <span>Giao hàng miễn phí</span>
      </div>
      <div>
        <p>Tổng</p>
        <strong>{formatPrice(total_price)}</strong>
      </div>
      <button>TIẾN HÀNH THANH TOÁN</button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h5,
  div {
    padding-bottom: 8px;
  }
  h5 {
    border-bottom: 3px solid #ececec;
  }
  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    margin-top: 28px;
  }
  div:last-child {
    border-bottom: 3px solid #ececec;
  }
  button {
    background-color: var(--primary-color);
    transition: all 0.3s ease-out;
    color: white;
    font-weight: 500;
    margin-top: 24px;
    cursor: pointer;
    padding: 8px 20px;
    letter-spacing: 1px;
    border: none;
    width: 100%;
    :hover {
      background-color: #ccaa7e;
    }
  }
`;
export default CartPrice;
