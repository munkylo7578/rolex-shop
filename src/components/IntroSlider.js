import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import IMAGES from "../assets";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const IntroSlider = () => {
  const ref = useRef(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };
  return (
    <Wrapper>
      <Slider ref={ref} className="slider" {...settings}>
        <div className="slide slide-1  ">
          <div className="wrapper">
            <img src={IMAGES.slider1} alt="slider1" />
            <div className="slide-content">
              <blockquote>
                <h5>BỘ SƯU TẬP ĐỒNG HỒ</h5>
                <h3>Trường tồn với thời gian</h3>
                <p>
                  Đồng hồ được chế tác từ các nguyên liệu tốt nhất và lắp ráp tỉ
                  mỉ đến từng chi tiết. Mỗi chi tiết được thiết kế, phát triển,
                  và sản xuất với tiêu chuẩn chính xác nhất.
                </p>
              </blockquote>
              <Link to="/cua-hang">mua ngay</Link>
            </div>
          </div>
        </div>

        <div className="slide slide-2">
          <div className="wrapper">
            <img src={IMAGES.slider2} alt="slider2" />
            <div className="slide-content-2">
              <blockquote>
                <h5>DÀNH RIÊNG CHO DOANH NHÂN</h5>
                <h3>Đẳng cấp là mãi mãi</h3>
                <p>
                  Bộ sưu tập các mẫu đồng hồ Rolex cổ điển gồm các kiểu dáng kết
                  hợp những bí quyết của Rolex và những tiêu chuẩn cao nhất về
                  sự hoàn hảo
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .slider {
    cursor: grab;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .slide {
    overflow: hidden;
    height: 500px;
    @media (min-width: 700px) {
      height: 600px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .wrapper {
    height: 100%;
    animation: display 0.4s ease-in;
  }
  .slide-1 {
    position: relative;
    .slide-content {
      position: absolute;
      left: 9%;
      top: 27%;
      width: 72vw;
      animation: textSlide1 2s ease-in-out;

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

  .slide-2 {
    position: relative;
    .slide-content-2 {
      position: absolute;
      left: 30%;
      top: 60%;
      width: 72vw;
      animation: textSlide2 2s ease-in-out;
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
        width: 250px;
        @media (min-width: 662px) {
          width: auto;
        }
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
