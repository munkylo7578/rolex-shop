import React from "react";

import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaBars, FaUserAlt,FaUserPlus } from "react-icons/fa";

import { useCartContext } from "../contexts/cart_context";
import {Modal,Sidebar} from "../components"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { formatPrice } from "../utils/helper";
import { useUserContext } from "../contexts/user_context";
import swal from "sweetalert";
const Header = () => {
  const { openSidebar, openForm } = useProductsContext();
  const { total_item, total_price } = useCartContext();
  const { isLogin, logout } = useUserContext();
  const handleLogout = ()=>{
    swal({
      title:"Thành công",
      text: "Đăng xuất thành công",
      icon: "success",
  
    }).then(logout)
  }
  return (
    <Wrapper className="test">
      <Modal />
      <Sidebar />
      <nav className="sub-nav">
        <div className="section-center">
          <button onClick={openSidebar} className="menu-btn">
            <FaBars />
          </button>

          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="nav-right">
            <div className="main-icon--separate ">
              {isLogin ? (
                <div className="user-info">
                  <FaUserAlt className="main-icon" />
                  <ul>
                    <li>
                      <Link to="/tai-khoan/orders">Đơn hàng</Link>
                    </li>
                    <li>
                      <Link to="/tai-khoan/account-info">Thông tin tài khoản</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Đăng xuất</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <FaUserPlus onClick={openForm} className="main-icon" />
              )}
            </div>
            <div className="price__wrapper">{formatPrice(total_price)}</div>

            <Link to="/cart" className="cart-container">
              <div className="half-circle"></div>
              <p>{total_item}</p>
            </Link>
          </div>
        </div>
      </nav>
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  z-index: 10;

  .section-center {
    border-bottom: 1px solid #f0f0f0;
    height: 74px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu-btn {
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;
      svg {
        font-size: 1.6rem;
        color: #bcbdbc;
      }
    }

    img {
      width: 90px;
      height: 50px;
      object-fit: cover;
      margin-left: 20px;
      margin-top: 10px;
    }
  }
  .nav-right {
    display: flex;
    align-items: center;
    .user-info {
      position: relative;
      z-index: 100;
      cursor: pointer;
      
      ul {
        position: absolute;
        top: 170%;
        right: -500%;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease-in-out;
        z-index: 20;
        border-radius: 2px;
        border: 1px solid #ccc;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        ::after {
          position: absolute;
          content: "";
          height: 30px;
          width: 100px;
          background-color: transparent;
          top: -15%;
          left: 30%;
        }
        ::before {
          position: absolute;
          content: "";
          border-color: transparent transparent white transparent;
          border-width: 10px;
          border-style: solid;
          top: -10%;
          right: 50%;
          transform: translateX(50%);
        }
        li {
          a {
            padding: 20px 60px 20px 20px;
            display: block;
            white-space: nowrap;
            color: var(--primary-color);
            background-color: white;
            font-size: 0.8rem;
            border: none;
            :hover {
              color: black;
            }
          }
          button {
            cursor: pointer;
            padding: 20px 160px 20px 20px;
            white-space: nowrap;
            font-size: 0.9rem;
            color: var(--primary-color);
            background-color: white;
            border: none;
            :hover{
              color:black;
            }
          }
        }
      }
      :hover ul {
        opacity: 1;
        visibility: visible;
        z-index: 2;
      }
      :hover svg{
        color: var(--primary-color);
      }
      :hover .main-icon{
        color: var(--primary-color);
      }
    }
    .main-icon {
      border: none;
      background-color: transparent;
      font-size: 1.4rem;

      display: none;
      color: #818181;
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease-in;
     
    }

    span {
      font-size: 1.2rem;
      color: #818181;
      display: none;
    }
    span:nth-child(1) {
      margin-right: 5px;
    }
    span:nth-child(2) {
      margin-top: 2px;
    }
    .price__wrapper {
      display: none;
      font-size: 0.9rem;
      color: #818181;
      margin-right: 12px;
    }
    .cart-container {
      cursor: pointer;
      display: block;
      align-items: center;
      position: relative;
      padding: 4px 8px;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      font-size: 0.9rem;
      :hover {
        background-color: var(--primary-color);
        color: white;
      }
      :hover .half-circle{
        top: -12px;
        height: 12px;
      }
      .half-circle {
        z-index: -1;
        width: 60%;
        height: 8px;
        position: absolute;
        top: -10px;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        border: 2px solid var(--primary-color);
        border-bottom: 0;
        right: 19%;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .section-center {
      border-bottom: none;
      height: 90px;
      .menu-btn {
        display: none;
      }
      img {
        width: 120px;
        height: 70px;
        margin-left: 0;
      }
    }

    .nav-right {
      .price__wrapper {
        display: block;
      }
      .main-icon {
        display: block;
      }
      span {
        display: block;
      }
      .main-icon--separate {
        padding-right: 46px;
        display: block;
        position: relative;
        svg {
        }
      }
      .main-icon--separate::after {
        content: "";
        width: 1px;
        height: 30px;
        background-color: #ebebeb;
        top: 50%;
        transform: translateY(-50%);
        right: 1.6em;
        position: absolute;
      }
    }
  }
`;
export default Header;
