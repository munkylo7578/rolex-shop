import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  MODAL_OPEN,
  MODAL_CLOSE,
  MOBILE_CATEGORY_OPEN,
  MOBILE_CATEGORY_CLOSE,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  SORT_PRODUCT,
  UPDATE_SORT,
 
  CHANGE_PAGE
} from "../actions";

const products_reducer = (state, action) => {
 
  
  if (action.type === SORT_PRODUCT) {
    let tempProduct = [];

    if (state.sort === "a-z") {
      tempProduct = state.products.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (state.sort === "z-a") {
      tempProduct = state.products.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (state.sort === "default-value") {
      tempProduct = state.products;
    }
   
    if (state.sort === "lowest-price") {
      tempProduct = state.products.sort((a, b) => a.price - b.price);
    }
    if (state.sort === "highest-price") {
      tempProduct = state.products.sort((a, b) => b.price - a.price);
    }

    return { ...state, products: [...tempProduct] };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, isLoading: false, singleProduct: { ...action.payload } };
  }
  if (action.type === MOBILE_CATEGORY_OPEN) {
    return {
      ...state,
      isCategoryOpen: true,
      isModalOpen: true,
    };
  }
  if (action.type === MOBILE_CATEGORY_CLOSE) {
    return {
      ...state,
      isCategoryOpen: false,
    };
  }
  if (action.type === MODAL_OPEN) {
    return { ...state, isModalOpen: true };
  }
  if (action.type === MODAL_CLOSE) {
    return {
      ...state,
      isModalOpen: false,
      isSidebarOpen: false,
      isCategoryOpen: false,
    };
  }
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
      isModalOpen: true,
    };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
   
      products: [...action.payload],
      featuredProducts: [...action.payload],
      isLoading: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
