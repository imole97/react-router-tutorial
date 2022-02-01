import React from 'react'
// import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return(
        <div>
        
           <h3>Home Page</h3> 
           <button onClick={() => navigate('order-summary', {replace:true})}>Order</button>
        </div>
    ) 
}
