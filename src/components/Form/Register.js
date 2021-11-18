import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { useUserContext } from "../../contexts/user_context";
import swal from "sweetalert";
import { useReducer } from "react/cjs/react.development";
const Register = ({ setActiveForm }) => {
  const { registerAccount, users } = useUserContext();

  const {
    register,
    formState: { errors },
    reset,
    formState,
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
   
    const tempUser = users?.find((user) => user.user_email === data.user_email);
    if (tempUser) {
      swal({
        title: "Thất bại!",
        text: "Email đã được sử dụng !",
        icon: "error",
        button: "ĐĂNG KÍ LẠI",
      });
    } else {
      registerAccount(data);
      swal({
        title: "Chúc mừng!",
        text: "Bạn đã đăng kí tài khoản thành công!",
        icon: "success",
        button: "ĐĂNG NHẬP",
      }).then(() => setActiveForm(0));
      reset();
    }


  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="">Họ và tên</label>
        <input
          type="text"
          name="user_name"
          placeholder="Họ và tên"
          {...register("user_name", {
            required: "Hãy nhập vào đây",
            minLength: {
              value: 5,
              message: "tên phải dài tối thiểu 5 kí tự",
            },
            maxLength: {
              value: 30,
              message: "Tên tối đa dài 20 kí tự",
            },
            pattern: {
              value:
                /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/,
              message: "Nhập tên không hợp lệ",
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
