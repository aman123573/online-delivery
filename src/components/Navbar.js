import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/pizza.png'
import '../styles/Navbar.css';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ItemContext from '../store/ItemContext';

const Navbar = () => {

    const itemCtx = useContext(ItemContext);

    const totalCartItem = itemCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0);

    return (
        <>
            <nav className='navbar-section'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Fresh Pizza</p>
                </div>
                <div className="list-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/items">Items</Link></li>
                        <li><Link to="/cart">Cart</Link><span className='badge badge-warning' id='lblCartCount'>{totalCartItem}</span></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="hamburger">
                    <MenuRoundedIcon />
                </div>
            </nav>
        </>
    )
}

export default Navbar
