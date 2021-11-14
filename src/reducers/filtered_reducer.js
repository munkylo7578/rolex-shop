import {
  MOBILE_CATEGORY_OPEN,
  MOBILE_CATEGORY_CLOSE,
  CHANGE_PAGE,
  UPDATE_PRICE,
  GET_CATEGORY_PRODUCTS,
  CHANGE_PRICE,
} from "../actions";

import { paginate } from "../utils/helper";
const filtered_reducer = (state, action) => {
  if (action.type === GET_CATEGORY_PRODUCTS) {
    const { products, category } = action.payload;
    let tempProducts = [];

    let tempArray = [...paginate(products)];

    if (category === "all") {
      tempProducts = tempArray[state.page];
    } else {
      tempArray = [];
      tempProducts = products?.filter((e) =>
        e.category.find((e) => e === category)
      ); // filter an array and find element fit "category"
    }
    const min = Math.min(...tempProducts.map((p) => p.price));
    const max = Math.max(...tempProducts.map((p) => p.price));

    return {
      ...state,
      paginatedArray: [...tempArray],
      productsWithCategory: [...tempProducts],
      filteredProducts: [...tempProducts],
      minPrice: min,
      maxPrice: max,
      price: max,
    };
  }
  if (action.type === UPDATE_PRICE) {
    return { ...state, price: action.payload };
  }
  if (action.type === CHANGE_PRICE) {
    let tempArray = [...state.productsWithCategory];

    let tempProducts = tempArray.filter(
      (product) => product.price <= state.price
    );

    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === CHANGE_PAGE) {
    let tempPage;
    if (action.payload === "next") {
      tempPage = state.page + 1;
    }
    if (action.payload === "prev") {
      tempPage = state.page - 1;
    }
    if (Number.isInteger(action.payload)) {
      tempPage = action.payload;
    }

    return { ...state, page: tempPage };
  }

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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filtered_reducer;
