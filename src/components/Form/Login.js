import React from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useProductsContext } from "../../contexts/products_context";
import { useUserContext } from "../../contexts/user_context";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
const Login = () => {
  const { closeModal } = useProductsContext();

  const { users, login } = useUserContext();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    const userRef = firebase.database().ref("Users");
    userRef.on("value", (snapshot) => {
      const users = snapshot.val();
      const userList = [];
      for (let id in users) {
        userList.push(users[id]);
      }
      const isInfoCorrect = userList?.find(
        (user) =>
          user.user_name === data.user_name &&
          user.user_password === data.user_password
      );

      if (isInfoCorrect) {
        swal({
          title: "Chúc mừng!",
          text: "Bạn đã đăng nhập thành công!",
          icon: "success",
          button: "tiếp tục mua hàng",
        })
          .then(login(isInfoCorrect,userList))
          .then(closeModal);
      } else {
        swal({
          title: "Thất bại!",
          text: "Tên đăng nhập hoặc mật khẩu chưa đúng!",
          icon: "error",
          button: "Nhập lại thông tin ",
        });
      }
    });
  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control">
        <label htmlFor="">Tên đăng nhập</label>
        <input
          type="text"
          name="user_name"
         
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
const Wrapper = styled.form``;
export default Login;
