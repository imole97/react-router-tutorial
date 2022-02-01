import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const goBack = useNavigate()
    return (
        <>
           <button onClick={() => goBack(-1)}>Go back</button>
           <h3>We don receive am!</h3>    
        </>
    )
}