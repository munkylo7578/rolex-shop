import React from "react";
import styled from "styled-components";
import footer from "../assets/footer.jpg";
import { FaPaperPlane } from "react-icons/fa";
import logo from "../assets/logo-black.PNG";
import { IoLocation } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";
import { BsSkype } from "react-icons/bs";
const Footer = () => {
  return (
    <Wrapper>
      <img className="footer-background" src={footer} alt="" />

      <div className=" footer-content_wrapper">
        <div className="footer_content">
          <img src={logo} alt="" />
          <article className="footer-contact">
            <div>
              <i>
                <IoLocation />
              </i>
              <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
            </div>

            <div>
              <i>
                <GiRotaryPhone />
              </i>
              <p>076 922 0162</p>
            </div>
            <div>
              <i>
                <MdAttachEmail />
              </i>
              <p>demonhunterg@gmail.com</p>
            </div>
            <div>
              <i>
                <BsSkype />
              </i>
              <p>demonhunterp</p>
            </div>
          </article>
          <article className="footer-social"></article>
          <article className="footer-form">
            <h2>ĐĂNG KÍ</h2>
            <p>Đăng ký để nhận được thông tin mới nhất từ chúng tôi</p>
            <form action="">
              <input type="email" />
              <button>
                <FaPaperPlane />
              </button>
            </form>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  height: 800px;
  width: 100vw;
  .footer-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: transparent;
  }

  .footer-content_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
       display: flex;
        flex-direction: row;
    .footer-content {
   
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
`;
export default Footer;
