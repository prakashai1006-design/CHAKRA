import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  User, 
  Bell, 
  ShieldCheck, 
  Globe,
  Database,
  Cloud
} from 'lucide-react';

export default function Settings() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl space-y-12"
    >
      <div>
        <h1 className="text-3xl font-serif mb-2">Global Settings</h1>
        <p className="text-clay/60 font-medium">Configure your supply chain nodes and third-party integrations.</p>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="text-saffron" size={20} />
            <h4 className="font-serif text-xl">Organization & Nodes</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-erp">
              <h5 className="font-bold mb-1">Entity Name</h5>
              <p className="text-xs text-clay/50 mb-4">Internal and external legal name.</p>
              <input type="text" defaultValue="Chakra Foods Pvt. Ltd." className="w-full bg-mist/50 border border-clay/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-saffron/20 font-medium" />
            </div>
            <div className="card-erp">
              <h5 className="font-bold mb-1">Primary Node</h5>
              <p className="text-xs text-clay/50 mb-4">Default production center.</p>
              <select className="w-full bg-mist/50 border border-clay/10 rounded-xl px-4 py-3 outline-none font-medium">
                <option>Bangalore Central</option>
                <option>Mumbai Hub</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="text-saffron" size={20} />
            <h4 className="font-serif text-xl">Third-party Integrations</h4>
          </div>
          <div className="space-y-4">
            {[
              { name: 'SAP S/4HANA', status: 'Connected', icon: Database },
              { name: 'Blue Dart Logistics', status: 'Active', icon: Globe },
              { name: 'Stripe Corporate', status: 'Inactive', icon: ShieldCheck },
            ].map((integ, i) => (
              <div key={i} className="card-erp flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-mist rounded-xl text-clay">
                    <integ.icon size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold">{integ.name}</h5>
                    <p className="text-[10px] font-bold text-clay/40 uppercase tracking-widest">Enterprise Connection</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${integ.status === 'Connected' || integ.status === 'Active' ? 'text-sage' : 'text-clay/30'}`}>
                    {integ.status}
                  </span>
                  <button className="text-xs font-bold text-saffron uppercase tracking-widest hover:underline">Configure</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-red-50/30 p-8 rounded-[2.5rem] border border-red-100">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-red-500" size={20} />
            <h4 className="font-serif text-xl text-red-700">Security & Access</h4>
          </div>
          <p className="text-sm text-red-600/70 mb-6 font-medium">Currently operating in Admin Mode. Restricted access control enabled for all other users.</p>
          <div className="flex gap-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold hover:bg-red-600 transition-all text-sm">
              Revoke Node Access
            </button>
            <button className="btn-secondary border-red-200 text-red-700 hover:bg-red-50 text-sm">
              View Access Logs
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
