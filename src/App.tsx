import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { VisitUs } from './components/VisitUs';
import { FloatingElement } from './components/FloatingElement';
import { Navbar } from './components/Navbar';
import { ProductsPage } from './pages/ProductsPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 w-full max-w-7xl mx-auto backdrop-blur-[2px]">
        <MenuSection />
      </div>
      <VisitUs />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="bg-bistro-dark min-h-screen font-sans selection:bg-bistro-orange selection:text-white relative">
        <Navbar />

        {/* Background Floating Elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
          <FloatingElement
            src="/images/floating_burger_main_1777100774062.png"
            className="w-[350px] h-[350px] top-[10%] -left-[10%] z-10"
            speed={0.5}
            rotateSpeed={15}
          />
          <FloatingElement
            src="/images/floating_pizza_main_1777100807757.png"
            className="w-[450px] h-[450px] top-[30%] -right-[10%] z-20"
            speed={0.8}
            direction="down"
            rotateSpeed={-10}
          />
          <FloatingElement
            src="/images/floating_burger_alt_1777100870311.png"
            className="w-[300px] h-[300px] top-[55%] -left-[5%] z-10"
            speed={1.0}
            rotateSpeed={20}
          />
          <FloatingElement
            src="/images/floating_pizza_alt_1777100902937.png"
            className="w-[400px] h-[400px] top-[75%] -right-[8%] z-10"
            speed={0.3}
            direction="down"
            rotateSpeed={-5}
          />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </main>
    </Router>
  );
}

export default App;
