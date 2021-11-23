import React from "react";
import { Hero } from "../components";
import styled from "styled-components";
import { Map } from "../components";
import logoMona from "../assets/logo-mona.png";


import { MdAttachEmail,MdLocationOn } from "react-icons/md";
import { FaSkype,FaPhone } from "react-icons/fa";
import { ContactForm } from "../components";
const Contact = ({ title }) => {
  return (
    <>
      <Hero title={title} />
      <Wrapper>
        <div className="section-center">
          <Map />
          <div className="contact-content">
            <article className="contact-info">
              <img src={logoMona} alt="" />
              <div className="info__wrapper">
                <div>
                  <i>
                    <MdLocationOn />
                  </i>
                  <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                </div>
                <div>
                  <i>
                    <FaPhone />
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
                    <FaSkype />
                  </i>
                  <p>demonhunterp</p>
                </div>
              </div>
            </article>

            <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
            <div className="separate"></div>
            <ContactForm />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`

margin-bottom: 56px;
  .section-center {
    display: grid;
    grid-template-columns: minmax(300px, 700px);

    margin-top: 64px;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr;

      grid-column-gap: 28px;
    }
  }
  .contact-content {
   
    h2 {
      margin-top: 28px;
      text-align: center;
      font-size: 2rem;
      letter-spacing: 1px;
      font-weight: 300;
    }
    .contact-info {
      display: flex;
      flex-direction: column;

      @media (min-width: 992px) {
        flex-direction: row;
   
        }
      img {
        width: 250px;
        height: 200px;
        object-fit: cover;
        text-align: center;
        align-self: center;
        margin-top: 58px;
        margin-bottom: 24px;
        @media (min-width: 992px) {
          margin-top: 0;
          width: 150px;
          height: 117px;
          margin-bottom: 0;
        }
      }
      .info__wrapper{
        div {
        display: flex;
        align-items: center;
        margin-left: 30px;
      }
      i {
        font-size: 1.2rem;
        margin-right: 20px;
      }
      p {
        font-size: 1.1rem;
        letter-spacing: 0.5px;
        line-height: 1.6;
        word-break: break-all;
      }
      }
    
    }
  }
`;

export default Contact;
