import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Banner />
        <Stats />
      </main>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;