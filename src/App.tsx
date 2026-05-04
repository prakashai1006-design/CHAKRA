import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  ChefHat, 
  CalendarClock, 
  BarChart3, 
  Settings as SettingsIcon, 
  LogOut,
  Plus,
  ArrowUpRight,
  Clock,
  AlertTriangle,
  History as HistoryIcon,
  MapPin,
  Menu,
  BookOpen
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, signInWithGoogle, logOut } from './lib/firebase';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Procurement from './components/Procurement';
import Recipes from './components/Recipes';
import Planning from './components/Planning';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Catalogue from './components/Catalogue';

const SudarshanaChakra = ({ className, size = 100 }: { className?: string, size?: number }) => (
  <motion.svg 
    width={size}
    height={size}
    viewBox="0 0 100 100" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: 360 }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <linearGradient id="chakraGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF9933" />
        <stop offset="45%" stopColor="#FF9933" />
        <stop offset="45%" stopColor="#FFFFFF" />
        <stop offset="55%" stopColor="#FFFFFF" />
        <stop offset="55%" stopColor="#138808" />
        <stop offset="100%" stopColor="#138808" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
        <feOffset dx="0.5" dy="0.5" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* Bolder Outer Blades with Tricolor Gradient */}
    <path 
      d="M50 2 L58 18 L74 8 L70 26 L88 18 L80 34 L98 34 L86 46 L100 50 L86 54 L98 66 L80 66 L88 82 L70 74 L74 92 L58 82 L50 98 L42 82 L26 92 L30 74 L12 82 L20 66 L2 66 L14 54 L0 50 L14 46 L2 34 L20 34 L12 18 L30 26 L26 8 L42 18 Z" 
      fill="url(#chakraGradient)"
      filter="url(#shadow)"
      stroke="#ffffff22"
      strokeWidth="0.5"
    />

    {/* White Central Disc */}
    <circle cx="50" cy="50" r="28" fill="white" />
    
    {/* Ashoka Chakra Blue elements */}
    <circle cx="50" cy="50" r="26" fill="none" stroke="#000080" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="5" fill="#000080" />
    
    {/* 24 Navy Blue Spokes */}
    <g stroke="#000080" strokeWidth="0.8">
      {[...Array(24)].map((_, i) => (
        <line 
          key={i} 
          x1="50" y1="50" 
          x2={50 + 26 * Math.cos((i * 15 * Math.PI) / 180)} 
          y2={50 + 26 * Math.sin((i * 15 * Math.PI) / 180)} 
        />
      ))}
    </g>

    {/* Tiny hub detail */}
    <circle cx="50" cy="50" r="2" fill="white" opacity="0.5" />
  </motion.svg>
);

const NavItem = ({ to, icon: Icon, label, collapsed }: { to: string, icon: any, label: string, collapsed: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
        isActive 
          ? 'bg-saffron text-white shadow-lg shadow-saffron/20' 
          : 'text-clay-800/60 hover:bg-cream/50 hover:text-clay-800'
      }`}
    >
      <Icon size={20} className={isActive ? 'text-white' : 'group-hover:text-saffron transition-colors'} />
      {!collapsed && <span className="font-semibold text-sm tracking-wide">{label}</span>}
    </Link>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center bg-mist">
      <SudarshanaChakra size={80} />
    </div>
  );

  if (!user) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-mist p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-clay/10"
      >
        <SudarshanaChakra size={100} className="mx-auto mb-8" />
        <h1 className="text-3xl font-serif mb-4">Chakra Supply Chain</h1>
        <p className="text-clay/60 mb-10 leading-relaxed font-medium">
          Secure end-to-end ERP for modern food production. Log in with your corporate account to continue.
        </p>
        <button 
          onClick={signInWithGoogle}
          className="w-full bg-deep text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <img src="https://www.google.com/favicon.ico" alt="google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </motion.div>
    </div>
  );

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-mist overflow-hidden">
        {/* Sidebar */}
        <motion.aside 
          animate={{ width: sidebarCollapsed ? 88 : 280 }}
          className="bg-white border-r border-clay/10 flex flex-col h-full relative z-50 p-4"
        >
          <div className="flex items-center gap-3 mb-10 px-2 h-12">
            <SudarshanaChakra size={32} />
            {!sidebarCollapsed && (
              <span className="text-xl font-serif tracking-[0.1em] font-bold">CHAKRA</span>
            )}
          </div>

          <nav className="flex-1 space-y-2">
            <NavItem to="/" icon={LayoutDashboard} label="Dashboard" collapsed={sidebarCollapsed} />
            <NavItem to="/inventory" icon={Package} label="Inventory" collapsed={sidebarCollapsed} />
            <NavItem to="/procurement" icon={Truck} label="Procurement" collapsed={sidebarCollapsed} />
            <NavItem to="/recipes" icon={ChefHat} label="Recipes & Costing" collapsed={sidebarCollapsed} />
            <NavItem to="/catalogue" icon={BookOpen} label="Catalogue & Menu" collapsed={sidebarCollapsed} />
            <NavItem to="/planning" icon={CalendarClock} label="Planning" collapsed={sidebarCollapsed} />
            <NavItem to="/analytics" icon={BarChart3} label="Analytics" collapsed={sidebarCollapsed} />
          </nav>

          <div className="border-t border-clay/10 pt-4 space-y-2">
            <NavItem to="/settings" icon={SettingsIcon} label="Settings" collapsed={sidebarCollapsed} />
            <button 
              onClick={logOut}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-semibold text-sm"
            >
              <LogOut size={20} />
              {!sidebarCollapsed && <span>Log Out</span>}
            </button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="h-20 bg-white border-b border-clay/10 flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 hover:bg-mist rounded-lg transition-colors text-clay"
              >
                <Menu size={20} />
              </button>
              <h2 className="text-xl font-serif font-medium">Supply Chain Management</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">{user.displayName}</p>
                <p className="text-[10px] text-clay/50 font-bold uppercase tracking-widest">{user.email}</p>
              </div>
              <img src={user.photoURL || ''} alt="avatar" className="w-10 h-10 rounded-full border-2 border-saffron" />
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/procurement" element={<Procurement />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/planning" element={<Planning />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
