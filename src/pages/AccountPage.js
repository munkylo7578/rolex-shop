import React from "react";
import styled from "styled-components";
import { useUserContext } from "../contexts/user_context";
import { useForm } from "react-hook-form";
import firebase from "../firebase";
import {useHistory} from  "react-router-dom"
import swal from "sweetalert";
const AccountPage = () => {
  const { currentUser,isLogin } = useUserContext();
  const history = useHistory()
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
    const userRef = firebase.database().ref("Users");
    //Getting users from firebase
    userRef.on("value", (snapshot) => {
      const users = snapshot.val();
      const userList = [];
      //loop through users and remove id 
      for (let id in users) {
        userList.push({ id, ...users[id] });
      }
      // if new password equal to old password
      if (data.new_password === data.current_password) {
        swal({
          title: "Thất bại!",
          text: "Mật khẩu mới trung với mật khẩu cũ !",
          icon: "error",
          button: "Thử lại",
        });
      }
      // if not go here
      else{
          // find user that want to change password
        const foundUser = userList.find(user=>user.user_name === currentUser)
        if(foundUser){
            // if old password not correct
          if(foundUser.user_password !== data.current_password){
              swal({
                  title: "Thất bại!",
                  text: "Mật khẩu hiên tại không đúng !",
                  icon: "error",
                  button: "Thử lại",
                });
          }
          else{
              // getting exact user that need to change password from firebase
            const passRef = firebase.database().ref("Users").child(foundUser.id)
            passRef.update({
                user_password: data.new_password
            })
            swal({
                title: "Thành công!",
                text: "Bạn đã thay đổi mật khẩu thành công !",
                icon: "success",
                button: "Tiếp tục",
            })
          }
        }
      }
     
      
    });
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
              {...register("current_password", {
                required: "Hãy nhập vào đây",
                minLength: {
                  value: 8,
                  message: "Mật khẩu phải dài ít nhất 8 kí tự",
                },

                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Mật khẩu khồng đúng định dạng",
                },
              })}
            />
            {errors.current_password && (
              <p className="error-message">{errors.current_password.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="">Mật khẩu mới</label>
            <input
              type="password"
              {...register("new_password", {
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
            {errors.new_password && (
              <p className="error-message">{errors.new_password.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="">Xác nhận lại mật khẩu</label>
            <input
              type="password"
              {...register("repeat_new_password", {
                required: "Hãy nhập vào đây",
                validate: (value) =>
                  value === watch("new_password", "") ||
                  "Mật khẩu nhập lại không đúng",
              })}
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
