import { motion } from 'motion/react';
import { 
  BookOpen, 
  Tag, 
  Layers, 
  Plus, 
  Search,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { useState } from 'react';

const mockCatalog = [
  { id: '1', name: 'Almond Energy Bar', category: 'Energy Bars', skus: 3, price: '₹120 - ₹350', status: 'Active' },
  { id: '2', name: 'Ashwagandha Vitality Shot', category: 'Shots', skus: 1, price: '₹85', status: 'Active' },
  { id: '3', name: 'Daily Greens Supplement', category: 'Supplements', skus: 2, price: '₹1,200', status: 'Discontinued' },
];

export default function Catalogue() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-serif mb-2">Catalogue & Menu</h1>
          <p className="text-clay/60 font-medium">Configure customer-facing product menus and SKU attributes.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary text-sm flex items-center gap-2">
            <Tag size={18} /> Manage Categories
          </button>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Plus size={18} /> Add Product
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay/30" size={20} />
          <input 
            type="text" 
            placeholder="Search catalog by product name or SKU..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-clay/10 rounded-2xl focus:ring-2 focus:ring-saffron/20 transition-all outline-none font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCatalog.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
          <div key={product.id} className="card-erp group cursor-pointer hover:border-saffron/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-mist rounded-2xl text-saffron group-hover:bg-saffron group-hover:text-white transition-all">
                <BookOpen size={24} />
              </div>
              <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-1 rounded-full ${
                product.status === 'Active' ? 'bg-sage/10 text-sage' : 'bg-red-50 text-red-500'
              }`}>
                {product.status}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold mb-1">{product.name}</h3>
            <p className="text-xs font-bold text-clay/40 uppercase tracking-widest mb-6">{product.category}</p>

            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-clay/40">Base Price</span>
                <span className="font-bold">{product.price}</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-clay/40">Active SKUs</span>
                <span className="font-bold">{product.skus} Variants</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-clay/5">
              <div className="flex items-center gap-2 text-saffron hover:underline text-xs font-bold uppercase tracking-widest">
                Edit Details <ChevronRight size={14} />
              </div>
              <button className="p-2 hover:bg-mist rounded-lg text-clay/30 hover:text-clay transition-all">
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card-erp bg-mist/30 border-dashed border-2 flex flex-col items-center justify-center py-12">
        <Layers className="text-clay/20 mb-4" size={40} />
        <h4 className="font-serif text-lg text-clay/40">Menu Configuration</h4>
        <p className="text-xs text-clay/30 font-medium max-w-xs text-center mt-2">
          Sync your catalogue with third-party platforms like Swiggy, Zomato, or Shopify via the Settings panel.
        </p>
      </div>

      <div className="card-erp bg-blue-50/30 border-blue-100 mt-12">
        <div className="flex items-center gap-3 mb-4">
          <Info className="text-blue-500" size={20} />
          <h4 className="font-serif text-xl text-blue-700">Digital Menu Insights</h4>
        </div>
        <p className="text-sm text-blue-600/70 mb-6 font-medium">
          Top searched item this week: <span className="font-bold text-blue-800">Ashwagandha Shot</span>. 
          Consider adding it to the 'Featured' section of your digital catalogue.
        </p>
      </div>
    </motion.div>
  );
}
