import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar cart={cart} />

      <Home addToCart={addToCart} />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <Footer />
    </>
  );
}

export default App;
