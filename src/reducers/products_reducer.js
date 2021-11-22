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
  FORM_OPEN
  
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
      tempProduct = state.initialProducts;
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
  
    return { ...state, isSingleProductLoading: true };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
   
    return { ...state, isSingleProductLoading: false, singleProduct: action.payload[0] };
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
      isFormOpen: false
    };
  }
  if(action.type === FORM_OPEN){
    return{...state,isFormOpen: true,isModalOpen:true}
}
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
   
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
    const tempFeaturedProduct = action.payload.slice(0,6)
    const tempSpecialProduct = action.payload.slice(7,12)
    return {
      ...state,
      initialProducts:[...action.payload],
      products: [...action.payload],
      featuredProducts: [...tempFeaturedProduct],
      specialProducts: [...tempSpecialProduct],
      isLoading: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
