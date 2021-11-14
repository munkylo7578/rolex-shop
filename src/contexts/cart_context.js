import React, { useContext, useReducer } from "react";
import { ADD_TO_CART } from "../actions";
import reducer from "../reducers/cart_reducer";

const initialState = {
  cart: [],
  total_amount: 0,
  total_money: 0,
};
const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, name, amount, image, price,stock) => {
      dispatch({type:ADD_TO_CART,payload:{id,name,amount,image,price,stock}})
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
