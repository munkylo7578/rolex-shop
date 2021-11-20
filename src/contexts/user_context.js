import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/user_reducer";
import {
  FORM_OPEN,
  GET_ORDERS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "../actions";
import firebase from "../firebase";
import swal from "sweetalert";
const UserContext = React.createContext();

const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
const ordersStorage = JSON.parse(localStorage.getItem("orders"));
const currentUserStorage = localStorage.getItem("currenUser");

const initialState = {
  isLogin: loginStatus,
  currentUser: currentUserStorage,
  orders: ordersStorage,
};
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const registerAccount = (data, reset, setActiveForm) => {
    const userRef = firebase.database().ref("Users");

    userRef.on("value", (snapshot) => {
      const users = snapshot.val();
      const userList = [];
      for (let id in users) {
        userList.push(users[id]);
      }

      const tempUser = userList.find(
        (user) =>
          user.user_email === data.user_email &&
          user.user_name === data.user_name
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

  const login = (user,userList) => {
    console.log(userList)
    dispatch({ type: USER_LOGIN, payload: user });
  };
  const logout = () => {
    dispatch({ type: USER_LOGOUT });
  };
  const getOrders = (orderDetail) => {
    dispatch({ type: GET_ORDERS, payload: orderDetail });
  };

  useEffect(() => {
    localStorage.setItem("loginStatus", state.isLogin);
    localStorage.setItem("currenUser", state.currentUser);
  }, [state.isLogin, state.currentUser]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(state.orders));
  }, [state.orders]);
  return (
    <UserContext.Provider
      value={{ ...state, registerAccount, login, logout, getOrders }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
