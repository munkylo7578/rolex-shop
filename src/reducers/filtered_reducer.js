import React from "react";
import {
  MOBILE_CATEGORY_OPEN,
  MOBILE_CATEGORY_CLOSE,
  FILTER_CATEGORY_PRODUCTS,
  GET_ALL_PRODUCT,
  CHANGE_PAGE,
  UPDATE_PRICE,
  GET_CATEGORY_PRODUCTS,
  
} from "../actions";

import { paginate } from "../utils/helper";
const filtered_reducer = (state, action) => {
  
  if (action.type === GET_CATEGORY_PRODUCTS) {
    const {products,category} = action.payload
    let tempProducts = []
   

    let tempArray = [...paginate(products)]
  
    if(category === "all"){
  
      
      tempProducts = tempArray[state.page]

    }
    else{
      tempArray = []
      tempProducts = products?.filter((e) =>
      e.category.find((e) => e === category)
    ); // filter an array and find element fit "category"
    }
    return {
      ...state,
      paginatedArray:[...tempArray],
      productsWithCategory: [...tempProducts],
      filteredProducts: [...tempProducts],
    };
  }
  if (action.type === CHANGE_PAGE) {
    if (action.payload === "next") {
      let tempPage = state.page + 1;

      return { ...state, page: tempPage };
    }
    if (action.payload === "prev") {
      let tempPage = state.page - 1;

      return { ...state, page: tempPage };
    } else {
      return { ...state, page: action.payload };
    }
  }
 
 
  if (action.type === UPDATE_PRICE) {
    const tempArray = [...state.testArray]
    const tempProduct = tempArray?.filter(
      (p) => p.price <= Number(state.price)
    );
    console.log(tempProduct)
    return {
      ...state,
      price: Number(action.payload) ,productsWithCategory:tempProduct
    };
  }
  
 /*  if (action.type === GET_ALL_PRODUCT) {
    const tempProducts = paginate(action.payload);
    const flattedArray = [].concat(...tempProducts);
    flattedArray?.sort((a, b) => a.price - b.price);
    const tempMinPrice = flattedArray[0]?.price;
    const tempMaxPrice = flattedArray[flattedArray.length - 1]?.price;

    return {
      ...state,
      minPrice: tempMinPrice,
      maxPrice: tempMaxPrice,
      allProduct: tempProducts,
      price: tempMaxPrice,
      productPerPage: [...tempProducts[state.page]],
    };
  } */
  if (action.type === MOBILE_CATEGORY_OPEN) {
    return {
      ...state,
      isCategoryOpen: true,
    };
  }
  if (action.type === MOBILE_CATEGORY_CLOSE) {
    return {
      ...state,
      isCategoryOpen: false,
    };
  }
  /* if (action.type === FILTER_CATEGORY_PRODUCTS) {
    const { products, category } = action.payload;
    const tempProducts = products?.filter((e) =>
      e.category.find((e) => e === category)
    ); // filter an array and find element fit "category"
    const tempArray = [...tempProducts]?.sort((a, b) => a.price - b.price);

    const tempMinPrice = tempArray[0]?.price;
    const tempMaxPrice = tempArray[tempArray.length - 1]?.price;
    return {
      ...state,
      minPrice: tempMinPrice,
      maxPrice: tempMaxPrice,
      price: tempMaxPrice,
      testArray: [...tempProducts],
      productsWithCategory: [...tempProducts],
    };
  } */

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filtered_reducer;
