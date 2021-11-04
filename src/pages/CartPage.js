import React from 'react'
import { useHistory } from "react-router-dom";

const CartPage = () => {
    const history = useHistory()
    const handleBackRoute = ()=>{
        history.goBack()
    }
    return (
        <button onClick ={handleBackRoute}>
            click me
        </button>
    )
}

export default CartPage
