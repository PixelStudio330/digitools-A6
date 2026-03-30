import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Steps from './components/Steps'; 
import ProductList from './components/ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  // add products to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart!`, {
      style: { borderRadius: '12px' }
    });
  };

  // remove products from the cart
  const removeFromCart = (index) => {
    const itemToRemove = cart[index];
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    toast.error(`${itemToRemove.name} removed from cart`, {
      style: { borderRadius: '12px' }
    });
  };

  // handle successful checkout and reset the cart
  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout Successful!", {
      icon: "🚀",
      style: { borderRadius: '12px', fontWeight: 'bold' }
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Banner />
        <Stats />
        <ProductList 
          cart={cart} 
          onAddToCart={addToCart} 
          onRemoveFromCart={removeFromCart}
          onCheckout={handleCheckout}
        />
        <Steps /> 
      </main>

      <ToastContainer 
        position="top-center" 
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;