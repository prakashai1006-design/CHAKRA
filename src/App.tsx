/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Star, Leaf, Sparkles, Circle } from 'lucide-react';

const SudarshanaChakra = ({ className, size = 100 }: { className?: string, size?: number }) => (
  <motion.svg 
    width={size}
    height={size}
    viewBox="0 0 100 100" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
    {/* Outer Saffron Blades (Representing strength and fire) */}
    <path 
      d="M50 2 L55 18 L70 8 L68 24 L84 18 L78 32 L94 34 L84 44 L98 50 L84 56 L94 66 L78 68 L84 82 L68 76 L70 92 L55 82 L50 98 L45 82 L30 92 L32 76 L16 82 L22 68 L6 66 L16 56 L2 50 L16 44 L6 34 L22 32 L16 18 L32 24 L30 8 L45 18 Z" 
      fill="#FF9933" 
    />
    {/* White Inner Disc (Representing purity and peace) */}
    <circle cx="50" cy="50" r="32" fill="white" />
    {/* Green Edge and Hub (Representing life and growth) */}
    <circle cx="50" cy="50" r="30" fill="none" stroke="#138808" strokeWidth="1" />
    <circle cx="50" cy="50" r="8" fill="#138808" />
    {/* spokes aligned with Ashoka Chakra style */}
    <g stroke="#138808" strokeWidth="0.8">
      {[...Array(24)].map((_, i) => (
        <line 
          key={i} 
          x1="50" y1="50" 
          x2={50 + 30 * Math.cos((i * 15 * Math.PI) / 180)} 
          y2={50 + 30 * Math.sin((i * 15 * Math.PI) / 180)} 
        />
      ))}
    </g>
  </motion.svg>
);

export default function App() {
  const products = [
    {
      title: "Golden Focus Bar",
      price: "₹149",
      description: "High-focus snack with Brahmi + Lion's Mane",
      tags: ["Brahmi", "Lion's Mane"],
      gradient: "from-saffron to-turmeric"
    },
    {
      title: "Moringa Energy Shots",
      price: "₹299",
      description: "Daily wellness shots with Vitamin B12",
      tags: ["🔥 Bestseller"],
      gradient: "from-sage to-green-600",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-deep flex flex-col font-sans selection:bg-saffron selection:text-white">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none noise-bg opacity-[0.03] z-[100]" />

      {/* Navigation */}
      <nav className="h-20 w-full flex items-center justify-between px-6 md:px-12 border-b border-clay/10 backdrop-blur-md bg-white/40 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <SudarshanaChakra size={36} className="drop-shadow-md" />
          <span className="text-2xl font-serif tracking-[0.2em] font-light">CHAKRA</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold opacity-70">
          {['Our Story', 'Products', 'The Science', 'Reviews'].map((link) => (
            <a key={link} href="#" className="hover:text-saffron transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-[11px] uppercase tracking-wider font-bold cursor-pointer hidden sm:block hover:text-saffron">
            Log In
          </span>
          <button className="bg-saffron text-white px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.1em] font-bold shadow-lg shadow-saffron/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
            <ShoppingBag size={14} />
            Shop Now
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
        {/* Hero Section */}
        <section className="lg:col-span-7 flex flex-col justify-center px-6 md:px-16 py-12 md:py-20 relative overflow-hidden">
          {/* Background Motif - Sudarshana Chakra */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none scale-150">
            <SudarshanaChakra size={600} className="grayscale brightness-0 opacity-50" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <span className="text-[11px] font-serif uppercase tracking-[0.4em] text-clay mb-6 block font-medium">
              Functional Food · Since 2023
            </span>
            <h1 className="text-5xl md:text-[82px] leading-[1] md:leading-[0.9] font-serif font-light mb-8">
              Food that<br />
              <i className="text-saffron font-normal">thinks</i> with you.
            </h1>
            <p className="text-lg md:text-xl text-[#5A4A35] font-light max-w-md mb-10 leading-relaxed italic">
              Rooted in Ayurveda. Backed by science.<br />
              Built for how you live today.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <button className="w-full sm:w-auto bg-saffron text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-saffron/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                Explore Products
              </button>
              <a href="#" className="flex items-center gap-2 text-sm font-semibold border-b border-deep/20 pb-1 hover:border-saffron hover:text-saffron transition-all">
                Our Story <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex items-center gap-3 opacity-70 text-[11px] uppercase tracking-wider font-semibold">
              <div className="flex text-turmeric gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <span>Loved by 40,000+ customers · Lab-tested</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex flex-wrap gap-4"
          >
            {[
              { icon: Leaf, label: 'Ashwagandha' },
              { icon: Sparkles, label: 'Turmeric' },
              { icon: Circle, label: 'Moringa' }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white/50 backdrop-blur px-5 py-3 rounded-full flex items-center gap-3 text-xs font-bold border border-white/40 shadow-sm hover:bg-white transition-colors cursor-default">
                <Icon size={14} className="text-clay" />
                {label}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Sidebar / Shop Section */}
        <section className="lg:col-span-5 bg-white flex flex-col p-8 md:p-12 border-l border-clay/10">
          <div className="mb-12">
            <span className="text-[10px] font-serif uppercase tracking-[0.3em] text-clay block mb-3 font-semibold">
              What We Make
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 italic">Products built around you.</h2>
            
            <div className="grid gap-6">
              {products.map((product) => (
                <motion.div 
                  key={product.title}
                  whileHover={{ x: 4 }}
                  className="flex bg-cream/40 p-5 rounded-2xl border border-clay/5 group cursor-pointer hover:border-clay/20 transition-all shadow-sm"
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${product.gradient} flex-shrink-0 shadow-inner`} />
                  <div className="ml-5 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-xl leading-tight font-medium group-hover:text-saffron transition-colors">
                        {product.title}
                      </h3>
                      <span className="text-saffron font-bold">{product.price}</span>
                    </div>
                    <p className="text-xs opacity-70 mt-2 mb-3 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] px-3 py-1 rounded-full border ${tag.includes('🔥') ? 'bg-saffron text-white border-saffron font-bold italic' : 'bg-white border-black/5 font-medium'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8">
            <div className="bg-deep text-cream p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Leaf size={100} strokeWidth={1} />
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[10px] font-serif uppercase tracking-[0.3em] text-turmeric mb-4 font-bold">
                  The Science
                </span>
                <p className="font-serif italic text-2xl leading-snug mb-6 font-light">
                  "Your food should work<br />as hard as you do."
                </p>
                <div className="flex gap-8 w-full justify-between mt-4 pt-6 border-t border-white/10 px-2">
                  {[
                    { label: 'Users', val: '40K+' },
                    { label: 'Clean', val: '100%' },
                    { label: 'Tested', val: '3rd Party' }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-turmeric text-lg font-bold">{stat.val}</div>
                      <div className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-deep text-white/40 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 text-[10px] tracking-[0.2em] uppercase font-semibold gap-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <span>Free Delivery Above ₹499</span>
          <span className="hidden sm:inline">·</span>
          <span>Lab Tested & Certified</span>
          <span className="hidden sm:inline">·</span>
          <span>40,000+ Happy Customers</span>
        </div>
        <div className="text-center md:text-right">
          &copy; 2025 Chakra Foods Pvt. Ltd.
        </div>
      </footer>
    </div>
  );
}
