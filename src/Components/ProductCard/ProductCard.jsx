import "../ProductCard/ProductCard.css";
import cart from "../../assets/images/cart.png";
// import carts from "../../assets/images/carts.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="cart-icon">
        <img src={cart} alt="" />
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
