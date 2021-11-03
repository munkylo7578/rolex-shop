import React, { useReducer,useContext, useEffect } from "react";
import reducer from "../reducers/filtered_reducer"
import { MOBILE_CATEGORY_OPEN, MOBILE_CATEGORY_CLOSE,MODAL_CLOSE,FILTER_CATEGORY_PRODUCTS,GET_ALL_PRODUCT} from "../actions";
import { useProductsContext } from "../contexts/products_context";
const initialState = {
    isCategoryOpen: false,
    allProduct: [],
    productsWithCategory: [],
}

const FilteredContext = React.createContext()

export const FilteredProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const {products} = useProductsContext()
    
    const openCategory = ()=>{
        dispatch({type: MOBILE_CATEGORY_OPEN})
    }
    const closeCategory = ()=>{
        dispatch({type: MOBILE_CATEGORY_CLOSE})
    }
    useEffect(()=>{
        dispatch({type:GET_ALL_PRODUCT,payload:products})
    },[products])
    const filterProductsWithCategory =  (category) => {
      
        dispatch({type:FILTER_CATEGORY_PRODUCTS,payload:{products,category}})
    };
   
    return <FilteredContext.Provider value={{...state,openCategory,closeCategory,filterProductsWithCategory}}>
        {children}
    </FilteredContext.Provider>
}

export const useFilteredContext = ()=>{
    return useContext(FilteredContext)
}