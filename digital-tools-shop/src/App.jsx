import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Steps from './components/Steps'; 
import CTA from './components/CTA';
import ProductList from './components/ProductList';
import Plans from './components/Plans';
import Footer from './components/Footer'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout Successful!");
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
        <Plans />
        <CTA />
        <Footer />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;