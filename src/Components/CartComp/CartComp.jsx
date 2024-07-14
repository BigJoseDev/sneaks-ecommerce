



// import "../CartComp/CartComp.css";
// import trash from "../../assets/images/trash.svg";
// import { Link } from "react-router-dom";
// import { useCart } from "../../CartContext";

// const CartComp = () => {
//   const { cart, dispatch } = useCart();

//   const removeFromCart = (productId) => {
//     dispatch({ type: "REMOVE_FROM_CART", productId });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   const incrementQuantity = (productId) => {
//     const product = cart.find(item => item.id === productId);
//     if (product) {
//       dispatch({ type: "ADD_TO_CART", product });
//     }
//   };

//   const decrementQuantity = (productId) => {
//     const product = cart.find(item => item.id === productId);
//     if (product && product.quantity > 1) {
//       dispatch({ type: "DECREMENT_QUANTITY", productId });
//     } else {
//       removeFromCart(productId);
//     }
//   };

//   const subtotal = cart.reduce((total, item) => total + item.current_price[0].USD * item.quantity, 0);

//   return (
//     <div className="cart-comp">
//       <div className="left-cart-items">
//         {cart.map(item => (
//           <div className="left-cart" key={item.id}>
//             <div className="cart-image">
//               <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} alt={item.name} />
//             </div>
//             <div className="name-price">
//               <div className="cart-details">
//                 <h1>{item.name}</h1>
//                 <div className="btn">
//                   <button onClick={() => decrementQuantity(item.id)}>-</button>
//                   <p>{item.quantity}</p>
//                   <button onClick={() => incrementQuantity(item.id)}>+</button>
//                 </div>
//               </div>
//               <div className="cart-price">
//                 <h1>${(item.current_price[0].USD * item.quantity).toFixed(2)}</h1>
//                 <img src={trash} alt="Remove" onClick={() => removeFromCart(item.id)} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="right-cart">
//         <div className="cart-summary">
//           <h1>Summary</h1>
//         </div>
//         <div className="estimate">
//           <div className="sub-total">
//             <p>Subtotal</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className="sub-total">
//             <p>Estimated Shipping</p>
//             <p>$8.00</p>
//           </div>
//           <div className="sub-total">
//             <p>Estimated Tax</p>
//             <p>-</p>
//           </div>
//         </div>
//         <div className="total">
//           <p>Total</p>
//           <h3>${(subtotal + 8.00).toFixed(2)}</h3>
//         </div>
//         <div className="checkout">
//           <Link to='/checkout'><button>CHECKOUT</button></Link>
//         </div>
//       </div>
//       <button className="clearbtn" onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default CartComp;







import "../CartComp/CartComp.css";
import trash from "../../assets/images/trash.svg";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const CartComp = () => {
  const { cart, dispatch } = useCart();
  

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const incrementQuantity = (productId) => {
    dispatch({ type: "INCREMENT_QUANTITY", productId });
  };

  const decrementQuantity = (productId) => {
    dispatch({ type: "DECREMENT_QUANTITY", productId });
  };

  const subtotal = cart.reduce((total, item) => {
    const price = item.current_price?.[0]?.USD || 0;
    console.log(`Item: ${item.name}, Price: ${price}, Quantity: ${item.quantity}`);
    return total + price * item.quantity;
  }, 0);

  return (
    <>
    <div className="cart-comp">
      <div className="left-cart-items">
        {cart.map(item => (
          <div className="left-cart" key={item.id}>
            <div className="cart-image">
              <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} alt={item.name} />
            </div>
            <div className="name-price">
              <div className="cart-details">
                <h1>{item.name}</h1>
                <div className="btn">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </div>
              <div className="cart-price">
                <h1>${(item.current_price?.[0]?.USD * item.quantity).toFixed(2)}</h1>
                <img src={trash} alt="Remove" onClick={() => removeFromCart(item.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="right-cart">
        <div className="cart-summary">
          <h1>Summary</h1>
        </div>
        <div className="estimate">
          <div className="sub-total">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="sub-total">
            <p>Estimated Shipping</p>
            <p>$8.00</p>
          </div>
          <div className="sub-total">
            <p>Estimated Tax</p>
            <p>-</p>
          </div>
        </div>
        <div className="total">
          <p>Total</p>
          <h3>${(subtotal + 8.00).toFixed(2)}</h3>
        </div>
        <div className="checkout">
          <Link to='/checkout'><button>CHECKOUT</button></Link>
        </div>
      </div>
      
    </div>
    <button className="clearbtn" onClick={clearCart}>Clear Cart</button>
    </>
  );
};

export default CartComp;



