import React from "react";
import styled from "styled-components";
const CartHeading = () => {
  return (
    <Wrapper>
      <h5>Sản phẩm</h5>
      <h5>Giá</h5>
      <h5>Số Lượng</h5>
      <h5>Tổng</h5>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr auto;
  padding-bottom: 8px;
  border-bottom: 3px solid #ececec;
  h5:nth-child(2),
  h5:nth-child(4) {
    display: none;
  }

  @media (min-width: 662px) {
    grid-template-columns: auto 120px 80px 120px;
    h5:nth-child(2),
    h5:nth-child(4) {
      display: inline;
    }
    h5:last-child {
      justify-self: end;
    }
  }
`;
export default CartHeading;
