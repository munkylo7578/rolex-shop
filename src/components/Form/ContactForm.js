import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    formState,
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const form = useRef();
  const onSubmit = () => {
    init("user_CtSuJmZEuGorDdqw6pBVM");
    emailjs.sendForm("service_21lv67m", "template_87ggqww", form.current).then(
      (result) => {
        console.log(result)
      },
      (error) => {
        console.log(error.text);
      }
    );
    reset()
  };
  return (
    <Wrapper className="contact-form">
      <form ref={form} action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            type="text"
            name="user_name"
            placeholder="Họ và tên"
            {...register("user_name", {
              required: "Hãy nhập vào đây",
              minLength: {
                value: 10,
                message: "tên phải dài tối thiểu 10 kí tự",
              },
              maxLength: {
                value: 30,
                message: "Tên tối đa dài 20 kí tự",
              },
              pattern: {
                value: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
                message: "Nhập tên không hợp lệ",
              },
            })}
          />
          {errors.user_name && <p>{errors.user_name.message}</p>}
        </div>

        <div className="form-control">
          {" "}
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            {...register("user_email", {
              required: "Hãy nhập vào đây",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Email không hợp lệ",
              },
            })}
          />
          {errors.user_email && <p>{errors.user_email.message}</p>}
        </div>
        <div className="form-control">
          <input
            type="text"
            name="user_phone_number"
            placeholder="Số điện thoại"
            {...register("user_phone_number", {
              required: "Hãy nhập vào đây",
              pattern: {
                value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                message: "Hãy nhập dúng định dạng số điện thoại ",
              },
            })}
          />
          {errors.user_phone_number && (
            <p>{errors.user_phone_number.message}</p>
          )}
        </div>
        <div className="form-control">
          <input type="text" name="user_address" placeholder="Địa chỉ" />
        </div>

        <div className="form-control">
          {" "}
          <textarea
            name="user_message"
            placeholder="Lời nhắn"
            {...register("user_message", {
              required: "Hãy nhập vào đây",
              pattern: {
                value: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
                message: "Nội dung không hợp lệ",
              },
            })}
          />
          {errors.user_message && <p>{errors.user_message.message}</p>}
        </div>

        <button disabled={!formState.isValid} type="submit">
          GỬI
        </button>
        <div className="error-message"></div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px 60px 120px 40px;
    grid-gap: 10px;
    input {
      padding-left: 10px;
      border: 1px solid #ccc;
      height: 80%;
      width: 100%;
    }
    .form-control {
      width: 100%;
      height: 100%;
      p {
        color: #bf1650;
        height: 20%;
        width: 100%;
        margin: 2px 0;
      }

      p::before {
        display: inline;
        content: "⚠ ";
      }
    }
    .form-control:nth-child(5) {
      grid-column: 1 / span 2;
    }

    input:focus {
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(248 183 66 / 60%);
      outline: none;
      border: none;
    }
    button {
      grid-column: 1/3;
      background-color:  #cdb07c;
      color: white;

      border: none;
      cursor: pointer;
    }

    button:disabled{
      background-color: var(--primary-color);
      cursor: default;
    }
   

    textarea {
      padding-left: 10px;
      padding-top: 10px;
      border: 1px solid #ccc;

      height: 80%;
      width: 100%;
    }

    textarea:focus {
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(248 183 66 / 60%);
      outline: none;
      border: none;
    }
  }
`;
export default ContactForm;
