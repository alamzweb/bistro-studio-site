import { motion } from 'framer-motion';

const burgers = [
  { name: 'Beef Burger', price: 360 },
  { name: 'Beef Cheese Burger', price: 410 },
  { name: 'Beef Tower Burger', price: 460 },
  { name: 'Chicken Burger', price: 340 },
  { name: 'Chicken Cheese Burger', price: 390 },
  { name: 'Chicken Tower Burger', price: 440 },
  { name: 'Zinger Burger', price: 400 },
  { name: 'Zinger Cheese Burger', price: 450 },
  { name: 'Zinger Tower Burger', price: 500 },
  { name: 'Jalapeno Burger', price: 450 },
  { name: 'Jalapeno Cheese Burger', price: 500 },
  { name: 'Jalapeno Tower Burger', price: 550 },
  { name: 'Zinger Pizza Burger', price: 610 },
];

const classicPizzas = {
  flavors: ['Tikka', 'Fajita', 'Achari', 'Cheese Tikka', 'Cheese Lover', 'Mayo Garlic'],
  prices: { small: 550, medium: 850, large: 1150 }
};

const specialPizzas = {
  flavors: ['Chicken Supreme', 'Super Max', 'Spicy Garlic Tikka', 'Euro Green', 'Extra Spices', 'Chicken Pepperoni'],
  prices: { small: 600, medium: 900, large: 1250 }
};

const broast = [
  { name: 'Qtr Chest Injected Broast', price: 650 },
  { name: 'Qtr Leg Injected Broast', price: 650 },
  { name: 'Half Injected Broast', price: 1150 },
  { name: 'Full Injected Broast', price: 2250 },
];

export function MenuSection() {
  return (
    <section className="relative z-20 py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4 neon-text inline-block">THE DIGITAL MENU</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-bistro-orange to-transparent mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Burgers Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h3 className="text-3xl font-bold text-bistro-orange mb-8 tracking-wide uppercase border-b border-white/10 pb-4">Bistro Burgers</h3>
          <div className="space-y-4">
            {burgers.map((item, i) => (
              <div key={i} className="flex justify-between items-end group">
                <span className="text-lg text-gray-200 group-hover:text-white transition-colors">{item.name}</span>
                <div className="flex-grow border-b border-dashed border-white/20 mx-4 mb-2 group-hover:border-bistro-orange/50 transition-colors" />
                <span className="text-xl font-bold text-bistro-neon">Rs. {item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-12">
          {/* Pizzas */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-3xl font-bold text-bistro-orange mb-6 tracking-wide uppercase border-b border-white/10 pb-4">Pizzas</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-2">Classic Pizza</h4>
              <p className="text-sm text-gray-400 mb-4">{classicPizzas.flavors.join(', ')}</p>
              <div className="flex gap-4 text-bistro-neon font-bold">
                <span>Sm: Rs. {classicPizzas.prices.small}</span>
                <span>Md: Rs. {classicPizzas.prices.medium}</span>
                <span>Lg: Rs. {classicPizzas.prices.large}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-2">Special Pizza</h4>
              <p className="text-sm text-gray-400 mb-4">{specialPizzas.flavors.join(', ')}</p>
              <div className="flex gap-4 text-bistro-neon font-bold">
                <span>Sm: Rs. {specialPizzas.prices.small}</span>
                <span>Md: Rs. {specialPizzas.prices.medium}</span>
                <span>Lg: Rs. {specialPizzas.prices.large}</span>
              </div>
            </div>
          </motion.div>

          {/* Broast */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-3xl font-bold text-bistro-orange mb-8 tracking-wide uppercase border-b border-white/10 pb-4">Injected Broast</h3>
            <div className="space-y-4">
              {broast.map((item, i) => (
                <div key={i} className="flex justify-between items-end group">
                  <span className="text-lg text-gray-200 group-hover:text-white transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dashed border-white/20 mx-4 mb-2 group-hover:border-bistro-orange/50 transition-colors" />
                  <span className="text-xl font-bold text-bistro-neon">Rs. {item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
