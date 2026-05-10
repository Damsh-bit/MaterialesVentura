import { 
  Trees, 
  Layout as LayoutIcon, 
  Layers, 
  Ruler, 
  PencilRuler, 
  Home, 
  Fence, 
  PlusSquare,
  Search,
  Filter,
  ArrowRight,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';

const categories = [
  "All",
  "Lumber",
  "Siding",
  "Plywood",
  "Beams",
  "Roofing",
  "Fencing"
];

const products = [
  { id: 1, name: 'Premium Douglas Fir 2x4', category: 'Lumber', span: 'Madera de Abeto', icon: <Trees />, description: 'Structural grade lumber for residential framing.' },
  { id: 2, name: 'CDX Plywood 4x8', category: 'Plywood', span: 'Contrachapado', icon: <Layers />, description: 'Standard sheathing for roofs and walls.' },
  { id: 3, name: 'SmartSide Hardboard', category: 'Siding', span: 'Revestimiento', icon: <LayoutIcon />, description: 'Engineered wood siding with advanced durability.' },
  { id: 4, name: 'Pressure Treated 4x4', category: 'Lumber', span: 'Madera Tratada', icon: <Trees />, description: 'Ground contact rated timber for exterior projects.' },
  { id: 5, name: 'Glulam Header 3.5x12', category: 'Beams', span: 'Viga Laminada', icon: <Ruler />, description: 'High-strength laminated beam for long spans.' },
  { id: 6, name: 'CertainTeed Shingles', category: 'Roofing', span: 'Tejas', icon: <Home />, description: 'Architectural asphalt shingles in various colors.' },
  { id: 7, name: 'Cedar Fence Pickets', category: 'Fencing', span: 'Cerca de Cedro', icon: <Fence />, description: 'Natural rot-resistant cedar for residential fencing.' },
  { id: 8, name: 'Custom Joist Trusses', category: 'Lumber', span: 'Cerchas', icon: <PencilRuler />, description: 'Pre-engineered trusses built to project specs.' },
];

export default function Products() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.span.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase text-center md:text-left">{t('products.catalog')}</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl uppercase leading-[0.95] text-text-main tracking-tighter text-center md:text-left">
              {t('products.title1')} <br/> <span className="text-primary italic">{t('products.title2')}</span>
            </h1>
            <div className="flex flex-col gap-4 w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                <input 
                  type="text" 
                  placeholder={t('products.search')}
                  className="w-full bg-surface-card border border-surface-border p-4 pl-12 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 font-headline font-bold uppercase tracking-widest text-sm transition-all border cursor-pointer ${
                activeCategory === cat 
                ? 'bg-black text-primary border-black' 
                : 'bg-white text-text-muted border-surface-border hover:border-text-main'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={p.id}
              className="bg-white border border-surface-border p-8 flex flex-col justify-between group hover:border-primary hover:shadow-xl transition-all h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-text-muted group-hover:text-primary transition-colors">
                    {p.icon}
                  </div>
                  <span className="font-mono text-[9px] font-bold text-text-muted px-2 py-0.5 border border-surface-border uppercase tracking-widest">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-headline font-extrabold text-2xl uppercase text-text-main leading-tight mb-2 group-hover:text-black">
                  {p.name}
                </h3>
                <p className="font-mono text-[10px] text-text-muted uppercase mb-4 tracking-tighter">
                  {p.span}
                </p>
                <p className="text-text-muted text-[13px] leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-surface-border">
                <Link to="/contact" className="w-full btn-primary !py-4 !text-sm flex items-center justify-center gap-2 cursor-pointer mt-4">
                  {t('nav.get_quote')} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 border-2 border-dashed border-surface-border">
            <Info className="mx-auto text-text-muted mb-4" size={48} />
            <p className="font-headline font-bold text-2xl uppercase text-text-muted">{t('products.no_results')}</p>
            <button 
              onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
              className="mt-6 text-primary font-headline font-bold uppercase hover:underline cursor-pointer"
            >
              {t('products.clear_filters')}
            </button>
          </div>
        )}

        <section className="mt-32 p-12 bg-[#111111] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 -mr-32 -mt-32 rotate-45" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-white uppercase leading-none mb-6">
                {t('products.bulk.title1')} <br/> <span className="text-primary italic">{t('products.bulk.title2')}</span>
              </h2>
              <p className="text-neutral-400 text-lg">
                {t('products.bulk.desc')}
              </p>
            </div>
            <button className="btn-primary px-12 py-6 text-xl flex items-center gap-4 group flex-shrink-0 cursor-pointer">
              {t('products.bulk.btn')} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
