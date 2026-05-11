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
  ArrowRight,
  Info,
  X,
  Phone,
  Mail,
  CheckCircle2,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
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
  { 
    id: 'syp', 
    name: 'Southern Yellow Pine (SYP)', 
    category: 'Lumber', 
    span: 'Pino Amarillo del Sur', 
    icon: <Trees />, 
    description: 'The strongest structural lumber available. Ideal for framing, fencing, decking, and load-bearing applications. Trusted by contractors across Houston.',
    featured: true 
  },
  { id: 1, name: 'Premium Douglas Fir 2x4', category: 'Lumber', span: 'Madera de Abeto', icon: <Trees />, description: 'Structural grade lumber for residential framing.' },
  { id: 2, name: 'CDX Plywood 4x8', category: 'Plywood', span: 'Contrachapado', icon: <Layers />, description: 'Standard sheathing for roofs and walls.' },
  { id: 3, name: 'SmartSide Hardboard', category: 'Siding', span: 'Revestimiento', icon: <LayoutIcon />, description: 'Engineered wood siding with advanced durability.' },
  { id: 4, name: 'Pressure Treated 4x4', category: 'Lumber', span: 'Madera Tratada', icon: <Trees />, description: 'Ground contact rated timber for exterior projects.' },
  { id: 5, name: 'Glulam Header 3.5x12', category: 'Beams', span: 'Viga Laminada', icon: <Ruler />, description: 'High-strength laminated beam for long spans.' },
  { id: 6, name: 'CertainTeed Shingles', category: 'Roofing', span: 'Tejas', icon: <Home />, description: 'Architectural asphalt shingles in various colors.' },
  { id: 7, name: 'Cedar Fence Pickets', category: 'Fencing', span: 'Cerca de Cedro', icon: <Fence />, description: 'Natural rot-resistant cedar for residential fencing.' },
  { id: 8, name: 'Custom Joist Trusses', category: 'Lumber', span: 'Cerchas', icon: <PencilRuler />, description: 'Pre-engineered trusses built to project specs.' },
];

type Product = typeof products[0];

function QuoteModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative bg-white w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-primary" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-text-muted hover:text-text-main transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-8 gap-4"
            >
              <CheckCircle2 className="text-primary" size={56} strokeWidth={1.5} />
              <h3 className="font-headline font-extrabold text-3xl uppercase text-text-main">
                Quote Requested!
              </h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                We'll reach out within 4 business hours with pricing for <strong>{product.name}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 font-headline font-bold uppercase text-sm tracking-widest text-primary hover:text-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <>
              {/* Product tag */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-surface-border">
                <div className="w-10 h-10 bg-surface-card flex items-center justify-center text-text-muted flex-shrink-0">
                  {product.icon}
                </div>
                <div>
                  <p className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest mb-0.5">
                    {product.category}
                  </p>
                  <h3 className="font-headline font-extrabold text-xl uppercase text-text-main leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>

              <p className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest mb-5">
                {t('nav.get_quote')} / SOLICITAR COTIZACIÓN
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[9px] text-text-muted uppercase tracking-widest">
                      Name / Nombre
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Full name"
                      className="w-full bg-surface-card border border-surface-border px-4 py-3 font-headline font-bold text-sm focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-mono text-[9px] text-text-muted uppercase tracking-widest">
                      Phone / Teléfono
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(000) 000-0000"
                      className="w-full bg-surface-card border border-surface-border px-4 py-3 font-headline font-bold text-sm focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[9px] text-text-muted uppercase tracking-widest">
                    Quantity & Details / Cantidad y Detalles
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={`Dimensions, quantity, delivery needs...`}
                    className="w-full bg-surface-card border border-surface-border px-4 py-3 font-headline font-bold text-sm focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-black font-headline font-bold uppercase py-4 flex items-center justify-center gap-2 hover:bg-black hover:text-primary transition-all cursor-pointer"
                >
                  {t('home.contact.form.submit')} <ArrowRight size={18} />
                </button>
              </form>

              {/* Quick contact strip */}
              <div className="mt-6 pt-5 border-t border-surface-border flex items-center justify-center gap-6">
                <a href="tel:8326148466" className="flex items-center gap-2 font-mono text-[9px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-widest cursor-pointer">
                  <Phone size={12} className="text-primary" /> 832-614-8466
                </a>
                <a href="mailto:materialesventura@outlook.com" className="flex items-center gap-2 font-mono text-[9px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-widest cursor-pointer">
                  <Mail size={12} className="text-primary" /> Email Us
                </a>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

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
              className={`${
                p.featured 
                ? 'md:col-span-2 bg-[#111111] text-white border-primary shadow-2xl' 
                : 'bg-white border-surface-border text-text-main'
              } border p-8 flex flex-col justify-between group hover:border-primary hover:shadow-xl transition-all h-full relative overflow-hidden`}
            >
              {p.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -mr-16 -mt-16 rotate-45" />
              )}
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`${p.featured ? 'text-primary' : 'text-text-muted group-hover:text-primary'} transition-colors`}>
                    {p.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {p.featured && (
                      <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                        <Star size={10} fill="currentColor" /> Best Seller
                      </span>
                    )}
                    <span className={`font-mono text-[9px] font-bold ${p.featured ? 'text-neutral-400 border-neutral-700' : 'text-text-muted border-surface-border'} px-2 py-0.5 border uppercase tracking-widest`}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <h3 className={`font-headline font-extrabold text-2xl uppercase ${p.featured ? 'text-white md:text-4xl' : 'text-text-main'} leading-tight mb-2 group-hover:text-primary transition-colors`}>
                  {p.name}
                </h3>
                <p className={`font-mono text-[10px] ${p.featured ? 'text-primary' : 'text-text-muted'} uppercase mb-4 tracking-tighter`}>
                  {p.span}
                </p>
                <p className={`${p.featured ? 'text-neutral-400 text-base' : 'text-text-muted text-[13px]'} leading-relaxed mb-6`}>
                  {p.description}
                </p>
              </div>
              
              <div className={`pt-6 border-t ${p.featured ? 'border-neutral-800' : 'border-surface-border'}`}>
                <button
                  onClick={() => setQuoteProduct(p)}
                  className={`w-full ${p.featured ? 'bg-primary text-black hover:bg-white' : 'bg-primary text-black hover:bg-black hover:text-primary'} font-headline font-bold uppercase py-4 text-sm flex items-center justify-center gap-2 transition-all cursor-pointer mt-4`}
                >
                  {t('nav.get_quote')} <ArrowRight size={16} />
                </button>
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

      {/* Quote Modal */}
      <AnimatePresence>
        {quoteProduct && (
          <QuoteModal product={quoteProduct} onClose={() => setQuoteProduct(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
