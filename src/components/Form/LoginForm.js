import React, { useState,memo } from "react";
import {Modal} from "../index"
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import { useProductsContext } from "../../contexts/products_context";
const LoginForm = () => {
  const { isFormOpen } = useProductsContext();
  const [activeForm, setActiveForm] = useState(0);

  return (
    <Wrapper>
      <Modal />
      <div className={isFormOpen ? "form__wrapper show-form" : "form__wrapper"}>
        <div className="main-form">
          <div className="change-form__wrapper">
            <button
              onClick={() => setActiveForm(0)}
              className={activeForm === 0 ? "active" : null}
            >
              đăng nhập
            </button>
            <span>/</span>
            <button
              onClick={() => setActiveForm(1)}
              className={activeForm === 1 ? "active" : null}
            >
              đăng kí
            </button>
          </div>

          {activeForm === 1 && <Register setActiveForm={setActiveForm} />}
          {activeForm === 0 && <Login />}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .form__wrapper {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    width: 80vw;
    height: 85vh;
    z-index: 101;
    transition: all 0.2s ease-out;
    border-radius: 2px;
    .main-form {
      padding: 32px 20px;
      .change-form__wrapper {
        text-align: center;
        span {
          color: #ccc;
          font-size: 1.2rem;
          margin: 0 8px;
        }
        button {
          font-weight: 600;
          outline: none;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1.1rem;
          color: #313131;
          text-transform: uppercase;
          letter-spacing: 1px;
          :hover {
            color: var(--primary-color);
          }
        }
        .active {
          color: var(--primary-color);
        }
      }
    }

    @media (min-width: 662px) {
      width: 500px;
    }
  }
  .show-form {
    opacity: 1;
    visibility: visible;
  }
  form {
    margin-top: 20px;
    .form-control {
      height: 85px;
      label {
        color: #313131;
        font-weight: 500;
        display: block;
        margin-bottom: 8px;
      }
      input {
        width: 100%;
        padding: 8px 0 8px 8px;
        outline: none;
        border: 1px solid #ccc;
        margin-bottom: 2px;
      }
    }
    button {
      padding: 12px 32px;

      font-weight: 560x;
      font-size: 1.1rem;
    }
  }
`;
export default memo(LoginForm);
