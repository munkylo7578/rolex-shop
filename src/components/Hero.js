import React,{memo} from "react";
import styled from "styled-components";
import IMAGES from "../assets"; 
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useProductsContext } from "../contexts/products_context";

const Hero = ({ title }) => {
  const { openCategory, updateSort, sort } = useProductsContext();
  
  if (title === "LIÊN HỆ" || title === "GIỚI THIỆU") {
    return (
      <Wrapper>
        <img src={title === "GIỚI THIỆU" ? IMAGES.heroImage1 : IMAGES.heroImage2} alt="" />
        <div className="hero-content__wrapper">
          <h2>{title}</h2>
          <div>
            <Link to="/">TRANG CHỦ</Link> <span>/</span> <h3>{title}</h3>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <MainWrapper>
        <div className="hero-content__Wrapper section-center">
          <div>
            <Link to="/">TRANG CHỦ</Link> <span>/</span> <h3>{title}</h3>
          </div>
          <button onClick={openCategory}>
            <i>
              {" "}
              <FaBars />
            </i>
            LỌC
          </button>

          <select value={sort} onChange={updateSort}>
            <option value="default-value">Thứ tự mặc định</option>
            <option value="a-z">Thứ tự theo tên từ a - z</option>
            <option value="z-a">Thứ tự theo tên từ z - a</option>

            <option value="lowest-price">Thứ tự theo giá : thấp đến cao</option>
            <option value="highest-price">
              Thứ tự theo giá : cao xuống thấp
            </option>
          </select>
        </div>
      </MainWrapper>
    );
  }
};
const MainWrapper = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  .hero-content__Wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
    }
    div {
      display: flex;
      align-items: center;
      a {
        color: #ccc;
        font-size: 1.1rem;
        :hover {
          color: #4b4c4b;
        }
      }

      span {
        margin: 0 8px;
      }
      h3 {
        font-weight: 500;
      }
      @media (min-width: 992px) {
        a,
        h3,
        span {
          font-size: 1.1rem;
       
        }
      }
    }
    button {
      background-color: transparent;
      border: none;
      margin: 28px 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      @media (min-width: 992px) {
        display: none;
      }
      i {
        margin-right: 5px;
      }
    }

    select {
      outline: none;
      padding: 10px;
      border: 1px solid #e5e5e5;
      color: #4b4c4b;
      @media (min-width: 992px) {
        font-size: 1rem;
      }
    }
    select:focus {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }
`;
const Wrapper = styled.section`
  height: 180px;
  width: 100%;
  position: relative;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: brightness(50%);
  }
  .hero-content__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    div {
      display: flex;
      align-items: center;
    }
    h2,
    h3,
    a {
      color: white;
      display: block;
    }
    h2 {
      font-size: 1.9rem;
      margin-bottom: 24px;
      margin-left: 32px;
    }
    span {
      color: #747779;
      margin: 0 12px;
    }
  }
  @media (min-width: 992px) {
  }
`;
export default memo(Hero);
