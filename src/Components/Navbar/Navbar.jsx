import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useState } from 'react';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import cart from '../../assets/images/cart.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

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
        <h1>SNEAKS</h1>
      </div>

      <div className="nav-menu">
        <ul>
        <li 
          onClick={() => setMenu('home')} 
          style={menu === 'home' ? menuStyle : {}}
        ><Link to = '/' style={linkStyle}>Home</Link>
        </li>
        <li 
          onClick={() => setMenu('products')} 
          style={menu === 'products' ? menuStyle : {}}
        ><Link to = '/products' style={linkStyle}>Products</Link>
        </li>
        <li 
          onClick={() => setMenu('about')} 
          style={menu === 'about' ? menuStyle : {}}
        ><Link to = '/about'  style={linkStyle}>About</Link>
        </li>
        <li 
          onClick={() => setMenu('contact')} 
          style={menu === 'contact' ? menuStyle : {}}
        ><Link to = '/contact'  style={linkStyle}>Contact Us </Link>
        </li>
      </ul>
      </div>

      <div className="nav-profile-cart">
        <img src={search} alt="" />
        <img src={user} alt="" />
        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
