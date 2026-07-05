import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bistro-orange/20 via-black to-black opacity-80" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white neon-text">
            The Burger Bistro <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bistro-orange to-bistro-neon">Pizza Studio</span>
          </h1>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center opacity-50">
        <span className="text-sm tracking-widest uppercase text-white mb-2">Explore Menu</span>
        <svg className="w-6 h-6 text-bistro-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
