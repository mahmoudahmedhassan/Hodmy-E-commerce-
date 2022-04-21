import React from 'react';
import classes from './header.module.css';

// icons
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsJustify, BsXLg } from "react-icons/bs";

// routing
import { Link } from 'react-router-dom';


function Navbar({handleToggleMenu,navToggle,cartCounter}) {
  return (

    <div className={`${classes.navbar} ${classes.navbar_responsive}`}>

      <div className={classes.navbar_logo}>
        <Link to='/'><h1>Hdomy</h1> </Link>
      </div>

      <div className={classes.navbar_cart_container}>

        <div className={classes.navbar_login}>
          <Link to={'/login'}>
            <FaRegUser />
          </Link>
        </div>

        <div className={classes.navbar_cart}>
          <Link to='/cart'>
            <HiOutlineShoppingBag />
            <span>{cartCounter}</span>
          </Link>
        </div>
        <div className={classes.nav_icon_menu} onClick={handleToggleMenu} >
          {navToggle ? (<BsXLg />) : (<BsJustify />)}
        </div>

      </div>
    </div>
  )
}

export default Navbar