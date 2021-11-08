import React from 'react'
import { Category, ProductsList } from '.'
import {LoadableProductList} from "../loadables"
import styled from 'styled-components'

const Products = ({category}) => {
    return (
        <Wrapper className='section-center'>
            <Category />
            <LoadableProductList category={category} />
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 992px){
       grid-template-columns : 1fr 3fr ;
   
       grid-column-gap: 30px;
    }
`
export default Products
