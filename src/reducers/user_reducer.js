import React from "react";
import {
  FORM_OPEN,
  GET_ORDERS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "../actions";
import uniqid from "uniqid";
import firebase from "../firebase";
import * as dayjs from "dayjs";
import "dayjs/locale/vi";
const user_reducer = (state, action) => {
  if (action.type === GET_ORDERS) {
    const time = dayjs().locale("vi").format("D MMMM [năm] YYYY");
    const orderRef = firebase.database().ref(`Order/${state.currentUser}`);
    orderRef.on("value",(snapshot)=>{
      const data = snapshot.val()
      console.log(data)
      for(let id in data){
        console.log(id,data[id])
      }
    })
    const tempObj = {
      id: time,
      ...action.payload,
    };
    if (state.orders == null) {
      return { ...state, orders: [tempObj] };
    } else {
      return { ...state, orders: [...state.orders, tempObj] };
    }
  }

  if (action.type === USER_LOGOUT) {
    return { ...state, isLogin: false,currentUser: "" };
  }
  if (action.type === USER_LOGIN) {
    
    
    return { ...state, isLogin: true, currentUser: action.payload.user_name};
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
