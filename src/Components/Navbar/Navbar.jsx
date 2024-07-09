import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useState } from 'react';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import cart from '../../assets/images/cart.png';

const Navbar = () => {
  const [menu, setMenu] = useState('');

  const menuStyle = {
    color: '#FFAE5A'

    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to = '/' style={linkStyle}><h1>SNEAKS</h1></Link>
      </div>

      <div className="nav-menu">
        <ul>
        <li 
          >Home
        </li>
        <li 
          onClick={() => setMenu('products')} 
          style={menu === 'products' ? menuStyle : {}}
        ><Link to = '/' style={linkStyle}>Products</Link>
        </li>
        <li 
          >About
        </li>
        <li 
          >Contact Us 
        </li>
      </ul>
      </div>

      <div className="nav-profile-cart">
        <img src={search} alt="" />
        <img src={user} alt="" />
        <Link to="/cart" style={linkStyle}>
            <img 
                src={cart} 
                alt="cart"
                onClick={() => setMenu('cart')} 
                style={menu === 'cart' ? menuStyle : {}}
            />
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
