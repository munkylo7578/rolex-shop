import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import  IMAGES from "../assets";
const Collection = () => {
  return (
    <Wrapper >
      <article>
        <img src={IMAGES.banner_4} alt="banner4" />
        <div className="banner-content">
          <h3>ĐỒNG HỒ CỔ ĐIỂN</h3>
          <p>Phong cách trường tồn, có thể được nhận biết trong nháy mắt.</p>
          <Link to="/cua-hang">xem thêm</Link>
        </div>
      </article>
      <article>
        <img src={IMAGES.banner_3} alt="banner3" />
        <div className="banner-content-2">
          <h3>BỘ SƯU TẬP NĂM 2021</h3>

          <Link to="/cua-hang">xem thêm</Link>
        </div>
      </article>
      <article>
        <img src={IMAGES.banner_2} alt="banner2" />
      </article>
      <article>
        <img src={IMAGES.banner_1} alt="banner1" />
        <div className="banner-content">
          <h3>ĐỒNG HỒ CHẤT</h3>
          <p>Kết hợp hoàn hảo tính năng ưu việt và phong cách đẳng cấp.</p>
          <Link to="/cua-hang">xem thêm</Link>
        </div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px 250px 250px 350px;
  article {
    position: relative;
    overflow: hidden;
    :hover img {
      transform: scale(1.1);
    }
    h3,
    p {
      color: white;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 2.1rem;
      width: 300px;
    }
    p {
      line-height: 1.6;
      width: 300px;
    }
    a {
      padding: 10px 25px;
      border: 2px solid var(--primary-color);

      font-weight: 600;
      background-color: transparent;
      display: inline-block;
      font-size: 2.9vw;
      color: var(--primary-color);
      transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
      :hover {
        color: white;
        background-color: #685f52;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
    }
    .banner-content {
      position: absolute;
      top: 30%;
      left: 15%;
    }
    .banner-content-2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
     
    }
  }
  @media (min-width: 662px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 250px 250px;
    article {
      h3 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
        width: 200px;
      }
      a {
        font-size: 0.9rem;
      }
      .banner-content {
        top: 60%;
        left: 5%;
      }
      .banner-content-2 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-30%, -30%);
      }
    }
    article:first-child {
      grid-row: 1/3;
    }
    article:last-child {
      grid-column: 3/4;
      grid-row: 1/3;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 250px 250px;
    article {
      h3 {
        font-size: 1.6rem;
      }
      p {
        font-size: 0.8rem;
        width: 350px;
      }
      a {
        font-size: 0.9rem;
      }
      .banner-content {
        top: 60%;
        left: 5%;
      }
      .banner-content-2 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    article:first-child {
      grid-row: 1/3;
    }
    article:last-child {
      grid-column: 3/4;
      grid-row: 1/3;
    }
  }
`;
export default Collection;
