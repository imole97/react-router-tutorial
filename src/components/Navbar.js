import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from '../utils/Auth'

export const Navbar = () => {

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive? 'bold' : 'normal',
            color: isActive? 'red' : 'black',
        }
    }

    const auth = useAuth()
    return(
        <div>
            <nav className='primary-nav'>
                <NavLink to='/' style={navLinkStyles}>
                    Home
                </NavLink>

                <NavLink to='/about' style={navLinkStyles}>
                    About
                </NavLink>

                <NavLink to='/products' style={navLinkStyles}>
                    Products
                </NavLink>

                <NavLink to='/profile' style={navLinkStyles}>
                    Profile
                </NavLink>

                {
                    !auth.user && <NavLink to='/login' style={navLinkStyles}>
                    Login
                </NavLink>
                }
            </nav>
        </div>
    )
}