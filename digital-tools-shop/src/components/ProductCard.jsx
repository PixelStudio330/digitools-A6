import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-[24px] border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 group flex flex-col h-full">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
       
        <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
          <img 
            src={product.image} 
            alt={product.name} 
            className={`object-contain transition-all duration-300 ${
              
              product.id === 3 
                ? "w-10 h-10 scale-[1.5] translate-x-[2px] -translate-y-[2px]" 
                : "w-7 h-7"
            } group-hover:rotate-3`} 
          />
        </div>
        
        {product.badge && (
          <span className={`px-4 py-1.5 rounded-full text-[12px] font-[800] ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-grow">
        <h3 className="text-[22px] font-[800] text-[#101727] mb-3 group-hover:text-[#4F39F6] transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-[#627382] text-[15px] leading-relaxed mb-6 font-medium">
          {product.description}
        </p>

        {/* Price Section */}
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-[32px] font-[800] text-[#101727]">${product.price}</span>
          <span className="text-[#627382] font-semibold text-[15px]">{product.billing}</span>
        </div>

        {/* Feature List */}
        <ul className="space-y-4 mb-10">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-[14px] text-[#627382] font-semibold">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <button 
        onClick={() => onAddToCart(product)}
        className="w-full py-4 bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white font-[800] rounded-[16px] shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-300 hover:brightness-110 active:scale-[0.98]"
      >
        Buy Now
      </button>
    </div>
  );
}; 

export default ProductCard;