import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helper";
const ProductInfo = ({ title, product }) => {
  const { name, price } = product;
  return (
    <Wrapper>
      <div className="small-hero">
        <Link to="/">trang chủ </Link>
        <span>/</span>
        <h3>{title}</h3>
      </div>
      <h2>{name}</h2>
      <div className="separate"></div>
      <strong>{formatPrice(price)}</strong>
      <ul>
        <li>{">"} Sản phẩm nhập khẩu chính hãng. </li>
        <li>{">"} Vận chuyển miễn phí toàn quốc. </li>
        <li>{">"} Giao hàng trong ngày.</li>
        <li>{">"} Thanh toán sau khi nhận hàng.</li>
        <li>{">"} Bảo hành 5 năm tại Công ty.</li>
        <li>{">"} Bảo hành chính hãng toàn cầu.</li>
      </ul>
      <div className="add-to-cart__wrapper">
        <div className="amount-btn">
          <button className="amount-btn--minus">-</button>
          <span>1</span>
          <button className="amount-btn--plus">+</button>
        </div>
        <Link to="/cart" className="add-to-cart">
            thêm vào giỏ
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  .small-hero {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    a,
    span,
    h3 {
      color: #ccc;
      font-size: 0.9rem;
      font-weight: 350;
    }
    h3 {
      color: black;
    }
    a:hover {
      color: black;
    }
    span {
      margin: 0 10px;
    }
  }
  h2 {
  }
  .separate {
    background-color: #ccc;
    margin: 16px 0;
    width: 30px;
  }
  strong {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }
  ul{
      margin-bottom: 24px;
    li{
      font-weight: 300;
      color: #0000008f;
  }
  }
  .add-to-cart__wrapper{
      display: flex;
      align-items: center;
      .amount-btn{
          display: flex;
          
          button{
              padding: 8px 10px;
              background-color: #f0f0f0;
              border: 1px solid #ccc;
          }
          span{
              background-color: #f1f1f1;
              display: block;
              padding: 9px 10px;
              border: 1px solid #ccc;
          }
      }
      a{
          display: block;
          margin-left: 16px;
          padding: 12px 20px;
          background-color: var(--primary-color);
          font-size: 0.9rem;
          transition: all 0.3s ease-out;
            color: white;
            font-weight: 500;
          :hover{
            background-color: #ccaa7e; 
          }
      }
   
  }
  
`;
export default ProductInfo;
