import React from "react";
import styled from "styled-components";
import { useUserContext } from "../contexts/user_context";
import { useForm } from "react-hook-form";

import {useHistory} from  "react-router-dom"

import { schemaPassword } from "../components/Form/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleChangePassword } from "../components/FirebaseValue";
const AccountPage = () => {
  const { currentUser,isLogin } = useUserContext();
  const history = useHistory()
  const {
    register,
    formState: { errors },
    reset,

    handleSubmit,
 
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaPassword)
  });
  const onSubmit = (data) => {
    handleChangePassword(data,currentUser)
    reset()
  };
  if(!isLogin){
    history.push("/")
  }
  return (
    <Wrapper>
      <section className="section-center">
        <h2>THAY ĐỔI MẬT KHẨU</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label htmlFor="">Mật khẩu hiện tại</label>
            <input
              type="password"
              {...register("current_password", )}
            />
            {errors.current_password && (
              <p className="error-message">{errors.current_password.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="">Mật khẩu mới</label>
            <input
              type="password"
              {...register("new_password", )}
            />
            {errors.new_password && (
              <p className="error-message">{errors.new_password.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="">Xác nhận lại mật khẩu</label>
            <input
              type="password"
              {...register("repeat_new_password",)}
            />
            {errors.repeat_new_password && (
              <p className="error-message">
                {errors.repeat_new_password.message}
              </p>
            )}
          </div>
          <button className="primary-btn" type="submit">
            LƯU THAY ĐỔI
          </button>
        </form>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  h2 {
    margin-top: 24px;
  }
  form {
    margin-top: 24px;
    .form-control {
      height: 150px;
      label {
        display: block;
        margin-bottom: 24px;
      }
      input {
        width: 100%;
        padding: 12px 0 12px 12px;
        outline: none;
      }
    }
    button {
      padding: 12px 24px;
    }
  }
`;
export default AccountPage;
