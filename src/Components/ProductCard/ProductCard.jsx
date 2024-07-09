import "../ProductCard/ProductCard.css";
import cart from "../../assets/images/cart.png";
// import carts from "../../assets/images/carts.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="cart-icon">
      <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.name}/>
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
