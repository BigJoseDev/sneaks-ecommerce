// import Footer from "../Footer/Footer";
// import '../ProductDetails/ProductDetails.css'
// import { useCart } from "../../CartContext";


// const ProductDetails = ({product}) => {
//   const {dispatch} = useCart();
//   const src = (product.photos[0].url);

//   const addToCart =()=>{
//     dispatch({type: 'ADD_TO_CART', product})
//   }
//   return (
//     <>
//     <div className="details-page">
//       <div className="left-page">
//       <img src= {`https://api.timbu.cloud/images/${src}`}  alt={product.name}/>
//       </div>
        
//         <div className="right-page">
//           <h1>{product.name}</h1>
//           <p>Experience the ultimate in comfort and style with the nike air max</p>
//           <h1>${product.current_price[0].USD}</h1>

//           <div className="cart-btn">
//             {/* <div className="btn">
//             <button>-</button>
//               <p>1</p>
//               <button>+</button>
//             </div>
//                */}

          

//               <div className="add-to-cart-btn">
//               <button onClick={addToCart}>Add to cart</button>
//               </div>
              
//             </div>
//         </div>

      


//     </div>
    
//     </>
//   )
// }

// export default ProductDetails



import Footer from "../Footer/Footer";
import '../ProductDetails/ProductDetails.css';
import { useCart } from "../../CartContext";

const ProductDetails = ({product}) => {
  const {dispatch} = useCart();
  const src = (product.photos[0].url);
  console.log("Product Price:", product.current_price);

  const addToCart = () => {
    dispatch({type: 'ADD_TO_CART', product})
  }

  return (
    <>
      <div className="details-page">
        <div className="left-page">
          <img src= {`https://api.timbu.cloud/images/${src}`}  alt={product.name}/>
        </div>
        <div className="right-page">
          <h1>{product.name}</h1>
          <p>Experience the ultimate in comfort and style with the nike air max</p>
          <h2>${product.current_price[0].USD}</h2>
          <div className="cart-btn">
            <div className="add-to-cart-btn">
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;
