import { motion } from 'motion/react';
import { 
  Calculator, 
  MapPin, 
  DollarSign, 
  Layers,
  Search,
  ArrowUpRight,
  TrendingUp,
  Settings,
  ChefHat
} from 'lucide-react';
import { useState } from 'react';

const mockRecipes = [
  { id: '1', name: 'Golden Focus Bar', category: 'Energy Bars', margin: '42%', cost: 84.50, components: 12, status: 'Active' },
  { id: '2', name: 'Moringa Super Shot', category: 'Energy Shots', margin: '68%', cost: 92.00, components: 8, status: 'Draft' },
  { id: '3', name: 'Ashwa-Dose Daily', category: 'Supplements', margin: '55%', cost: 145.20, components: 15, status: 'Active' },
];

export default function Recipes() {
  const [selectedZone, setSelectedZone] = useState('Bangalore');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-serif mb-2">Recipe Costing & Menu</h1>
          <p className="text-clay/60 font-medium">Auto-costing based on real-time vendor price mapping.</p>
        </div>
        <div className="flex items-center gap-3 p-1.5 bg-white rounded-2xl border border-clay/10">
          {['Bangalore', 'Mumbai', 'Delhi', 'Chennai'].map((zone) => (
            <button 
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedZone === zone ? 'bg-saffron text-white shadow-lg shadow-saffron/20' : 'text-clay/50 hover:bg-mist'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recipe List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay/30" size={20} />
            <input 
              type="text" 
              placeholder="Filter by recipe, category or tag..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-clay/10 rounded-2xl focus:ring-2 focus:ring-saffron/20 transition-all outline-none"
            />
          </div>

          {mockRecipes.map((recipe) => (
            <div key={recipe.id} className="card-erp flex items-center justify-between group cursor-pointer hover:border-saffron/30 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-white transition-all">
                  <ChefHat />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">{recipe.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-bold text-clay/40 uppercase tracking-widest">{recipe.category}</span>
                    <span className="w-1 h-1 rounded-full bg-clay/20" />
                    <span className="text-[10px] font-bold text-clay/40 uppercase tracking-widest">{recipe.components} Ingredients</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-clay/50 uppercase tracking-widest mb-1">Cost ({selectedZone})</p>
                  <p className="text-xl font-serif font-bold text-deep">₹{recipe.cost.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-clay/50 uppercase tracking-widest mb-1">Est. Margin</p>
                  <p className="text-xl font-serif font-bold text-sage">{recipe.margin}</p>
                </div>
                <button className="p-3 bg-mist rounded-xl text-clay hover:bg-saffron hover:text-white transition-all">
                  <Calculator size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="card-erp bg-deep text-cream">
            <h4 className="font-serif text-lg mb-6 text-turmeric">Dynamic Insights</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold opacity-60">Highest Contributor</span>
                  <span className="text-xs font-bold text-saffron">Premium Ashwa</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-saffron h-full w-[72%]" />
                </div>
                <p className="text-[10px] mt-2 opacity-40">Accounts for 72% of total recipe cost in {selectedZone}.</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-sage mb-2">
                  <TrendingUp size={16} />
                  <span className="text-xs font-bold">Optimization Potential</span>
                </div>
                <p className="text-xs leading-relaxed opacity-60">
                  Switching to <b>Vendor X</b> in the North Region could reduce cost by <b>₹12.40</b> per unit.
                </p>
              </div>
            </div>
          </div>

          <div className="card-erp">
            <h4 className="font-serif text-lg mb-4">Vendor Price Mapping</h4>
            <p className="text-xs text-clay/60 mb-6 font-medium">Update prices for all vendors in {selectedZone} by ingredient.</p>
            <div className="space-y-4">
              <button className="w-full btn-secondary text-xs flex items-center justify-center gap-2">
                <Layers size={14} /> Bulk Update Pricing
              </button>
              <button className="w-full btn-secondary text-xs flex items-center justify-center gap-2">
                <Settings size={14} /> Global Price Adjustments
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
