export interface MenuItem {
  id: string;
  name: string;
  category: 'burger' | 'pizza' | 'sandwich' | 'calzone' | 'broast' | 'pasta' | 'sides';
  description: string;
  image: string;
  price: number | { [key: string]: number };
}

export const menuData: MenuItem[] = [
  // BURGERS
  {
    id: 'beef-burger',
    name: 'Beef Burger',
    category: 'burger',
    description: 'Classic grilled beef patty topped with fresh lettuce, tomatoes, and our signature bistro sauce on a toasted bun.',
    image: '/images/floating_burger_main_1777100774062.png',
    price: 360
  },
  {
    id: 'beef-cheese-burger',
    name: 'Beef Cheese Burger',
    category: 'burger',
    description: 'Our classic beef burger enhanced with a thick slice of melted cheddar cheese for extra richness.',
    image: '/images/floating_burger_main_1777100774062.png',
    price: 410
  },
  {
    id: 'beef-tower-burger',
    name: 'Beef Tower Burger',
    category: 'burger',
    description: 'Double beef patties stacked high with cheese and all the classic fixings. A true bistro behemoth.',
    image: '/images/floating_burger_main_1777100774062.png',
    price: 460
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    category: 'burger',
    description: 'Tender grilled chicken breast marinated in herbs, served with crisp lettuce and mayo.',
    image: '/images/floating_burger_alt_1777100870311.png',
    price: 340
  },
  {
    id: 'zinger-burger',
    name: 'Zinger Burger',
    category: 'burger',
    description: 'Our famous spicy crispy chicken fillet with a signature crunch, topped with lettuce and spicy mayo.',
    image: '/images/floating_burger_alt_1777100870311.png',
    price: 400
  },
  {
    id: 'zinger-pizza-burger',
    name: 'Zinger Pizza Burger',
    category: 'burger',
    description: 'The ultimate crossover: A crispy zinger fillet topped with pizza sauce, melted mozzarella, and pepperoni.',
    image: '/images/floating_burger_alt_1777100870311.png',
    price: 610
  },
  {
    id: 'jalapeno-burger',
    name: 'Jalapeno Burger',
    category: 'burger',
    description: 'For those who love heat! Beef or chicken patty with an extra kick of pickled jalapenos and spicy sauce.',
    image: '/images/floating_burger_main_1777100774062.png',
    price: 450
  },

  // PIZZAS
  {
    id: 'tikka-pizza',
    name: 'Chicken Tikka Pizza',
    category: 'pizza',
    description: 'Traditional Pakistani Tikka chicken chunks, onions, and lots of mozzarella cheese on a hand-tossed base.',
    image: '/images/floating_pizza_main_1777100807757.png',
    price: { small: 550, medium: 850, large: 1150 }
  },
  {
    id: 'supreme-pizza',
    name: 'Chicken Supreme Pizza',
    category: 'pizza',
    description: 'The King of pizzas: loaded with chicken, pepperoni, mushrooms, olives, capsicum, and onions.',
    image: '/images/floating_pizza_alt_1777100902937.png',
    price: { small: 600, medium: 900, large: 1250 }
  },
  {
    id: 'spicy-garlic-tikka',
    name: 'Spicy Garlic Tikka Pizza',
    category: 'pizza',
    description: 'A punch of garlic combined with spicy Tikka chicken and green chillies for an intense flavor profile.',
    image: '/images/floating_pizza_alt_1777100902937.png',
    price: { small: 600, medium: 900, large: 1250 }
  },
  {
    id: 'fajita-sandwich',
    name: 'Fajita Sandwich',
    category: 'sandwich',
    description: 'Sizzling fajita-style chicken with peppers and onions, folded into a toasted 9-inch bread with melted cheese.',
    image: '/images/floating_burger_alt_1777100870311.png', // Generic placeholder
    price: 1100
  },

  // BROAST
  {
    id: 'injected-broast-qtr',
    name: 'Injected Broast (Quarter)',
    category: 'broast',
    description: 'Our proprietary "Injected" method ensures the chicken is juicy to the bone. Deep-fried to a golden crisp. Choice of Chest or Leg.',
    image: '/images/floating_burger_alt_1777100870311.png', // Generic placeholder
    price: 650
  },
  {
    id: 'injected-broast-full',
    name: 'Injected Broast (Full)',
    category: 'broast',
    description: 'A whole chicken prepared with our secret injection marinade and fried to perfection. Perfect for sharing.',
    image: '/images/floating_burger_alt_1777100870311.png', // Generic placeholder
    price: 2250
  },

  // CALZONE & PASTA
  {
    id: 'bistro-special-calzone',
    name: 'Bistro Special Calzone',
    category: 'calzone',
    description: 'Folded pizza dough stuffed with chicken, cheese, and special bistro ingredients, baked to perfection.',
    image: '/images/floating_pizza_alt_1777100902937.png',
    price: 1100
  },
  {
    id: 'creamy-pasta',
    name: 'Bistro Creamy Pasta',
    category: 'pasta',
    description: 'Penne pasta tossed in a rich, velvety white sauce with tender chicken chunks and melted cheese.',
    image: '/images/floating_pizza_main_1777100807757.png',
    price: { regular: 350, large: 550 }
  }
];
