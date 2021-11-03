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
  GET_SINGLE_PRODUCT_SUCCESS
} from "../actions";
const products_reducer = (state, action) => {
  if(action.type === GET_SINGLE_PRODUCT_BEGIN){
    return {...state,isLoading:true}
  }
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    return {...state,isLoading:false,singleProduct: {...action.payload}}
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
      isLoading: false,
      products: [...action.payload],
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
