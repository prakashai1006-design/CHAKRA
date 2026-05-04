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
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
    <path 
      d="M50 2 L55 18 L70 8 L68 24 L84 18 L78 32 L94 34 L84 44 L98 50 L84 56 L94 66 L78 68 L84 82 L68 76 L70 92 L55 82 L50 98 L45 82 L30 92 L32 76 L16 82 L22 68 L6 66 L16 56 L2 50 L16 44 L6 34 L22 32 L16 18 L32 24 L30 8 L45 18 Z" 
      fill="#FF9933" 
    />
    <circle cx="50" cy="50" r="32" fill="white" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="#138808" strokeWidth="1" />
    <circle cx="50" cy="50" r="8" fill="#138808" />
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
