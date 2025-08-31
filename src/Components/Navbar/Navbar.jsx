import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo_big.png';
import { FiShoppingCart } from "react-icons/fi";
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  
    const [menu,setmenu]= useState("shop");

    return (
    <div className='Navbar'>
       
        <ul className='Nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Acceuil</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("man")}}><Link style={{textDecoration:'none'}} to='/men'>Notre Articles</Link> {menu==="man"?<hr/>:<></>}</li>
             <div className='logo'>
            <img className='img' src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
            <li onClick={()=>{setmenu("woman")}}><Link style={{textDecoration:'none'}} to='/women'>Guide des tailles</Link> {menu==="woman"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Livraison</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {/* <Link to='/login'><button>login</button></Link> */}
            <Link to='/Cart'><img src={cart} alt=''/></Link>
            <div className='nav-cart-count'>0</div>
        </div>

    </div>
    
  )
}
