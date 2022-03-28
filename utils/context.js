import { useState, createContext } from "react";

export const CartContext = createContext(null);
export const FavoriteContext = createContext(null);

function ProductContext(props) {
  const [cartItem, setCartItem] = useState([]);
  const [starItem, setStarItem] = useState([]);
  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      <FavoriteContext.Provider value={{ starItem, setStarItem }}>
        {props.children}
      </FavoriteContext.Provider>
    </CartContext.Provider>
  );
}

export default ProductContext;
