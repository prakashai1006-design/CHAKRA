import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  AlertTriangle, 
  Clock, 
  History as HistoryIcon,
  Download,
  Plus
} from 'lucide-react';
import { useState } from 'react';

const mockInventory = [
  { id: '1', name: 'Almonds', sku: 'ING-ALM-001', stock: 450, unit: 'kg', expiry: '2025-10-12', status: 'Healthy', batch: 'BT-092' },
  { id: '2', name: 'Ashwagandha Powder', sku: 'ING-ASH-054', stock: 12, unit: 'kg', expiry: '2024-12-01', status: 'Expiring Soon', batch: 'BT-112' },
  { id: '3', name: 'Coconut Oil', sku: 'ING-COCO-09', stock: 89, unit: 'liter', expiry: '2026-05-30', status: 'Healthy', batch: 'BT-045' },
  { id: '4', name: 'Turmeric Raw', sku: 'ING-TUR-002', stock: 5, unit: 'kg', expiry: '2025-01-15', status: 'Low Stock', batch: 'BT-001' },
];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-serif mb-2">Inventory Ledger</h1>
          <p className="text-clay/60 font-medium">End-to-end batch tracking & shelf-life management.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none btn-secondary flex items-center justify-center gap-2">
            <Download size={18} /> Export
          </button>
          <button className="flex-1 md:flex-none btn-primary flex items-center justify-center gap-2">
            <Plus size={18} /> Add Batch
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-clay/30" size={20} />
          <input 
            type="text" 
            placeholder="Search by Ingredient, SKU or Batch ID..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-clay/10 rounded-2xl focus:ring-2 focus:ring-saffron/20 transition-all outline-none font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary px-6 flex items-center gap-2">
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <div className="card-erp overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-mist/50 border-b border-clay/10">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay/50">Ingredient / SKU</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay/50">Batch ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay/50">Current Stock</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay/50">Expiry Date</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay/50">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-clay/50">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-clay/5">
              {mockInventory.map((item) => (
                <tr key={item.id} className="hover:bg-mist/20 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-serif font-bold">{item.name}</p>
                    <p className="text-[10px] font-bold text-clay/40 tracking-wider">{item.sku}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-mono text-xs bg-clay/5 px-2 py-1 rounded text-clay">#{item.batch}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 font-bold">
                      {item.stock} {item.unit}
                      {item.stock < 10 && <AlertTriangle size={14} className="text-red-500" />}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <Clock size={14} className="text-clay/40" />
                      {item.expiry}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                      item.status === 'Healthy' ? 'bg-sage/10 text-sage' : 
                      item.status === 'Expiring Soon' ? 'bg-turmeric/10 text-turmeric' : 
                      'bg-red-50 text-red-500'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="p-2 hover:bg-clay/5 rounded-lg text-clay transition-all">
                      <ArrowRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expiry Alerts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="card-erp bg-red-50/30 border-red-100">
          <div className="flex justify-between items-start mb-6">
            <h4 className="font-serif text-lg text-red-700">Wastage Warnings</h4>
            <AlertTriangle className="text-red-500" size={24} />
          </div>
          <p className="text-sm text-red-600/70 mb-6 font-medium">The following items will expire within 7 days. Action required to avoid wastage.</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-red-100">
              <span className="text-sm font-bold">Honey - Batch BW-45</span>
              <span className="text-xs font-bold text-red-500">Exp: Tomorrow</span>
            </div>
          </div>
        </div>

        <div className="card-erp bg-sage/5 border-sage/10">
          <div className="flex justify-between items-start mb-6">
            <h4 className="font-serif text-lg text-sage">Stock Re-balance</h4>
            <HistoryIcon className="text-sage" size={24} />
          </div>
          <p className="text-sm text-sage/70 mb-6 font-medium">Stock levels analyzed based on 30-day trailing demand. Re-ordering recommended.</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-sage/10">
              <span className="text-sm font-bold">Flax Seeds</span>
              <span className="text-xs font-bold text-sage">Shortfall: -140kg</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
