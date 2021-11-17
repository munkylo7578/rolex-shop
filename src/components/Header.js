import React from "react";

import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaBars,FaUserAlt,FaSearch } from "react-icons/fa";
import { BsBag} from "react-icons/bs";
import {useCartContext} from "../contexts/cart_context"
import { LoadableModal,LoadableSidebar } from "../loadables";
import  Navbar  from "./Navbar";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { formatPrice } from "../utils/helper";
const Header = () => {
  const {openSidebar,openForm} = useProductsContext()
  const {total_item,total_price} = useCartContext()
  return (
    <Wrapper>
        <LoadableModal />
      <LoadableSidebar />
      <nav className="sub-nav">
        <div className="section-center">
          <button onClick={openSidebar} className="menu-btn">
            <FaBars />
          </button>
     
          <Link to='/'><img src={logo} alt="" /></Link>
          <div className="nav-right">
            <i className="main-icon--separate"><FaSearch className="main-icon"/></i>
            <i className="main-icon--separate"><FaUserAlt onClick={openForm} className="main-icon"/></i>
            <div className="price__wrapper">
              {formatPrice(total_price)}
             </div>
          
            <Link to="/cart" className="cart-container">
              <BsBag className="cart-icon" />
              <span>{total_item}</span>
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
  .nav-right{
      display: flex;
      align-items: center;
      .main-icon{
        font-size: 1rem;
        margin-right: 46px;
        display: none;
        color: #818181;
        position:relative;
        cursor: pointer;
      }
      
      span{
        font-size: 1.2rem;
        color: #818181;
        display: none;
      }
      span:nth-child(1){
        margin-right: 5px;
      }
      span:nth-child(2){
        margin-top: 2px;
      }
      .price__wrapper{
        display: none;
        font-size: 0.9rem;
        color: #818181;
        margin-right: 12px;
      }
      .cart-container {
        
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;
      .cart-icon {
        color: var(--primary-color);
        font-size: 2.5rem;
        margin: 0 0 5px 0;
        display: block;
      }
      span {
        position: absolute;
        font-size: 1rem;
        right: 38%;
        bottom: 27%;
        display: block;
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
    
    .nav-right{
      .price__wrapper{
        display: block;
      }
      .main-icon{
        display: block;
      }
      span{
        display: block;
      }
      .main-icon--separate{
        position: relative;
      }
      .main-icon--separate::after{
        content: "";
        width: 1px;
        height: 30px;
        background-color: #ebebeb;
        top: 50%;
        transform: translateY(-50%);
        left: 62%;
        position: absolute;
        
      }
    }
  }
`;
export default Header;
