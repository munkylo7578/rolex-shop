import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import uniqid from "uniqid";
import { useFilteredContext } from "../contexts/filtered_context";

const Category = () => {
  const { minPrice, maxPrice, price, changePrice,sortByPrice } = useFilteredContext();
  return (
    <Wrapper>
      <aside>
        <h3>DANH MỤC SẢN PHẨM</h3>
        <ul>
          {links.map((link) => {
            if (link.text === "Brands") {
              return link.types.map((type) => {
                return (
                  <li key={uniqid()}>
                    <NavLink
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
        <form onSubmit={sortByPrice}>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={changePrice}
            step={1}
          />

          <span>Giá {minPrice} - {price}</span>
          <button  type="submit">LỌC</button>
        </form>
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: none;
  aside {
    h3 {
      margin: 0;

      color: #353535;
      font-weight: 350;
    }
    ul {
      background-color: #f5f5f5;
      margin: 20px 0;
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

      input {
        outline: none;
      }

      span {
        display: block;
        margin: 10px 0;
      }
      button {
        padding: 5px 10px;
        border-radius: 50%;
        background-color: #666666;
        border-color: transparent;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 992px) {
    display: block;
  }
`;
export default Category;
