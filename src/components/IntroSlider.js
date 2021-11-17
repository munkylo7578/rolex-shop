import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { slider1, slider2, slider3_1, slider3_2, slider3_3 } from "../assets";
import { Link } from "react-router-dom";
const IntroSlider = () => {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    draggable: true,
    slickPrev: true,
    slickNext: true
  };
  return (
    <Wrapper>
      <Slider className="slider" {...settings}>
        <div className="slide slide-1  ">
          <img src={slider1} alt="slider1" />
          <div className="slide-content">
            <blockquote>
              <h5>BỘ SƯU TẬP ĐỒNG HỒ</h5>
              <h3>Trường tồn với thời gian</h3>
              <p>
                Đồng hồ được chế tác từ các nguyên liệu tốt nhất và lắp ráp tỉ
                mỉ đến từng chi tiết. Mỗi chi tiết được thiết kế, phát triển, và
                sản xuất với tiêu chuẩn chính xác nhất.
              </p>
            </blockquote>
            <Link to="/cua-hang">mua ngay</Link>
          </div>
        </div>
        <div className="slide slide-2">
          <img src={slider2} alt="slider2" />
        </div>
        <div className="slide slide-3">
          <img src={slider3_2} alt="slider3-2" />
        </div>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .slider{
    overflow: hidden;
  }
  .slide {
    width: 100%;
    height: 500px;
    @media (min-width: 700px) {
      height: 800px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slide-1 {
    position: relative;
    .slide-content {
      position: absolute;
      left: 9%;
      top: 27%;
      width: 72vw;
      animation: zoomIn;
      animation-duration: 3s;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);
      @media (min-width: 700px) {
        width: 600px;
      }
      blockquote::before {
        position: absolute;
        left: -6%;
        top: 0;
        content: "";
        width: 2px;
        background-color: var(--primary-color);
        height: 100%;
      }
      h5,
      h3,
      p {
        color: var(--primary-color);
        display: block;
        margin-bottom: 12px;
      }
      h5 {
        font-size: 1.8vw;
        font-weight: 100;
      }
      h3 {
        font-size: 4.2vw;
      }
      p {
        font-size: 1.8vw;
        font-weight: 200;
        line-height: 1.6;
        margin-bottom: 0;
      }
      a {
        padding: 10px 23px;
        border: 2px solid var(--primary-color);
        position: absolute;
        top: 120%;
        left: -6%;
        background-color: transparent;
        display: block;
        font-size: 1.7vw;
        color: var(--primary-color);
        transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
        :hover {
          color: white;
          background-color: #685f52;
        }
      }
      @media (min-width: 800px) {
        p,
        h5 {
          font-size: 18px;
        }
        a {
          font-size: 17px;
        }
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
`;
export default IntroSlider;
