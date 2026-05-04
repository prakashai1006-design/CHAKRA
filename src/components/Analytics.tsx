import { motion } from 'motion/react';
import { 
  PieChart as PieIcon, 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight,
  Download,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';

const categoryData = [
  { name: 'Energy Bars', value: 400 },
  { name: 'Shots', value: 300 },
  { name: 'Supplements', value: 300 },
  { name: 'Raw Herbs', value: 200 },
];

const COLORS = ['#E8612A', '#F4A832', '#C9622F', '#4A6741'];

const profitTrend = [
  { date: 'Jan', profit: 4000 },
  { date: 'Feb', profit: 3000 },
  { date: 'Mar', profit: 5000 },
  { date: 'Apr', profit: 4500 },
  { date: 'May', profit: 6000 },
  { date: 'Jun', profit: 5500 },
];

export default function Analytics() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-serif mb-2">Business Intelligence</h1>
          <p className="text-clay/60 font-medium">Data-driven insights for executive decision making.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary text-[11px] uppercase tracking-widest font-bold flex items-center gap-2">
            <Download size={16} /> Export JSON/CSV
          </button>
          <button className="btn-primary text-[11px] uppercase tracking-widest font-bold flex items-center gap-2">
            <Sparkles size={16} /> AI Insights
          </button>
        </div>
      </div>

      {/* Top Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-erp bg-gradient-to-br from-saffron to-turmeric text-white border-none relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp size={100} strokeWidth={1} />
          </div>
          <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-2">Gross Margin Improvement</p>
          <h4 className="text-4xl font-serif font-bold mb-4">12.4% <span className="text-sm font-sans font-normal opacity-80">YoY</span></h4>
          <p className="text-xs opacity-80 leading-relaxed font-medium">Primarily driven by optimized vendor mappings in South Zone.</p>
        </div>

        <div className="card-erp bg-deep text-cream border-none">
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mb-2">Inventory Turnover</p>
          <h4 className="text-4xl font-serif font-bold mb-4">8.2x <span className="text-sm font-sans font-normal opacity-40">Monthly</span></h4>
          <div className="flex items-center gap-2 text-sage text-xs font-bold">
            <ArrowUpRight size={14} /> 1.2pt Improvement
          </div>
        </div>

        <div className="card-erp">
          <p className="text-[10px] font-bold text-clay/40 uppercase tracking-widest mb-2">Zone Profitability Rank</p>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center bg-mist/30 p-2 rounded-xl">
              <span className="text-xs font-bold">1. Bangalore Cent.</span>
              <span className="text-xs font-bold text-sage">68%</span>
            </div>
            <div className="flex justify-between items-center bg-mist/30 p-2 rounded-xl">
              <span className="text-xs font-bold">2. Mumbai West</span>
              <span className="text-xs font-bold text-sage">62%</span>
            </div>
            <div className="flex justify-between items-center bg-mist/30 p-2 rounded-xl">
              <span className="text-xs font-bold">3. Delhi North</span>
              <span className="text-xs font-bold text-turmeric">45%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Share */}
        <div className="card-erp h-[400px]">
          <h4 className="font-serif text-xl mb-6">Production Output Share</h4>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {categoryData.map((cat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-xs font-bold text-clay/60 uppercase tracking-widest">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profit Trend */}
        <div className="card-erp h-[400px]">
          <h4 className="font-serif text-xl mb-6">Profit Optimization Trend</h4>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profitTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#A0A0A0" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#A0A0A0" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="profit" stroke="#E8612A" strokeWidth={4} dot={{ r: 6, fill: '#E8612A', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card-erp">
        <div className="flex justify-between items-center mb-8">
          <h4 className="font-serif text-xl">Top Business Recommendations</h4>
          <div className="p-2 bg-saffron/10 rounded-lg text-saffron">
            <Sparkles size={20} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Vendor Switch: Zone A', desc: 'Potential 12.5% cost reduction by moving pulses procurement to Vendor B.', status: 'High impact' },
            { title: 'Recipe Tweak: Energy Shot', desc: 'Substituting B12 source could reduce manufacturing lead time by 1.2 days.', status: 'Efficiency' },
            { title: 'Stock Optimization', desc: 'North warehouse is 80% saturated. Recommend skip-ship logic for upcoming POs.', status: 'Logistics' },
          ].map((rec, i) => (
            <div key={i} className="p-5 rounded-3xl bg-mist/20 border border-clay/10 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group">
              <span className="text-[9px] uppercase font-bold tracking-widest text-saffron bg-saffron/10 px-2 py-1 rounded-full mb-4 inline-block">{rec.status}</span>
              <h5 className="font-bold mb-2 group-hover:text-saffron transition-colors">{rec.title}</h5>
              <p className="text-xs text-clay/60 leading-relaxed font-medium">{rec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
