import React ,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../contexts/products_context'
import { products_url } from '../utils/constants'
import {Loading,SingleProduct} from "../components"
import styled from "styled-components"
import { memo } from "react/cjs/react.development";
const SingleProductPage = () => {
    const {fetchSingleProduct,isSingleProductLoading:loading,singleProduct:product,} = useProductsContext()
    const {id} = useParams()
    useEffect(() => {
        fetchSingleProduct(`${products_url}?id=${id}`)
        // eslint-disable-next-line
    }, [id])
    if(loading){
        <Loading />
    }
    const {images} = product
  
        return(
            <Wrapper>
                {images?.length > 1 &&  <section><SingleProduct images={images}  /></section>}
              
    
            </Wrapper>
        )
 
   
   
}
const Wrapper = styled.main`
    
`
export default memo(SingleProductPage)
