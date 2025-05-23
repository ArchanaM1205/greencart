import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
// import toast from "react-hot-toast"; // No need if no notifications

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  // Fetch all products (dummy data)
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // Add to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    // Removed toast notification as requested
  };

  // Update cart item quantity directly (if needed)
  const updateCartItems = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    // Removed toast notification as requested
  };

  // Remove from cart (decrement quantity or delete if 0)
  const removedFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
    // Removed toast notification as requested
  };

  const getCartCount=()=>{
    let totalCount=0;
    for(const item in cartItems){
        totalCount+=cartItems[item]
    }
    return totalCount;
  }

  //Get cart Total AMount
  const getCartAmount=()=>{
    let totalAmount=0
    for(const items in cartItems){
        let itemInfo=products.find((product)=>product._id===items)
        if(cartItems[items]>0){
            totalAmount+=itemInfo.offerPrice*cartItems[items]
        }
    }
    return Math.floor(totalAmount*100)/100;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    setIsSeller,
    isSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItems,
    removedFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
