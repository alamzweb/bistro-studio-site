import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/10"
    >
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/logo.png" alt="Bistro Logo" className="w-10 h-10 object-contain" />
        <span className="text-lg font-bold tracking-tighter text-white hidden sm:block uppercase">
          The Burger Bistro <span className="text-bistro-orange">Pizza Studio</span>
        </span>
      </Link>
      
      <div className="flex gap-4 sm:gap-8 items-center">
        <Link to="/" className="text-gray-300 hover:text-white transition-colors tracking-widest uppercase text-xs sm:text-sm font-medium">
          Home
        </Link>
        <Link to="/products" className="text-gray-300 hover:text-white transition-colors tracking-widest uppercase text-xs sm:text-sm font-medium">
          Menu
        </Link>
        <div className="hidden sm:flex gap-4 border-l border-white/10 pl-8">
          <a href="https://www.instagram.com/_the_burger_bistro_pizzastudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bistro-orange transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.facebook.com/p/The-Burger-Bistro-X-Pizza-Studio-61579297145003/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bistro-orange transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
        <button className="bg-bistro-orange hover:bg-bistro-neon text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,106,0,0.4)]">
          0345-2087183
        </button>
      </div>
    </motion.nav>
  );
}
