import React,{memo} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";


import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "./schema";
import { EmailInput,NameInput,PasswordInput,PasswordRepeatInput } from "./Input";
import { registerAccount } from "../FirebaseValue";
const Register = ({ setActiveForm }) => {
  
  
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = (data) => {
    registerAccount(data, reset, setActiveForm);
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
        <label htmlFor="">Địa chỉ email</label>
        <EmailInput register={register} />
        {errors.user_email && (
          <p className="error-message">{errors.user_email.message}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Mật khẩu</label>
        <PasswordInput register={register} />
        {errors.user_password && (
          <p className="error-message">{errors.user_password.message}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="">Nhập lại mật khẩu</label>
        <PasswordRepeatInput register={register} />
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
export default memo(Register);
