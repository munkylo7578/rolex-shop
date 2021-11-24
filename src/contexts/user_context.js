import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/user_reducer";
import {
 
  USER_LOGIN,
  USER_LOGOUT,
 
  GET_ORDER,
 
} from "../actions";
import firebase from "../firebase";

const UserContext = React.createContext();

const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
const ordersStorage = JSON.parse(localStorage.getItem("orders"));
const currentUserStorage = localStorage.getItem("currenUser");

const initialState = {
  isLogin: loginStatus,
  currentUser: currentUserStorage,
  orders: ordersStorage,
  order: {},
};
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  const login = (user) => {
    const orderRef = firebase.database().ref(`Order/${user.user_name}`);

    orderRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const orderList = [];
      for (let id in data) {
        orderList.push({ id, ...data[id] });
      }

      dispatch({ type: USER_LOGIN, payload: { user, orderList } });
    });
  };
  const logout = () => {
    dispatch({ type: USER_LOGOUT });
  };

  const getOrder = (id) => {
    dispatch({ type: GET_ORDER, payload: id });
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
      value={{ ...state, login, logout, getOrder }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
