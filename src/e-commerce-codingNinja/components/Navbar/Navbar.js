import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './Navbar.css'
import CartContainer from '../productContainer/productContainer'
import Side from '../Sidebar/Side'
import { productContext } from '../../contextApi/contex'
import { useSelector } from 'react-redux'
import { cartSelector } from '../redux/Reducer/cartReducer'
const Navbar = () => {

    const cartlength = useSelector(cartSelector).length

     




    const toggleNav = () => {
        const El = document.getElementById('controller_div')
        El.classList.toggle('active');
        console.log('yes you toggle the nav');
    }


    return (
        <>

            <nav>

                <div className="nav_logo">
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/2496/2496101.png" alt=""/> */}
                    <span><Link to={'/'}><i class="fa-solid fa-house"></i></Link></span>
                    <span><Link to={'create'}>Add Product</Link></span>
                   

                </div>
                <span>E-shop.com</span>
                <div className="nav_side">
                    <span  className='user' ><i class="fa-solid fa-user"></i><span>login</span></span>
                    <span className='Nav_cart'><Link to={'cart'}><i class="fa-solid fa-cart-shopping"></i> <span className='cart_number'>{cartlength}</span></Link></span>
                </div>
            </nav>
            <div className='navMain'>
                {/* <div className="controller_div" id='controller_div'><i className="fa-solid fa-bars" onClick={() => { toggleNav() }}></i>
                    <div className='controllers'>
                        <Side />
                    </div>
                </div> */}
                <div className="page">
                    <Outlet />
                </div>
            </div>
        </>


    )
}

export default Navbar;
