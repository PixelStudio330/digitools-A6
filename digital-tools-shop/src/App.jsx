import { useState, useRef } from 'react';
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
  const [activeView, setActiveView] = useState('products'); 
  const shopRef = useRef(null);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    const removedProduct = cart[index]; 
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    if (removedProduct) {
      toast.warn(`${removedProduct.name} removed from cart!`);
    }
  };

  const handleCheckout = () => {
    setCart([]);
    setActiveView('products'); 
    toast.success("Checkout Successful!");
  };

  const handleCartClick = () => {
    setActiveView('cart');
    shopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 relative">
      <Navbar cartCount={cart.length} onCartClick={handleCartClick} />
      
      <main className="w-full overflow-x-hidden">
        <Banner />
        <Stats />
        <div ref={shopRef}>
          <ProductList 
            cart={cart} 
            onAddToCart={addToCart} 
            onRemoveFromCart={removeFromCart}
            onCheckout={handleCheckout}
            activeView={activeView}
            setActiveView={setActiveView}
          />
        </div>

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