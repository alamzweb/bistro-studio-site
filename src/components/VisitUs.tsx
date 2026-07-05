import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export function VisitUs() {
  return (
    <section className="relative z-20 py-24 px-4 w-full flex items-center justify-center bg-black/50 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-10 md:p-16 rounded-[2.5rem] border-bistro-orange/30 neon-border flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-white uppercase neon-text">Contact Us</h2>
            <div className="flex flex-col gap-4 text-gray-300 text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="text-bistro-orange w-6 h-6 flex-shrink-0 mt-1" />
                <p>Sheet No # 21 House # 6/3,<br/>Model Colony Nishterabad,<br/>Karachi</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-bistro-orange w-6 h-6 flex-shrink-0" />
                <span className="font-bold text-white bg-bistro-orange/20 px-3 py-1 rounded-full text-sm tracking-widest uppercase">Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone className="text-bistro-orange w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:03452087183" className="hover:text-bistro-orange transition-colors">0345-2087183</a>
              </div>
            </div>

            <div className="flex gap-6 pt-4 justify-center md:justify-start">
              <a 
                href="https://www.instagram.com/_the_burger_bistro_pizzastudio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-bistro-orange hover:text-white transition-all text-gray-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://www.facebook.com/p/The-Burger-Bistro-X-Pizza-Studio-61579297145003/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-bistro-orange hover:text-white transition-all text-gray-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-bistro-orange/30 shadow-[0_0_50px_rgba(255,106,0,0.2)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.801646199211!2d67.18773117443119!3d24.90474664348577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3370008fb013d%3A0xd8e8b315ead85e9c!2sThe%20Burger%20Bistro%20Pizza%20Studio!5e0!3m2!1sen!2s!4v1777109278885!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps/place/The+Burger+Bistro+Pizza+Studio/@24.9047466,67.1877312,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb3370008fb013d:0xd8e8b315ead85e9c!8m2!3d24.9047466!4d67.1903061!16s%2Fg%2F11s86m_f6f?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-bistro-orange hover:text-white transition-colors font-bold flex items-center gap-2"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
