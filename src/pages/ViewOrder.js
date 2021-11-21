import React from 'react'
import { useParams } from 'react-router'
const ViewOrder = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            ViewOrder
        </div>
    )
}

export default ViewOrder
