import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
const NoCart = () => {
  return (
    <NoCartWrapper>
      <section>
        <div>
          <p>Chưa có sản phẩm nào trong giỏ hàng</p>
          <Link to="/cua-hang">Quay trở lại cửa hàng</Link>
        </div>
      </section>
    </NoCartWrapper>
  );
};
const NoCartWrapper = styled.main`

  div {
    margin-top: 62px;
    text-align: center;
    a {
      display: inline-block;
      text-transform: uppercase;
      cursor: pointer;

      margin-top: 20px;
      padding: 12px 20px;
      background-color: var(--primary-color);
      font-size: 1rem;
      transition: all 0.3s ease-out;
      color: white;
      font-weight: 540;
      :hover {
        background-color: #ccaa7e;
      }
    }
  }
`;
export default NoCart;
