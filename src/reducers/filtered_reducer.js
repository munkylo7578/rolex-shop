import React from 'react'
import { MOBILE_CATEGORY_OPEN,MOBILE_CATEGORY_CLOSE,FILTER_CATEGORY_PRODUCTS,GET_ALL_PRODUCT } from "../actions";
const filtered_reducer = (state,action) => {
    if (action.type === GET_ALL_PRODUCT) {
        return { ...state ,allProduct:[...action.payload]};
      }
    if(action.type === MOBILE_CATEGORY_OPEN){
        return{
            ...state,
            isCategoryOpen: true
        }
    }
    if(action.type === MOBILE_CATEGORY_CLOSE){
        return{
            ...state,
            isCategoryOpen: false
        }
    }
    if(action.type === FILTER_CATEGORY_PRODUCTS){
        const {products,category} = action.payload
        const tempProducts = products?.filter(e=>(e.category.find(e=>e === category))) // filter an array and find element fit "category"
 
        return {
            ...state,
            productsWithCategory: [...tempProducts],
          
        }
    }
   
    throw new Error(`No Matching "${action.type}" - action type`);
}

export default filtered_reducer
