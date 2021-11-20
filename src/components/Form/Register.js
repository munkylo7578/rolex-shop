import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { useUserContext } from "../../contexts/user_context";

const Register = ({ setActiveForm }) => {
  const { registerAccount } = useUserContext();

  const {
    register,
    formState: { errors },
    reset,

    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    registerAccount(data, reset, setActiveForm);
  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="">Tên đăng nhập</label>
        <input
          type="text"
          name="user_name"
          placeholder="Tên đăng nhập"
          {...register("user_name", {
            required: "Hãy nhập vào đây",
            minLength: {
              value: 3,
              message: "tên đăng nhập dài tối thiểu 3 kí tự",
            },
            maxLength: {
              value: 20,
              message: "Tên đăng nhập dài tối đa dài 20 kí tự",
            },
            pattern: {
              value:
              /^\S*$/,
              message: "Tên đăng nhập không hợp lệ",
            },
          })}
        />
        {errors.user_name && (
          <p className="error-message">{errors.user_name.message}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Địa chỉ email</label>
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
        {errors.user_email && (
          <p className="error-message">{errors.user_email.message}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Mật khẩu</label>
        <input
          type="password"
          name="user_password"
          {...register("user_password", {
            required: "Hãy nhập vào đây",
            minLength: {
              value: 8,
              message: "Mật khẩu phải dài ít nhất 8 kí tự",
            },

            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Mật khẩu phải có ít nhất một chữ cái và một số",
            },
          })}
        />
        {errors.user_password && (
          <p className="error-message">{errors.user_password.message}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Nhập lại mật khẩu</label>
        <input
          name="user_password_repeat"
          type="password"
          {...register("user_password_repeat", {
            validate: (value) =>
              value === watch("user_password", "") ||
              "The passwords do not match",
          })}
        />
        {errors.user_password_repeat && (
          <p className="error-message">{errors.user_password_repeat.message}</p>
        )}
      </div>
      <button type="submit" className="primary-btn register-btn">
        ĐĂNG KÍ
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.form``;
export default Register;
