import "../ProductCard/ProductCard.css";
import cart from "../../assets/images/cart.png";
// import carts from "../../assets/images/carts.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ product, openProduct }) => {
  const src = (product.photos[0].url);
  return (
    <div className="product-card" onClick={() => openProduct(product.id)}>
      <div className="cart-icon">
      <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
      </div>
      <div className="product-image">
        <img src= {`https://api.timbu.cloud/images/${src}` || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4Lj5HCKvTuwMxkgfl47vVI_t7Jx78NZ__Q&s"}  
alt={product.name}/>
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <h2 className="price">${product.current_price[0].USD}</h2>
      </div>
    </div>
  );
};

export default ProductCard;