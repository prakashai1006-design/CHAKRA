import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  Upload, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import { useState } from 'react';

const mockVendors = [
  { id: '1', name: 'Nature Pure Supplies', tags: ['Organic', 'Bulk'], contact: 'Anil Kumar', city: 'Mysore', status: 'Active', score: 92 },
  { id: '2', name: 'Ayur-Global Exports', tags: ['Certification: ISO'], contact: 'Meera Das', city: 'Kochi', status: 'Pending Review', score: 85 },
  { id: '3', name: 'Kisan Aggregators', tags: ['Direct-from-farm'], contact: 'Suresh V.', city: 'Nashik', status: 'Inactive', score: 78 },
];

export default function Procurement() {
  const [activeTab, setActiveTab] = useState('vendors');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-serif mb-2">Vendors & Procurement</h1>
          <p className="text-clay/60 font-medium">Manage mappings, vendor scores, and single-click PO generation.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <button className="btn-secondary text-sm flex items-center gap-2">
              <Upload size={18} /> Bulk Vendor Upload
            </button>
            <p className="text-[8px] font-bold text-center uppercase tracking-widest text-clay/30">Auto-map by Location & Date</p>
          </div>
          <button className="btn-primary text-sm flex items-center gap-2 h-11">
            <FileText size={18} /> Create PO
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-clay/10 h-14 items-center">
        {['vendors', 'po-history', 'price-analysis', 'contracts'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-full px-2 text-[11px] uppercase tracking-widest font-bold transition-all relative ${
              activeTab === tab ? 'text-saffron' : 'text-clay/40 hover:text-clay'
            }`}
          >
            {tab.replace('-', ' ')}
            {activeTab === tab && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'vendors' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockVendors.map((vendor) => (
                <div key={vendor.id} className="card-erp hover:border-saffron/20 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-mist rounded-2xl text-saffron">
                      <Building2 size={24} />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                      vendor.status === 'Active' ? 'bg-sage/10 text-sage' : 'bg-turmeric/10 text-turmeric'
                    }`}>
                      {vendor.status}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold mb-2">{vendor.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-clay/50 mb-6 font-medium">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {vendor.city}</span>
                    <span className="w-1 h-1 rounded-full bg-clay/20" />
                    <span className="flex items-center gap-1"><Phone size={14} /> {vendor.contact}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {vendor.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-mist rounded-md border border-clay/5">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-clay/5">
                    <div>
                      <p className="text-[10px] font-bold text-clay/40 uppercase tracking-widest mb-1">Quality Score</p>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-mist rounded-full overflow-hidden">
                          <div className="bg-sage h-full" style={{ width: `${vendor.score}%` }} />
                        </div>
                        <span className="text-xs font-bold text-sage">{vendor.score}%</span>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-clay/20" />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab !== 'vendors' && (
            <div className="card-erp h-64 flex flex-col items-center justify-center text-center opacity-40 grayscale">
              <FileText size={48} className="mb-4" />
              <p className="font-serif text-xl tracking-tight">System Module Initializing</p>
              <p className="text-xs font-bold tracking-widest uppercase mt-2">Data loading from global zones...</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="card-erp bg-saffron text-white shadow-xl shadow-saffron/30">
            <div className="flex items-center justify-between mb-8">
              <CreditCard size={24} />
              <TrendingUp size={20} />
            </div>
            <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-2">Total Procurement Value (MTD)</p>
            <h4 className="text-3xl font-serif font-bold mb-6">₹14.28 L</h4>
            <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest opacity-80 border-t border-white/20 pt-4">
              <span>vs Last Month</span>
              <span className="text-white">+8.4%</span>
            </div>
          </div>

          <div className="card-erp">
            <h4 className="font-serif text-lg mb-6">Action Quicklinks</h4>
            <div className="space-y-3">
              {[
                { icon: FileText, label: 'Download Vendor List', color: 'clay' },
                { icon: ExternalLink, label: 'Third-party Portal', color: 'saffron' },
                { icon: Mail, label: 'Email All Vendors', color: 'sage' },
              ].map((link, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-mist transition-all group">
                  <div className="flex items-center gap-3">
                    <link.icon size={18} className={`text-${link.color}`} />
                    <span className="text-xs font-bold text-clay-800">{link.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-clay/20 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
