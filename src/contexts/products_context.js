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
  UPDATE_SORT,
  SORT_PRODUCT,
  FORM_OPEN,
  MODAL_OPEN,
} from "../actions";
const initialState = {
  isSingleProductLoading: false,
  isSidebarOpen: false,
  products: [],
  isLoading: false,
  isModalOpen: false,
  isCategoryOpen: false,
  singleProduct: {},
  sort: "default-value",
  initialProducts: [],
  featuredProducts: [],
  specialProducts: [],
  isFormOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    openModal()
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    closeModal()
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const openModal = ()=>{
    dispatch({type:MODAL_OPEN})
  }
  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };
  const openCategory = () => {
    dispatch({ type: MOBILE_CATEGORY_OPEN });
  };
  const closeCategory = () => {
    closeModal()
    dispatch({ type: MOBILE_CATEGORY_CLOSE });
  };
  const openForm = () => {
    dispatch({ type: FORM_OPEN });
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

  const fetchSingleProduct = async (url) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      const { data } = await axios(url);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  const updateSort = (e) => {
    const value = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const sortProduct = () => {
    dispatch({ type: SORT_PRODUCT });
  };

  return (
    <ProductsContext.Provider
      value={{
        closeSidebar,
        openSidebar,
        closeModal,
        openCategory,
        closeCategory,
        fetchSingleProduct,
        updateSort,
        sortProduct,
        openForm,
        openModal,
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
