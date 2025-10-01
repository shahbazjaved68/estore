// Navbar.jsx
import React, { useContext, useReducer } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/e_storee.png';
import { ShopContext } from '../../Context/ShopContext';

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return action.menu;
    default:
      return state;
  }
};

const Navbar = () => {
  const [menu, dispatch] = useReducer(menuReducer, 'Shopnow');
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='Navbar'>
      <div className="position-absolute nav_logo">
        <img src={logo} alt="" />
      </div>
      <div className="my-nav">
        <ul className='nav_menu'>
          <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Shopnow' })}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              Shopnow
            </Link>
            {menu === 'Shopnow' ? <hr /> : <></>}
          </li>
          <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Men' })}>
            <Link style={{ textDecoration: 'none' }} to='/mens'>
              Men
            </Link>
            {menu === 'Men' ? <hr /> : <></>}
          </li>
          <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Women' })}>
            <Link style={{ textDecoration: 'none' }} to='/womens'>
              Women
            </Link>
            {menu === 'Women' ? <hr /> : <></>}
          </li>
          <li onClick={() => dispatch({ type: 'SET_MENU', menu: 'Kids' })}>
            <Link style={{ textDecoration: 'none' }} to='/kids'>
              Kids
            </Link>
            {menu === 'Kids' ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className='nav_login_cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src="./images/cart_icon.png" alt="black" />
        </Link>
        <Link to='/signup'>
         
        </Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
