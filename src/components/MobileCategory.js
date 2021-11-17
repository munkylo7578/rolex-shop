import React from "react";
import { links } from "../utils/constants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import uniqid from "uniqid";
import { useProductsContext } from "../contexts/products_context";
const MobileCategory = () => {
  const {isCategoryOpen,closeCategory} = useProductsContext()

  return (
    <Wrapper>
      <aside className={isCategoryOpen ? "show-category" : "" }>
        <h3>DANH MỤC SẢN PHẨM</h3>
        <ul>
          {links.map((link) => {
            if (link.text === "Brands") {
              return link.types.map((type) => {
                return (
                  <li key={uniqid()}>
                    <NavLink
                      onClick={closeCategory}
                      activeStyle={{
                        color: "var(--primary-color)",
                      }}
                      to={type.url}
                    >
                      {type.name}
                    </NavLink>
                  </li>
                );
              });
            }
            if (link.text === "đăng nhập" || link.text === "Trang chủ")
              return <React.Fragment key={uniqid()}></React.Fragment>;
            else {
              return (
                <li key={uniqid()}>
                  <NavLink
                    onClick={closeCategory}
                    activeStyle={{
                      color: "var(--primary-color)",
                    }}
                    to={link.url}
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
        <h3>LỌC THEO GIÁ</h3>
        <form action="">
          <input type="range" />

          <span>Giá 819000 - 13000000</span>
          <button>LỌC</button>
        </form>
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  z-index: 101;
  aside {
    position: fixed;
    transform: translateX(-100%);
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #f8f8f8;
    overflow-y: scroll;
    transition: transform ease-in 0.5s;
    z-index: 999;
    
    h3 {
      margin: 40px 20px 0 20px;

      color: #353535;
      font-weight: 350;
    }
    ul {
      background-color: #f5f5f5;
      margin: 20px 20px;
      border: 1px solid #e8e8e8;
      border-radius: 2px;
      padding-bottom: 16px;

      a {
        display: block;
        padding: 20px 16px 0 20px;
        color: #334862;
        text-transform: none;
        font-size: 0.9rem;
        :hover {
          color: black;
        }
      }
    }
    form {
      margin-top: 16px;
      margin-left: 20px;
      input{
        outline: none;
      }
      button {
        padding: 5px 10px;
        border-radius: 50%;
        background-color: #666666;
        border-color: transparent;
        cursor: pointer;
      }

      span {
        display: block;
        margin: 10px 0;
      }
    }
  }
  .show-category{
      transform: translateX(0);
      z-index: 999;
    }
`;
export default MobileCategory;
