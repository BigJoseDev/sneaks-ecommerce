


// import { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingProduct = state.find(item => item.id === action.product.id);
//       if (existingProduct) {
//         return state.map(item =>
//           item.id === action.product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...state, { ...action.product, quantity: 1 }];
//     case "DECREMENT_QUANTITY":
//       return state.map(item =>
//         item.id === action.productId
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       );
//     case "REMOVE_FROM_CART":
//       return state.filter(item => item.id !== action.productId);
//     case "CLEAR_CART":
//       return [];
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);






import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  console.log("Action Dispatched:", action);
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find(item => item.id === action.product.id);
      if (existingProduct) {
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    case "INCREMENT_QUANTITY":
      return state.map(item =>
        item.id === action.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREMENT_QUANTITY":
      return state.map(item =>
        item.id === action.productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.productId);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
  
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

