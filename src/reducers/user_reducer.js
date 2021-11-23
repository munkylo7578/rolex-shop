
import {
  
  USER_LOGIN,
  USER_LOGOUT,
 
  GET_ORDER
} from "../actions";

import "dayjs/locale/vi";
const user_reducer = (state, action) => {
  if(action.type === GET_ORDER){
    const tempOrder = state.orders.find(order=>order.id === action.payload)
    
    return{...state,order:{...tempOrder}}
  }
 

  if (action.type === USER_LOGOUT) {
    return { ...state, isLogin: false, currentUser: "", orders: [] };
  }
  if (action.type === USER_LOGIN) {
   
    return { ...state, isLogin: true, currentUser: action.payload.user.user_name,orders:[...action.payload.orderList] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
