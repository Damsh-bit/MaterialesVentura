import { 
  FileText, 
  Download, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  TrendingDown, 
  RefreshCw,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

const pricingCategories = [
  {
    title: "Lumber & Framing",
    items: [
      { name: "Douglas Fir 2x4-8'", unit: "Piece", price: "$4.25", change: "stable" },
      { name: "Douglas Fir 2x6-12'", unit: "Piece", price: "$9.50", change: "down" },
      { name: "Douglas Fir 2x10-16'", unit: "Piece", price: "$22.00", change: "stable" },
      { name: "PT 4x4-8' Ground Contact", unit: "Piece", price: "$15.75", change: "up" },
    ]
  },
  {
    title: "Sheathing & Panels",
    items: [
      { name: "1/2\" CDX Plywood 4x8", unit: "Sheet", price: "$28.50", change: "down" },
      { name: "5/8\" Zip System Wall", unit: "Sheet", price: "$42.00", change: "stable" },
      { name: "7/16\" OSB Sheathing", unit: "Sheet", price: "$18.25", change: "down" },
      { name: "3/4\" T&G Subfloor", unit: "Sheet", price: "$48.50", change: "stable" },
    ]
  },
  {
    title: "Siding & Exterior",
    items: [
      { name: "LP SmartSide 7.25\"", unit: "LF", price: "$1.85", change: "stable" },
      { name: "HardiePlank Lap Siding", unit: "Piece", price: "$11.45", change: "up" },
      { name: "Tyvek HomeWrap 9x150", unit: "Roll", price: "$175.00", change: "stable" },
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">TRANSPARENCY</p>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl uppercase leading-[0.95] text-text-main tracking-tighter">
                Live Market <br/> <span className="text-primary italic">Pricing</span>
              </h1>
            </div>
            <div className="bg-surface-card border border-surface-border p-6 md:w-80">
              <div className="flex items-center gap-3 mb-2">
                <RefreshCw size={16} className="text-primary animate-spin-slow" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">Last Updated</span>
              </div>
              <p className="font-headline font-bold text-xl text-text-main">MAY 10, 2024 - 08:00 AM</p>
            </div>
          </div>
        </header>

        <div className="bg-primary/5 border border-primary/20 p-6 mb-12 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-black">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg uppercase text-text-main">Market Notice</h3>
              <p className="text-text-muted text-sm uppercase font-mono tracking-tighter">Prices are subject to change based on daily mill rates and availability.</p>
            </div>
          </div>
          <button className="btn-primary !py-3 !px-8 flex items-center gap-2 group whitespace-nowrap">
            <Download size={20} /> DOWNLOAD PDF PRICE LIST
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {pricingCategories.map((cat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={cat.title} 
              className="space-y-6"
            >
              <h2 className="font-headline font-extrabold text-3xl uppercase text-text-main border-l-4 border-primary pl-4">{cat.title}</h2>
              <div className="bg-white border border-surface-border shadow-sm">
                <div className="grid grid-cols-4 p-4 border-b border-surface-border bg-surface-card font-mono text-[9px] font-bold text-text-muted uppercase tracking-widest">
                  <div className="col-span-2">Product Selection</div>
                  <div className="text-center">Unit</div>
                  <div className="text-right">Contractor Rate</div>
                </div>
                <div className="divide-y divide-surface-border">
                  {cat.items.map((item) => (
                    <div key={item.name} className="grid grid-cols-4 p-4 items-center group hover:bg-surface-card transition-colors">
                      <div className="col-span-2">
                        <p className="font-headline font-bold text-lg text-text-main group-hover:text-black uppercase">{item.name}</p>
                      </div>
                      <div className="text-center font-mono text-xs text-text-muted uppercase">{item.unit}</div>
                      <div className="text-right flex flex-col items-end">
                        <span className="font-headline font-bold text-2xl text-text-main">{item.price}</span>
                        <span className={`text-[9px] font-bold uppercase ${
                          item.change === 'up' ? 'text-red-500' : 
                          item.change === 'down' ? 'text-green-500' : 'text-text-muted'
                        }`}>
                          {item.change === 'stable' ? '• market stable' : item.change === 'up' ? '↗ trending up' : '↘ price drop'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Volume Discounts Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 mt-12 bg-[#111111] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 -mr-48 -mt-48 rotate-45" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-xs font-bold text-primary mb-4 tracking-widest uppercase">Volume Purchasing</p>
                <h2 className="font-headline font-extrabold text-5xl uppercase leading-none mb-6">Bulk Logistics <br/> <span className="text-primary italic">& Direct-to-Site</span></h2>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Managing a framing package for 20+ units or a commercial complex? We offer tiered discounts for volume buyers. All structural orders over $15k qualify for custom logistics coordination.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Direct Jobsite Delivery",
                    "Forklift Services Included",
                    "Dedicated Account Management",
                    "72-Hour Price Guarantees"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="font-headline font-bold uppercase text-sm tracking-wide">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 flex flex-col items-center text-center gap-8">
                <TrendingDown size={64} className="text-primary" />
                <h3 className="font-headline font-extrabold text-3xl uppercase leading-none italic">Locked Mill <br/> Rates</h3>
                <p className="text-neutral-500 text-sm">Enroll in our Contractor Direct program to receive daily mill price alerts and priority inventory holds.</p>
                <button className="btn-primary w-full py-4 text-lg">ENROLL IN CONTRACTOR DIRECT</button>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mt-24 text-center">
          <p className="text-text-muted italic text-sm mb-8 max-w-2xl mx-auto">
            Materiales Ventura reserves the right to adjust pricing based on global supply chain conditions. Quotes are valid for 4 hours unless explicitly guaranteed by an account representative.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:8326148466" className="font-headline font-bold uppercase tracking-widest text-[#111111] hover:text-primary transition-colors flex items-center gap-2">
              <Clock size={16} /> VERIFY DAILY RATES
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
