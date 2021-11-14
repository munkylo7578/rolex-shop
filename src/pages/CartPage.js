import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useCartContext } from "../contexts/cart_context";
import styled from "styled-components";
const CartPage = () => {
  const { cart } = useCartContext();
  const history = useHistory();
  const handleBackRoute = () => {
    history.goBack();
  };
  if (cart.length === 0) {
    return (
      <NoCartWrapper>
        <section>
          <div>
            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
            <button onClick={handleBackRoute}>Quay trở lại cửa hàng</button>
          </div>
        </section>
      </NoCartWrapper>
    );
  }

  return (
    <CartWrapper>
      <section className="section-center">
        <article className="cart-item__container">
          <table>
            <tr>
              <th >SẢN PHẨM</th>
              <th>GIÁ</th>
              <th>SỐ LƯỢNG</th>
              <th>TỔNG</th>
            </tr>
            <tr>
              <td >test</td>
              <td>GIÁ</td>
              <td>SỐ LƯỢNG</td>
              <td>TỔNG</td>
            </tr>
          </table>
        </article>
        <article className="cart-price_container"></article>
      </section>
    </CartWrapper>
  );
};
const CartWrapper = styled.main`
  section {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 992px) {
      grid-template-columns: 3fr 2fr;
    }
    .cart-item__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      table {
        width: 100%;
        border-collapse: collapse;
        tr{
         
        }
        th,td {
          border-bottom: 2px solid #ececec;
          font-size: 0.9rem;
          padding: 10px 0;
         display: none;
         text-align: left;
         @media(min-width: 662px){
             display: table-cell;
             border-bottom: 2px solid #ececec;
         }
        }
       th:first-child{
         width: 75%;
       }
       th:nth-child(2){
         width: 10%auto;
       }
        th:nth-child(1),th:nth-child(3),td:nth-child(1),td:nth-child(3){
            display: table-cell;
        }
        th:nth-child(3),td:nth-child(3){
        
        }
      }
    }
  }
`;
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

export default CartPage;
