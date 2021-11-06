import React ,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../contexts/products_context'
import { products_url } from '../utils/constants'

const SingleProductPage = () => {
    const {fetchSingleProduct,singleProduct} = useProductsContext()
    const {id} = useParams()
    useEffect(() => {
        fetchSingleProduct(`${products_url}?id=${id}`)
        
    }, [id])
    return(
        <>
            {singleProduct[0]?.name}
        </>
    )
   
}

export default SingleProductPage
