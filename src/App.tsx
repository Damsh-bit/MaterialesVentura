import { 
  Building2, 
  Trees, 
  Layout, 
  Layers, 
  Ruler, 
  PencilRuler, 
  Home, 
  Fence, 
  PlusSquare, 
  MapPin, 
  Languages, 
  PackageSearch, 
  Hammer, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  ArrowRight,
  Menu,
  X,
  Truck,
  ShieldCheck,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ProductsPage from './pages/Products';
import GalleryPage from './pages/Gallery';
import PricingPage from './pages/Pricing';
import ValuesPage from './pages/Values';
import ContactPage from './pages/Contact';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
};

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative w-12 h-10">
      <svg viewBox="0 0 100 80" className="w-full h-full fill-[#F5C400] transition-transform duration-500 group-hover:scale-105">
          <path d="M5 70 L45 15 L85 70 L72 70 L45 33 L18 70 Z" />
          <path d="M40 70 L60 45 L85 70 L72 70 L60 55 L48 70 Z" />
          <rect x="75" y="45" width="8" height="25" />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-sans text-[10px] font-medium uppercase tracking-widest text-[#555555]">Materiales</span>
      <span className="font-headline font-extrabold text-2xl tracking-tighter text-[#111111]">VENTURA</span>
    </div>
  </div>
);

const HomeContent = () => {
  const inventory = [
    { name: 'Lumber', span: 'MADERA', icon: <Trees className="w-6 h-6" /> },
    { name: 'Siding', span: 'REVESTIMIENTO', icon: <Layout className="w-6 h-6" /> },
    { name: 'Plywood', span: 'CONTRACHAPADO', icon: <Layers className="w-6 h-6" /> },
    { name: 'Glulam Beams', span: 'VIGAS LAMINADAS', icon: <Ruler className="w-6 h-6" /> },
    { name: 'Joist Trusses', span: 'CERCHAS', icon: <PencilRuler className="w-6 h-6" /> },
    { name: 'Shingles', span: 'TEJAS', icon: <Home className="w-6 h-6" /> },
    { name: 'Fence Wood', span: 'MADERA PARA FENCE', icon: <Fence className="w-6 h-6" /> },
    { name: 'Custom Orders', span: 'PEDIDOS ESPECIALES', icon: <PlusSquare className="w-6 h-6" /> },
  ];

  const featuredProducts = [
    {
      title: "Structural Douglas Fir",
      desc: "Premium grade Douglas Fir lumber for high-load structural applications. Sourced for Houston climate stability.",
      image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=1470&auto=format&fit=crop",
      price: "In Stock"
    },
    {
      title: "Engineered SmartSiding",
      desc: "Weather-resistant engineered wood siding. Superior protection against humidity and termite damage.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1374&auto=format&fit=crop",
      price: "Top Seller"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-5929c69d398d?q=80&w=1631&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584622781564-1d9876a13399?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop"
  ];

  const values = [
    { title: 'Houston-Based', desc: 'Local inventory ready for your jobsite.', icon: <MapPin className="text-primary w-8 h-8" /> },
    { title: 'Bilingual Team', desc: 'Hablamos inglés y español.', icon: <Languages className="text-primary w-8 h-8" /> },
    { title: 'Full Range', desc: 'From foundation to roofing materials.', icon: <PackageSearch className="text-primary w-8 h-8" /> },
    { title: 'Contractors Welcome', desc: 'Dedicated support for builders.', icon: <Hammer className="text-primary w-8 h-8" /> },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop')` 
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary text-black font-mono text-[10px] font-bold px-4 py-1.5 mb-8 tracking-widest"
          >
            <MapPin size={12} /> HOUSTON BUILDING HUB
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase mb-8 tracking-tighter text-white"
          >
            Professional Materials <br/>
            <span className="text-primary">For Every Job Site</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-12 font-medium"
          >
            Reliable lumber, siding, and roofing supplies at competitive contractor prices. <br/>
            <span className="opacity-50 text-base">Suministro de construcción profesional en Houston.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/products" className="btn-primary w-full sm:w-auto px-10 py-5 text-lg group">
              EXPLORE CATALOG <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#pricing" className="bg-transparent border-2 border-white text-white font-headline font-bold uppercase py-[1.125rem] px-8 flex items-center justify-center gap-2 transition-all hover:bg-white hover:text-black w-full sm:w-auto text-lg group">
              LATEST PRICING <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-surface-light border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left">
            <div>
              <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">CATALOG</p>
              <h2 className="font-headline font-extrabold text-5xl uppercase leading-none text-text-main">Featured Materials</h2>
            </div>
            <p className="max-w-md text-text-muted mx-auto md:mx-0 text-sm md:text-base">
              We stock only the highest grade materials tested for the unique demands of the Texas Gulf Coast environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((p) => (
              <div key={p.title} className="group relative overflow-hidden bg-surface-card border border-surface-border">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline font-extrabold text-3xl uppercase text-text-main">{p.title}</h3>
                    <span className="bg-primary/10 text-primary-dark font-mono text-[10px] font-bold px-2 py-1 uppercase">{p.price}</span>
                  </div>
                  <p className="text-text-muted mb-6 leading-relaxed text-sm">{p.desc}</p>
                  <Link to="/products" className="flex items-center gap-2 font-headline font-bold uppercase text-sm text-text-main hover:text-primary transition-colors">
                    Specification Sheets <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Items Grid - What We Carry */}
      <section className="py-24 bg-surface-card border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-4xl uppercase text-text-main mb-4">What We Carry</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {inventory.map((item) => (
              <div key={item.name} className="bg-white border border-surface-border p-8 flex flex-col items-center text-center gap-4 hover:border-primary transition-all group cursor-pointer group shadow-sm hover:shadow-md">
                <div className="text-text-muted group-hover:text-primary transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl uppercase truncate text-text-main leading-tight">{item.name}</h3>
                  <p className="font-mono text-[9px] text-text-muted uppercase tracking-tighter">{item.span}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-surface-light border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center md:text-left">
            <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">PORTFOLIO</p>
            <h2 className="font-headline font-extrabold text-5xl uppercase leading-none text-text-main">Our Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <Link
                key={i}
                to="/gallery"
                className="block"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-surface-card overflow-hidden cursor-zoom-in relative group"
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 border border-white text-white font-headline font-bold uppercase text-sm">
                      View Project
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-primary inline-flex items-center gap-2 px-12 py-5">
              VIEW FULL GALLERY <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Integrated Contact Section */}
      <section id="contact" className="py-24 bg-surface-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-surface-border shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
            {/* Left: Branding & Info */}
            <div className="bg-[#111111] p-12 lg:w-2/5 flex flex-col justify-between text-white relative">
              <div className="z-10">
                <div className="inline-block bg-primary text-black font-mono text-[10px] font-bold px-3 py-1 mb-8 uppercase tracking-widest">CONNECT</div>
                <h2 className="font-headline font-extrabold text-5xl uppercase leading-[0.85] mb-6">Start Your <br/><span className="text-primary italic">Quote Now</span></h2>
                <p className="text-neutral-400 mb-12 text-sm leading-relaxed">Our team at Materiales Ventura handles custom project quotes within 4 business hours. Let's build something lasting together.</p>
                
                <div className="flex flex-col gap-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div className="font-headline uppercase">
                      <p className="text-[10px] text-neutral-500 mb-1 tracking-widest font-mono">Operations Hub</p>
                      <p className="text-xl">9400 Airline Dr, <br/>Houston TX 77037</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 h-fit">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div className="font-headline uppercase">
                      <p className="text-[10px] text-neutral-500 mb-1 tracking-widest font-mono">Contractor Line</p>
                       <div className="flex flex-col">
                          <a href="tel:8326148466" className="text-xl hover:text-primary transition-colors">832-614-8466</a>
                          <a href="tel:3176191190" className="text-xl hover:text-primary transition-colors">317-619-1190</a>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/5 flex items-center justify-between">
                 <Logo />
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-12 lg:w-3/5 bg-white">
              <form className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Name / Nombre</label>
                  <input 
                    type="text" 
                    placeholder="YOUR FULL NAME"
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Phone / Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="PHONE NUMBER"
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                  />
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Email / Correo</label>
                  <input 
                    type="email" 
                    placeholder="EMAIL@EXAMPLE.COM"
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                  />
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Project Details / Detalles</label>
                  <textarea 
                    rows={6}
                    placeholder="WHAT MATERIALS ARE YOU LOOKING FOR? ( QUANTITIES, SPECS, TIMELINE )"
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button className="btn-primary w-full py-6 text-2xl flex items-center justify-center gap-4 group">
                    SUBMIT REQUEST <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-text-muted text-[10px] mt-4 font-mono uppercase tracking-tighter opacity-50">By submitting you agree to our privacy policy and terms of service.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="pricing" className="bg-primary py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
              <h2 className="font-headline font-extrabold text-5xl md:text-6xl text-black uppercase mb-8 tracking-tighter leading-none">
                  Ready for a Volume Discount?
              </h2>
              <p className="text-black/70 mb-12 text-lg font-medium leading-relaxed px-4">
                  We specialize in bulk supply for large residential and commercial projects. <br/>
                  Download our live price list to see why contractors choose Ventura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-black text-white font-headline font-bold text-xl px-12 py-5 uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                      PRICE LIST <ArrowUpRight size={24} />
                  </button>
                  <a href="#contact" className="border-2 border-black text-black font-headline font-bold text-xl px-12 py-5 uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-center">
                      CONTACT SALES
                  </a>
              </div>
          </div>
      </section>

      {/* Values Block */}
      <section id="values" className="py-20 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-surface-border">
            {values.map((v) => (
              <div key={v.title} className="p-10 flex flex-col items-center text-center gap-4 hover:bg-surface-card transition-colors group">
                <div className="mb-4 transition-transform group-hover:scale-110">{v.icon}</div>
                <h4 className="font-headline font-extrabold text-xl uppercase text-text-main">{v.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface-light flex flex-col selection:bg-primary selection:text-black">
        {/* Top Accent Strip */}
        <div className="h-2 bg-primary w-full fixed top-0 z-[60]" />
        
        {/* Navigation */}
        <nav className="fixed w-full top-2 z-50 bg-white/95 backdrop-blur-md border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link to="/"><Logo /></Link>
              <div className="hidden lg:flex items-center gap-8">
                {['PRODUCTS', 'GALLERY', 'PRICING', 'VALUES', 'CONTACT'].map((item) => (
                  <Link 
                    key={item} 
                    to={`/${item.toLowerCase()}`}
                    className="font-headline font-bold text-sm tracking-widest text-text-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="font-mono text-xs font-bold border border-surface-border px-3 py-1 hover:border-black transition-colors text-text-main">
                EN/ES
              </button>
              <Link to="/contact" className="hidden md:flex bg-primary text-black font-headline font-bold text-sm px-6 py-3 hover:bg-black hover:text-primary transition-all shadow-sm">
                GET QUOTE
              </Link>
              <button 
                className="lg:hidden text-text-main p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 z-50 bg-white flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <button onClick={() => setIsMenuOpen(false)} className="text-text-main p-2"><X size={32} /></button>
              </div>
              <div className="flex flex-col gap-6 text-text-main text-center">
                {['PRODUCTS', 'GALLERY', 'PRICING', 'VALUES', 'CONTACT'].map((item) => (
                  <Link 
                    key={item} 
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-headline font-extrabold text-4xl tracking-tighter hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/values" element={<ValuesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5 text-center md:text-left">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
              <div className="col-span-2 flex flex-col items-center md:items-start">
                <Logo />
                <p className="text-neutral-500 mt-8 max-w-sm text-sm leading-relaxed mx-auto md:mx-0">
                  Houston's specialist in structural lumber, engineered wood, and roofing systems. Since 2024, Materiales Ventura has focused on bridging the gap between supply chain efficiency and jobsite reliability.
                </p>
              </div>
              <div>
                <h5 className="font-headline font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Supply Chain</h5>
                <ul className="space-y-4 text-xs text-neutral-500 font-headline uppercase font-bold tracking-widest">
                  <li><Link to="/products" className="hover:text-primary transition-colors cursor-pointer">Lumber & Siding</Link></li>
                  <li><Link to="/gallery" className="hover:text-primary transition-colors cursor-pointer">Project Gallery</Link></li>
                  <li><Link to="/pricing" className="hover:text-primary transition-colors cursor-pointer">Market Rates</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors cursor-pointer">Quick Quote</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-headline font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Compliance</h5>
                <ul className="space-y-4 text-xs text-neutral-500 font-headline uppercase font-bold tracking-widest">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Sale</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Safety Data (SDS)</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="font-headline font-bold text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
                © 2024 SUPPLY-CORE LOGISTICS HOUSTON. ALL RIGHTS RESERVED.
              </p>
              <div className="flex gap-4">
                <button className="font-mono text-[10px] font-bold border border-white/10 px-4 py-2 hover:border-primary transition-colors text-neutral-500 uppercase">
                  EN
                </button>
                <button className="font-mono text-[10px] font-bold border border-white/10 px-4 py-2 hover:border-primary transition-colors text-neutral-500 uppercase">
                  ES
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
