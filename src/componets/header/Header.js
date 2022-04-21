import { React, useState, useEffect } from 'react';
import classes from './header.module.css';
import Announcement from './Announcement'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { BsCart2 } from "react-icons/bs";
 
function Header() {
 
    const { user } = useSelector(state => state.user);
    const { cart } = useSelector(state => state.cart);

    const [cartCounter, setCartCounter] = useState(0);
    const [cartamount, setCartAmount] = useState(0)
    const [navToggle, setNavToggle] = useState(false);

    const handleToggleMenu = () => {
        setNavToggle(!navToggle)
    };

    useEffect(() => {
        let totalCounter = 0;
        let totalAmount = 0;

        cart.map(x => {
            return (
                totalCounter += x.counter,
                totalAmount = totalCounter * x.price
            )
        });
        parseFloat(totalAmount);
        setCartCounter(totalCounter);
        setCartAmount(totalAmount);

    }, [cart, cartCounter, cartamount]);

    

    return (
        <div className={classes.header}>
            <Announcement />
            <Navbar handleToggleMenu={handleToggleMenu} navToggle={navToggle} cartCounter={cartCounter}/>

            <nav className={classes.nav}>
              
                <div className={classes.nav_layout}>
                    <ul>
                        <li><NavLink className={(navdata) => navdata.isActive && classes.active} to='/'>Home</NavLink></li>

                        <li><NavLink className={(navdata) => navdata.isActive && classes.active} to='/user'>
                            {user && user ? user.email.substring(0, user.email.length - 10) : 'My Acount'}
                        </NavLink>
                        </li>

                        <li>
                            <div className={classes.cart_counter}>
                                <NavLink className={(navdata) => navdata.isActive && classes.active} to='/cart'>
                                    cart
                                    <BsCart2 />
                                    <span> {cartCounter}</span>
                                </NavLink>
                            </div>
                        </li>
 
                    </ul>
                </div>

            </nav>

            <div className={navToggle ? classes.nav_layout_responsive : classes.nav_layout_2} >
                <ul>
                    <li><NavLink className={(navdata) => navdata.isActive && classes.active} to='/'>Home</NavLink></li>

                    <li>
                        <NavLink className={(navdata) => navdata.isActive && classes.active} to='/user'>
                            {user && user ? user.email.substring(0, user.email.length - 10) : 'user'}
                        </NavLink>
                    </li>

                    <li>
                        <div className={classes.cart_counter}>
                            <NavLink className={(navdata) => navdata.isActive && classes.active} to='/cart'>
                                cart
                                <BsCart2 style={{ marginLeft: '10px' }} />
                                <span> {cartCounter}</span>
                            </NavLink>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header