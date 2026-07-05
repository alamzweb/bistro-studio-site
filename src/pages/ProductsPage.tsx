import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuData } from '../data/menu';
import type { MenuItem } from '../data/menu';
import { ProductModal } from '../components/ProductModal';

export function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white uppercase mb-4 neon-text"
          >
            Digital <span className="text-bistro-orange">Catalog</span>
          </motion.h1>
          <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">Full Menu Breakdown</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuData.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedProduct(product)}
              className="glass-panel group cursor-pointer rounded-3xl p-6 border-transparent hover:border-bistro-orange/40 transition-all hover:scale-[1.02]"
            >
              <div className="aspect-square mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-4/5 h-4/5 object-contain drop-shadow-[0_0_15px_rgba(255,106,0,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(255,106,0,0.4)] transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-bistro-orange/60">{product.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-bistro-orange transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{product.description}</p>
                
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-white font-bold tracking-tighter">
                    {typeof product.price === 'number' ? (
                      `Rs. ${product.price}`
                    ) : (
                      `From Rs. ${Math.min(...Object.values(product.price))}`
                    )}
                  </span>
                  <div className="bg-bistro-orange/10 p-2 rounded-full text-bistro-orange group-hover:bg-bistro-orange group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
