import React, { useContext, useReducer,useEffect } from "react";
import { ADD_TO_CART, REMOVE_CART,CAlCULATE_AMOUNT, TOGGLE_AMOUNT } from "../actions";
import reducer from "../reducers/cart_reducer";
const cartStorage = JSON.parse(localStorage.getItem('cart'))

const initialState = {
  cart: cartStorage,
  total_item: 0,
  total_price: 0,
  max: 0
  
};
const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, name, amount, image, price,stock) => {
      dispatch({type:ADD_TO_CART,payload:{id,name,amount,image,price,stock}})
  };
  const removeCart = (id)=>{
    dispatch({type:REMOVE_CART,payload:id})
  }
  const toggleAmount = (id,type)=>{
    dispatch({type:TOGGLE_AMOUNT,payload:{id,type}})
  }
  useEffect(() => {
    
    dispatch({type:CAlCULATE_AMOUNT})
    localStorage.setItem("cart",JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart,removeCart,toggleAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
