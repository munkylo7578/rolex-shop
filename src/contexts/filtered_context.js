import React, { useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/filtered_reducer";
import {
  MOBILE_CATEGORY_OPEN,
  MOBILE_CATEGORY_CLOSE,
  MODAL_CLOSE,
  FILTER_CATEGORY_PRODUCTS,
  GET_ALL_PRODUCT,
  CHANGE_PAGE,
} from "../actions";
import { useProductsContext } from "../contexts/products_context";

const initialState = {
  isCategoryOpen: false,
  allProduct: [],
  productPerPage: [],
  productsWithCategory: [],
  page: 0,
};

const FilteredContext = React.createContext();

export const FilteredProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, isLoading } = useProductsContext();

  const openCategory = () => {
    dispatch({ type: MOBILE_CATEGORY_OPEN });
  };
  const closeCategory = () => {
    dispatch({ type: MOBILE_CATEGORY_CLOSE });
  };

  const getAllProduct = () => {
    dispatch({ type: GET_ALL_PRODUCT, payload: products });
  };
  const filterProductsWithCategory = (category) => {
    dispatch({
      type: FILTER_CATEGORY_PRODUCTS,
      payload: { products, category },
    });
  };
  const changePage = (status) => {
    dispatch({ type: CHANGE_PAGE, payload: status });
  };

  return (
    <FilteredContext.Provider
      value={{
        ...state,
        openCategory,
        closeCategory,
        changePage,
        filterProductsWithCategory,
        getAllProduct,
      }}
    >
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilteredContext = () => {
  return useContext(FilteredContext);
};
