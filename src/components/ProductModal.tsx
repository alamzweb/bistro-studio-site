import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { MenuItem } from '../data/menu';

interface ProductModalProps {
  product: MenuItem | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl glass-panel rounded-[2rem] overflow-hidden border-bistro-orange/30 p-8 flex flex-col md:flex-row gap-8"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="flex-1">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(255,106,0,0.3)]"
            />
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-bistro-orange font-bold uppercase tracking-widest text-xs mb-2">{product.category}</span>
            <h2 className="text-3xl font-black text-white mb-4 uppercase">{product.name}</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>
            
            <div className="mt-auto">
              <div className="text-2xl font-bold text-white mb-2">
                {typeof product.price === 'number' ? (
                  `Rs. ${product.price}`
                ) : (
                  <div className="space-y-1">
                    {Object.entries(product.price).map(([size, p]) => (
                      <div key={size} className="flex justify-between text-sm uppercase tracking-widest border-b border-white/10 pb-1">
                        <span className="text-gray-400">{size}:</span>
                        <span>Rs. {p}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
