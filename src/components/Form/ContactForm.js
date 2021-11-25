import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { schemaContact } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
const ContactForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    formState,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaContact),
  });
  const form = useRef();
  const onSubmit = () => {
    init("user_CtSuJmZEuGorDdqw6pBVM");
    emailjs.sendForm("service_21lv67m", "template_87ggqww", form.current).then(
      () => {
        swal({
          title: "Thành công",
          text: "Bạn đã gửi thông tin thành công!",
          icon: "success",
          button: "ok",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
    reset();
  };
  return (
    <Wrapper className="contact-form">
      <form ref={form} action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            type="text"
            name="user_full_name"
            placeholder="Họ và tên"
            {...register("user_full_name")}
          />
          {errors.user_full_name && (
            <p className="error-message">{errors.user_full_name.message}</p>
          )}
        </div>

        <div className="form-control">
          {" "}
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            {...register("user_email")}
          />
          {errors.user_email && (
            <p className="error-message">{errors.user_email.message}</p>
          )}
        </div>
        <div className="form-control">
          <input
            type="text"
            name="user_phone_number"
            placeholder="Số điện thoại Việt Nam vd:0346556039"
            {...register("user_phone_number")}
          />
          {errors.user_phone_number && (
            <p className="error-message">{errors.user_phone_number.message}</p>
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
            {...register("user_message")}
          />
          {errors.user_message && (
            <p className="error-message">{errors.user_message.message}</p>
          )}
        </div>

        <button disabled={!formState.isValid} type="submit">
          GỬI
        </button>
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
      background-color: #cdb07c;
      color: white;

      border: none;
      cursor: pointer;
    }

    button:disabled {
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
