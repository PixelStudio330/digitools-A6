import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';

const ProductList = ({ onAddToCart, onRemoveFromCart, onCheckout, cart = [] }) => {
  const [activeTab, setActiveTab] = useState('products');

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-[40px] lg:px-[100px]">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-[52px] font-[800] text-[#101727] tracking-tight">
            Premium Digital Tools
          </h2>
          <p className="text-[#627382] text-[18px] max-w-2xl mx-auto font-medium">
            Choose from our curated collection of premium digital products designed 
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons Container */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center bg-white p-1.5 rounded-full border border-gray-200/60 shadow-sm">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-10 py-3 rounded-full text-[15px] font-bold transition-all duration-300 ${
                activeTab === 'products'
                  ? "bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white shadow-lg shadow-purple-200/60"
                  : "text-[#627382] hover:text-[#4F39F6]"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab('cart')}
              className={`px-10 py-3 rounded-full text-[15px] font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'cart'
                  ? "bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white shadow-lg shadow-purple-200/60"
                  : "text-[#627382] hover:text-[#4F39F6]"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {cart.length > 0 ? (
              <div className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm">
                <h3 className="text-2xl font-[800] text-[#101727] mb-8">Your Cart</h3>
                
                <div className="space-y-4 mb-10">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-[#FAFAFB] rounded-[24px] border border-gray-50 transition-all hover:border-purple-100">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <img src={item.image} alt="" className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                          <h4 className="text-[18px] font-bold text-[#101727]">{item.name}</h4>
                          <p className="text-[#627382] font-semibold">${item.price}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => onRemoveFromCart(index)}
                        className="text-[#FF4D4D] font-bold text-[14px] hover:underline px-4 py-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-8">
                  <span className="text-[#627382] font-bold text-[18px]">Total:</span>
                  <span className="text-[32px] font-[800] text-[#101727]">${totalPrice}</span>
                </div>

                {/* Button to trigger onCheckout */}
                <button 
                  onClick={onCheckout}
                  className="w-full py-5 bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white font-[800] rounded-[20px] shadow-lg shadow-purple-200 transition-all hover:scale-[1.01] hover:brightness-110 active:scale-[0.98]"
                >
                  Proceed To Checkout
                </button>
              </div>
            ) : (
              <div className="min-h-[450px] flex flex-col items-center justify-center bg-white rounded-[32px] border border-dashed border-gray-200 shadow-sm">
                <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-[#4F39F6]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-[800] text-[#101727]">Your Cart is Empty</h3>
                <p className="text-[#627382] mt-2 font-medium">Add some tools to your cart to see them here!</p>
                <button 
                  onClick={() => setActiveTab('products')}
                  className="mt-8 font-bold text-[15px] px-8 py-3 rounded-full border-2 border-[#4F39F6] text-[#4F39F6] hover:bg-[#4F39F6] hover:text-white transition-all"
                >
                  Go Back Shopping
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;