import { motion } from 'motion/react';
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight,
  Package,
  Truck,
  ShoppingCart,
  Plus,
  History as HistoryIcon
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', cost: 4000, demand: 2400 },
  { name: 'Tue', cost: 3000, demand: 1398 },
  { name: 'Wed', cost: 2000, demand: 9800 },
  { name: 'Thu', cost: 2780, demand: 3908 },
  { name: 'Fri', cost: 1890, demand: 4800 },
  { name: 'Sat', cost: 2390, demand: 3800 },
  { name: 'Sun', cost: 3490, demand: 4300 },
];

const StatCard = ({ title, value, change, trend, icon: Icon, color }: any) => (
  <div className="card-erp flex items-center justify-between">
    <div>
      <p className="text-xs font-bold text-clay/50 uppercase tracking-widest mb-1">{title}</p>
      <h3 className="text-2xl font-serif font-bold mb-2">{value}</h3>
      <div className={`flex items-center gap-1 text-[10px] font-bold ${trend === 'up' ? 'text-sage' : 'text-red-500'}`}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </div>
    </div>
    <div className={`p-4 rounded-2xl bg-${color}/10 text-${color}`}>
      <Icon size={24} />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      {/* Welcome Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif mb-2">Welcome Back</h1>
          <p className="text-clay/60 font-medium">Here's your supply chain snapshot for today.</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-clay uppercase tracking-widest px-4 py-2 bg-white rounded-xl border border-clay/10">Zone: Bangalore Central</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Inventory" value="1,280 Units" change="+12.5%" trend="up" icon={Package} color="saffron" />
        <StatCard title="Active POs" value="14 Pending" change="+2 from yesterday" trend="up" icon={Truck} color="turmeric" />
        <StatCard title="Avg Recipe Cost" value="₹242.50" change="-4% optimization" trend="down" icon={ShoppingCart} color="sage" />
        <StatCard title="Demand Projection" value="8,400 Units" change="Highly Accurate" trend="up" icon={TrendingUp} color="clay" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 card-erp h-[400px]">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-serif text-lg">Demand vs Cost Analysis</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-clay/40">
                <div className="w-3 h-3 rounded-full bg-saffron" /> Demand
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-clay/40">
                <div className="w-3 h-3 rounded-full bg-turmeric/30" /> Realized Cost
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E8612A" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#E8612A" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#A0A0A0" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#A0A0A0" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="demand" stroke="#E8612A" fillOpacity={1} fill="url(#colorDemand)" strokeWidth={3} />
              <Area type="monotone" dataKey="cost" stroke="#F4A832" fillOpacity={0.1} fill="#F4A832" strokeWidth={2} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Action List */}
        <div className="card-erp">
          <h4 className="font-serif text-lg mb-6">Critical Alerts</h4>
          <div className="space-y-4">
            {[
              { title: 'Low Stock: Ashwagandha', zone: 'Zone A', status: 'critical', icon: AlertCircle },
              { title: 'PO #882 Approved', zone: 'Zone B', status: 'success', icon: CheckCircle2 },
              { title: 'Inventory Batch Expiry', zone: 'Warehouse 1', status: 'critical', icon: HistoryIcon },
              { title: 'New Vendor Mapped', zone: 'Global', status: 'info', icon: Plus },
            ].map((alert, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-mist/30 border border-clay/5">
                <div className={`p-2 rounded-lg ${alert.status === 'critical' ? 'bg-red-50 text-red-500' : 'bg-sage/10 text-sage'}`}>
                  <alert.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">{alert.title}</p>
                  <p className="text-[10px] text-clay/50 font-bold uppercase tracking-tighter">{alert.zone}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 btn-secondary text-xs">View All Alerts</button>
        </div>
      </div>
    </motion.div>
  );
}
