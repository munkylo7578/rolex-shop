import React from 'react'
import styled from "styled-components"
const NoCart = ({handleBackRoute}) => {
    return (
        <NoCartWrapper>
        <section>
          <div>
            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
            <button onClick={handleBackRoute}>Quay trở lại cửa hàng</button>
          </div>
        </section>
      </NoCartWrapper>
    )
}
const NoCartWrapper = styled.main`
  div {
    margin-top: 62px;
    text-align: center;
    button {
      text-transform: uppercase;
      cursor: pointer;
      outline: none;
      border: none;
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
export default NoCart
