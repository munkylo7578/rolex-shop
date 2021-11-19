import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useProductsContext } from "../../contexts/products_context";
import { useUserContext } from "../../contexts/user_context";
import { useForm } from "react-hook-form";
const Login = () => {
  const { closeModal } = useProductsContext();
 
  const { users,login } = useUserContext();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    const isInfoCorrect = users?.find(
      (user) =>
        user.user_email === data.user_email &&
        user.user_password === data.user_password
    );

    if (isInfoCorrect) {
      swal({
        title: "Chúc mừng!",
        text: "Bạn đã đăng nhập thành công!",
        icon: "success",
        button: "tiếp tục mua hàng",
      })
        .then(login(isInfoCorrect))
        .then(closeModal);
    } else {
      swal({
        title: "Thất bại!",
        text: "Tài khoản hoặc mật khẩu chưa đúng!",
        icon: "error",
        button: "Nhập lại thông tin ",
      })
    }
  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="">Email</label>
        <input
          type="text"
          {...register("user_email", {
            required: "Hãy nhập vào email",
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
          {...register("user_password", {
            required: "Hãy nhập vào mật khẩu",
            minLength: {
              value: 8,
              message: "Mật khẩu tối thiểu 8 kí tự",
            },
          })}
          type="password"
        />
        {errors.user_password && (
          <p className="error-message">{errors.user_password.message}</p>
        )}
      </div>
     
      <button type="submit" className="primary-btn ">
        ĐĂNG NHẬP
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.form`
 
`;
export default Login;
