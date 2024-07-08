import "../CartComp/CartComp.css";
import trash from "../../assets/images/trash.svg";
import airmax from "../../assets/images/airmax.png";
import addidas from "../../assets/images/addidas.png";
import { Link } from "react-router-dom";

const CartComp = () => {
  return (
    <div className="cart-comp">

        <div className="left-cart-items">
      <div className="left-cart">
        <div className="cart-image">
          <img src={airmax} alt="" />
        </div>

        <div className="name-price">
          <div className="cart-details">
            <h1>NIKE AIR MAX</h1>
            <div className="btn">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>

          <div className="cart-price">
            <h1>$370</h1>
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
      <div className="left-cart">
        <div className="cart-image">
          <img src={addidas} alt="" />
        </div>

        <div className="name-price">
          <div className="cart-details">
            <h1>NIKE AIR MAX</h1>
            <div className="btn">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>

          <div className="cart-price">
            <h1>$370</h1>
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
      </div>

      <div className="right-cart">
        <div className="cart-summary">
          <h1>Summary</h1>
        </div>

        <div className="estimate">
          <div className="sub-total">
            <p>Subtotal</p>
            <p>$490</p>
          </div>
          <div className="sub-total">
            <p>Estimated Shipping</p>
            <p>$490</p>
          </div>
          <div className="sub-total">
            <p>Estimated Tax</p>
            <p>-</p>
          </div>
        </div>
        <div className="total">
          <p>Total</p>
          <h3>$498.00</h3>
        </div>
        <div className="checkout">
         <Link to = '/checkout'> <button>CHECKOUT</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
