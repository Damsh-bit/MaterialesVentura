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
import { useTranslation } from '../contexts/TranslationContext';
import { Link } from 'react-router-dom';

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
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-24 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">{t('pricing.transparency')}</p>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl uppercase leading-[0.95] text-text-main tracking-tighter">
                {t('pricing.title1')} <br/> <span className="text-primary italic">{t('pricing.title2')}</span>
              </h1>
            </div>
            <div className="bg-surface-card border border-surface-border p-6 md:w-80">
              <div className="flex items-center gap-3 mb-2">
                <RefreshCw size={16} className="text-primary animate-spin-slow" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('pricing.last_updated')}</span>
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
              <h3 className="font-headline font-bold text-lg uppercase text-text-main">{t('pricing.notice.title')}</h3>
              <p className="text-text-muted text-sm uppercase font-mono tracking-tighter">{t('pricing.notice.desc')}</p>
            </div>
          </div>
          <Link to="/contact" className="btn-primary !py-3 !px-8 flex items-center gap-2 group whitespace-nowrap cursor-pointer">
            <Download size={20} /> {t('pricing.btn_pdf')}
          </Link>
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
                  <div className="col-span-2">{t('pricing.table.product')}</div>
                  <div className="text-center">{t('pricing.table.unit')}</div>
                  <div className="text-right"></div>
                </div>
                <div className="divide-y divide-surface-border">
                  {cat.items.map((item) => (
                    <div key={item.name} className="grid grid-cols-4 p-4 items-center group hover:bg-surface-card transition-colors">
                      <div className="col-span-2">
                        <p className="font-headline font-bold text-lg text-text-main group-hover:text-black uppercase">{item.name}</p>
                      </div>
                      <div className="text-center font-mono text-xs text-text-muted uppercase">{item.unit}</div>
                      <div className="text-right flex justify-end">
                        <Link to="/contact" className="btn-primary !px-4 !py-2 !text-[10px] whitespace-nowrap inline-block text-center cursor-pointer">
                          {t('nav.get_quote')}
                        </Link>
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
                <p className="font-mono text-xs font-bold text-primary mb-4 tracking-widest uppercase">{t('pricing.volume.title0')}</p>
                <h2 className="font-headline font-extrabold text-5xl uppercase leading-none mb-6">{t('pricing.volume.title1')} <br/> <span className="text-primary italic">{t('pricing.volume.title2')}</span></h2>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  {t('pricing.volume.desc')}
                </p>
                <div className="flex flex-col gap-4">
                  {t('pricing.volume.benefits').map((benefit: string) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="font-headline font-bold uppercase text-sm tracking-wide">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 flex flex-col items-center text-center gap-8">
                <TrendingDown size={64} className="text-primary" />
                <h3 className="font-headline font-extrabold text-3xl uppercase leading-none italic">{t('pricing.volume.locked1')} <br/> {t('pricing.volume.locked2')}</h3>
                <p className="text-neutral-500 text-sm">{t('pricing.volume.locked_desc')}</p>
                <button className="btn-primary w-full py-4 text-lg cursor-pointer">{t('pricing.volume.btn_enroll')}</button>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mt-24 text-center">
          <p className="text-text-muted italic text-sm mb-8 max-w-2xl mx-auto">
            {t('pricing.disclaimer')}
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:8326148466" className="font-headline font-bold uppercase tracking-widest text-[#111111] hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
              <Clock size={16} /> {t('pricing.verify')}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
