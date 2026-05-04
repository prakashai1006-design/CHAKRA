import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Target, 
  Settings,
  ChevronRight,
  TrendingDown,
  Activity
} from 'lucide-react';
import { useState } from 'react';

const mockPlans = [
  { id: '1', date: '2025-05-10', zone: 'Bangalore East', recipes: 12, totalQty: '4,500 units', status: 'In Progress' },
  { id: '2', date: '2025-05-11', zone: 'Mumbai West', recipes: 8, totalQty: '2,100 units', status: 'Planned' },
  { id: '3', date: '2025-05-12', zone: 'Delhi Central', recipes: 25, totalQty: '10,200 units', status: 'Draft' },
];

export default function Planning() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-serif mb-2">Demand & Production</h1>
          <p className="text-clay/60 font-medium">Zone-level data planning and automated production schedules.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Calendar size={18} /> New Production Run
        </button>
      </div>

      <div className="card-erp bg-sage/5 border-sage/10 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-sage" size={20} />
          <h4 className="font-serif text-xl text-sage">Stock-Driven Optimization</h4>
        </div>
        <p className="text-sm text-sage/70 mb-6 font-medium">Auto-calculated requirement based on current inventory levels and projected delivery leads.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-2xl border border-sage/10">
            <p className="text-[10px] font-bold text-sage/60 uppercase tracking-widest mb-1">Recommended Production</p>
            <p className="text-lg font-bold">1,450 kg</p>
            <p className="text-[9px] text-sage/40 font-bold uppercase mt-1">Mix Base A</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-sage/10 opacity-50">
            <p className="text-[10px] font-bold text-sage/60 uppercase tracking-widest mb-1">Raw Material Buffer</p>
            <p className="text-lg font-bold">4.5 Days</p>
            <p className="text-[9px] text-sage/40 font-bold uppercase mt-1">Safe Operating Zone</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn-primary bg-sage hover:bg-sage/80 text-xs w-full py-3">Generate Auto-Plan</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Demand Planning Area */}
        <div className="lg:col-span-8 space-y-6">
          <div className="card-erp">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-serif text-xl">Demand Forecasting (Weekly)</h4>
              <button className="text-xs font-bold text-saffron uppercase tracking-widest hover:underline">Download AI Model CSV</button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Projected Demand', val: '24,500', sub: 'Units/Week' },
                { label: 'Available Capacity', val: '32,000', sub: 'Units/Week' },
                { label: 'Planned Output', val: '22,400', sub: 'Units/Week' },
                { label: 'Est. Fulfillment', val: '98.2%', sub: 'Target: 95%' },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-mist/40 border border-clay/5">
                  <p className="text-[10px] font-bold text-clay/50 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-serif font-bold text-deep">{stat.val}</p>
                  <p className="text-[10px] font-bold text-clay/30 uppercase tracking-tighter mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg px-2">Upcoming Production Cycles</h4>
            {mockPlans.map((plan) => (
              <div key={plan.id} className="card-erp hover:border-saffron/20 transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-mist rounded-xl text-clay">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold">{plan.zone}</h5>
                    <p className="text-[10px] font-bold text-clay/40 uppercase tracking-widest">{plan.date}</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-clay/50 uppercase tracking-widest mb-1">Recipes</p>
                    <p className="text-sm font-bold">{plan.recipes}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-clay/50 uppercase tracking-widest mb-1">Target Yield</p>
                    <p className="text-sm font-bold">{plan.totalQty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                  <span className={`text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                    plan.status === 'In Progress' ? 'bg-sage/10 text-sage' : 
                    plan.status === 'Planned' ? 'bg-turmeric/10 text-turmeric' : 
                    'bg-clay/5 text-clay'
                  }`}>
                    {plan.status}
                  </span>
                  <ChevronRight size={20} className="text-clay/20" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Controls */}
        <div className="lg:col-span-4 space-y-6">
          <div className="card-erp bg-clay text-white">
            <h4 className="font-serif text-lg mb-6">Location Basetrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold opacity-60">Avg Leads Time</span>
                <span className="text-xs font-bold">4.2 Days</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold opacity-60">Waste Rate</span>
                <span className="text-xs font-bold text-turmeric">1.8% (Target: 2%)</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-turmeric" />
                  <span className="text-xs font-bold uppercase tracking-widest">Zone Target Met</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-turmeric h-full w-[85%]" />
                </div>
                <p className="text-[9px] mt-2 opacity-50 font-bold uppercase tracking-widest text-center">85% Quarterly Milestone</p>
              </div>
            </div>
          </div>

          <div className="card-erp">
            <h4 className="font-serif text-lg mb-6">Plan Constraints</h4>
            <div className="space-y-4">
              {[
                { label: 'Daily Lab Capacity', val: '40 Batches', color: 'saffron' },
                { label: 'Refrigerated Transit', val: '80% Utilized', color: 'sage' },
                { label: 'Vendor Bottleneck', val: 'Packaging-01', color: 'clay' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-${item.color}`} />
                  <div>
                    <p className="text-xs font-bold text-clay-800">{item.label}</p>
                    <p className="text-[10px] font-bold text-clay/50 uppercase tracking-widest">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 btn-secondary text-xs flex items-center justify-center gap-2">
              <Settings size={14} /> Adjust Constraints
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
