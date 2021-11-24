import React, { memo } from "react";
import styled from "styled-components";

import { useProductsContext } from "../../contexts/products_context";
import { useUserContext } from "../../contexts/user_context";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "./schema";
import { NameInput,PasswordInput} from "./Input";
import {handleLogin} from "../FirebaseValue"
const Login = () => {
  const { closeModal } = useProductsContext();

  const { login } = useUserContext();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit = (data) => {
    handleLogin(data,closeModal,login)
  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="">Tên đăng nhập</label>
        <NameInput register={register} />
        {errors.user_name && (
          <p className="error-message">{errors.user_name.message}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Mật khẩu</label>
        <PasswordInput register={register} />
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
const Wrapper = styled.form``;
export default memo(Login);
