import firebase from "../firebase";
import swal from "sweetalert";
import React from "react";
const userRef = firebase.database().ref("Users");

export const registerAccount = (data, reset, setActiveForm) => {
  userRef.once("value", (snapshot) => {
    const users = snapshot.val();
    const userList = [];
    for (let id in users) {
      userList.push({ id, ...users[id] });
    }
    
    const tempUser = userList.find(
      (user) =>
        user.user_email === data.user_email && user.user_name === data.user_name
    );
    if (tempUser) {
      swal({
        title: "Thất bại!",
        text: "Email hoặc tên đăng nhập đã được sử dụng !",
        icon: "error",
        button: "ĐĂNG KÍ LẠI",
      });
    } else {
      userRef.push(data);
      swal({
        title: "Chúc mừng!",
        text: "Bạn đã đăng kí tài khoản thành công!",
        icon: "success",
        button: "ĐĂNG NHẬP",
      }).then(() => setActiveForm(0));
      reset();
    }
  });
};

export const handleLogin = (data,closeModal,login) => {
  console.log("testlogin")
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
        .then(login(isInfoCorrect, userList))
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
