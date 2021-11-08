import React, { useReducer, useContext } from "react";
import reducer from "../reducers/filtered_reducer";
import {
  MOBILE_CATEGORY_OPEN,
  MOBILE_CATEGORY_CLOSE,
  GET_CATEGORY_PRODUCTS,
  GET_ALL_PRODUCT,
  CHANGE_PAGE,
  UPDATE_PRICE,
  CHANGE_PRICE
} from "../actions";
import { useProductsContext } from "../contexts/products_context";

const initialState = {
  isCategoryOpen: false,
  filteredProducts: [],

  isPaginated: false,
  minPrice: 0,
  maxPrice: 0,
  price: 0,
  productsWithCategory: [],
  page: 0,
  paginatedArray: [],
};

const FilteredContext = React.createContext();

export const FilteredProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  const openCategory = () => {
    dispatch({ type: MOBILE_CATEGORY_OPEN });
  };
  const closeCategory = () => {
    dispatch({ type: MOBILE_CATEGORY_CLOSE });
  };

  const getAllProduct = () => {
    dispatch({ type: GET_ALL_PRODUCT, payload: products });
  };

  const changePrice = (e) => {
    const value = Number(e.target.value);
    dispatch({ type: UPDATE_PRICE, payload: value });
  };
  const sortByPrice = (e)=>{
    e.preventDefault()
    dispatch({type:CHANGE_PRICE})
  }
  const changePage = (status) => {
    dispatch({ type: CHANGE_PAGE, payload: status });
  };

  const getProductByCategory = (category) => {
    dispatch({
      type: GET_CATEGORY_PRODUCTS,
      payload: { products, category },
    });
  };
  return (
    <FilteredContext.Provider
      value={{
        ...state,
        openCategory,
        closeCategory,
        changePage,
        getProductByCategory,
        getAllProduct,
        changePrice,
        sortByPrice
      }}
    >
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilteredContext = () => {
  return useContext(FilteredContext);
};
