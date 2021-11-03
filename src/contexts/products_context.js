import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url } from "../utils/constants";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
 
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  MODAL_CLOSE,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  MOBILE_CATEGORY_OPEN,
  MOBILE_CATEGORY_CLOSE,
 
} from "../actions";
const initialState = {
  isSidebarOpen: false,
  products: [],
  isLoading: false,
  isModalOpen: false,
  isCategoryOpen: false,
  singleProduct:{}
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };
  const openCategory = () => {
    dispatch({ type: MOBILE_CATEGORY_OPEN });
  };
  const closeCategory = () => {
    dispatch({ type: MOBILE_CATEGORY_CLOSE });
  };
  useEffect(() => {
    fetchProduct(products_url);
  }, []);

  const fetchProduct = async (url) => {
    try {
      dispatch({ type: GET_PRODUCTS_BEGIN });
      const { data } = await axios(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSingleProduct = async(url)=>{
    try{
      dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
      const {data} = await axios(url)
      dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:data})
    }catch(err){
      console.log(err)
    }
   
  }
  return (
    <ProductsContext.Provider
      value={{
        closeSidebar,
        openSidebar,
        closeModal,
        openCategory,
        closeCategory,
        fetchSingleProduct,
        ...state,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};