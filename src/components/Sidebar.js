import React, { useState } from "react";
import styled from "styled-components";
/* ICON IMPORT */
import { IoClose } from "react-icons/io5";

import { MdArrowDropDown } from "react-icons/md";
/* END ICON IMPORT */
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { useUserContext } from "../contexts/user_context";
const Sidebar = () => {
  const [brandsCategoryOpen, setBrandsCategoryOpen] = useState(false);
  const [loginFormOpen, setloginFormOpen] = useState(false);
  const { isSidebarOpen, closeSidebar, openForm } = useProductsContext();
  const { isLogin } = useUserContext();
  const handleLogin = () => {
    closeSidebar();
    openForm();
  };
  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? "show-sidebar" : ""}>
        <ul className="sidebar-list">
          {links.map((link) => {
            const { text, id, types } = link;
            if (text === "Brands") {
              return (
                <li key={id} className="brands-category link">
                  <p onClick={() => setBrandsCategoryOpen(!brandsCategoryOpen)}>
                    {text}
                  </p>
                  <MdArrowDropDown
                    className={brandsCategoryOpen ? "rotated" : ""}
                  />

                  <ul className={brandsCategoryOpen ? "brands-show" : ""}>
                    {types.map((type) => {
                      return (
                        <li key={Math.random()}>
                          <Link onClick={closeSidebar} to={type.url}>
                            {type.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            if (text === "đăng nhập") {
              return (
                <li key={id} className="login-form link">
                  {isLogin ? (
                    <>
                      <p>TÀI KHOẢN</p>
                      <MdArrowDropDown
                        onClick={() => setloginFormOpen(!loginFormOpen)}
                        className={loginFormOpen ? "rotated" : ""}
                      />

                      <ul className={loginFormOpen ? "login-show" : ""}>
                        <li>
                          <Link onClick={closeSidebar} to="/tai-khoan/orders">
                            Đơn hàng
                          </Link>
                        </li>
                        <li>
                          <Link onClick={closeSidebar} to="/tai-khoan">
                            Thông tin tài khoản
                          </Link>
                        </li>
                        <li>
                          <Link onClick={closeSidebar} to="/oops">
                            Đăng xuất
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <p onClick={handleLogin}>{text}</p>
                  )}
                </li>
              );
            }
            return (
              <li key={id}>
                <Link onClick={closeSidebar} className="link" to={link.url}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="hotline">
          <strong>HOTLINE: 0352623345</strong>
        </p>
      </aside>
      <IoClose
        onClick={closeSidebar}
        className={isSidebarOpen ? "close-icon show-icon " : "close-icon"}
      />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  z-index: 3;
  .close-icon {
    position: fixed;
    top: 10px;
    right: 5px;
    font-size: 1.6rem;
    color: black;
    z-index: 999;
    display: none;
    cursor: pointer;
  }
  .show-sidebar,
  .show-icon {
    z-index: 999;
    display: block;
    transform: translateX(0);
  }
  aside {
    position: fixed;
    transform: translateX(-100%);
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #f8f8f8;
    overflow-y: scroll;
    transition: transform ease-in 0.5s;
    z-index: 3;

    .hotline {
      font-size: 1rem;
      margin: 20px 0 40px 60px;
      position: relative;
    }
    .hotline::before {
      position: absolute;
      left: -40px;
      width: 1.5em;
      height: 1.5em;
      content: "";
      background: transparent
        url(http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/07/customer-service.svg)
        no-repeat;
      background-size: 1.5em 1.5em;
      animation-name: tada;
      -webkit-animation-duration: 3s;
      -ms-animation-duration: 3s;
      -moz-animation-duration: 3s;
      animation-duration: 3s;

      -webkit-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
      -moz-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }
    .form-control {
      margin: 50px 20px 20px 20px;
    }
    input {
      padding: 10px 0 10px 10px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
    input:focus {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      outline: none;
    }
    a {
      display: block;
      padding: 20px 30px 20px 20px;
      font-size: 0.9rem;
      color: #818181;
      border-top: 1px solid #efefef;
      border-bottom: 1px solid #efefef;
    }
    .link:hover {
      background-color: #ebebeb;
    }
    button {
      background-color: var(--primary-color);
      border: none;
      padding: 6px 10px 12.5px 10px;
      cursor: pointer;
      svg {
        color: white;
        font-size: 1.2rem;
        transform: translateY(2px);
      }
    }
    .brands-category,
    .login-form {
      position: relative;

      a {
        border: none;
        padding: 20px 30px 20px 40px;
      }
      a:hover {
        background-color: whitesmoke;
      }
      ul {
        height: 0;
        opacity: 0;

        overflow: hidden;

        transition: all ease-in 0.3s;
      }
      .brands-show,
      .login-show {
        height: 100%;
        opacity: 1;
      }

      p {
        text-transform: uppercase;
        font-size: 0.9rem;
        color: #818181;
        margin-left: 20px;
        padding-bottom: 20px;
        padding-top: 20px;
      }

      svg {
        position: absolute;
        right: 0;
        top: 8px;
        color: #818181;
        cursor: pointer;
        font-size: 2.5rem;
        transition: transform 1s;
      }
      .rotated {
        transform: rotate(180deg);
      }
      svg:hover {
        color: black;
      }
    }
    .brands-category:hover {
      background-color: #ebebeb;
      cursor: pointer;
    }

    .login-form:hover {
      background-color: #ebebeb;
      cursor: pointer;
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
export default Sidebar;
