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
import { useTranslation } from './contexts/TranslationContext';
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
  <div className="flex items-center group cursor-pointer">
    <img src="/fotos/Logotipo.png" alt="Materiales Ventura" className="h-12 md:h-16 object-contain" />
  </div>
);

const HomeContent = () => {
  const { t } = useTranslation();
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
      image: "/fotos/0559b63a-1031-4458-8219-09f93c70451f.webp",
      badge: "In Stock"
    },
    {
      title: "Engineered SmartSiding",
      desc: "Weather-resistant engineered wood siding. Superior protection against humidity and termite damage.",
      image: "/fotos/070fbedd-3c78-44f5-a017-fdc76a6a02be.webp",
      badge: "Top Seller"
    }
  ];

  const gallery = [
    "/fotos/347b18b5-fa91-4650-9af4-3a3d23ea6c0f.webp",
    "/fotos/36b1364b-f403-4336-84a5-99c79436837d.webp",
    "/fotos/4366b5e9-5be0-4a73-91b8-0dd276ca97a1.webp",
    "/fotos/48cc0d68-49a6-496d-9865-52c4a9d880f2.webp",
    "/fotos/50eccd73-6708-4f94-9cc6-4ac9ba16dfdd.webp",
    "/fotos/78e3b217-2acc-4506-adb8-03b1bc2d3eef.webp"
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
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover transition-transform duration-1000 scale-105"
          >
            <source src="/fotos/Video%20hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary text-black font-mono text-[10px] font-bold px-4 py-1.5 tracking-widest cursor-default">
              <MapPin size={12} /> {t('home.hero.hub')}
            </div>
            <div className="inline-flex items-center gap-2 border border-white/20 text-white font-mono text-[10px] font-bold px-4 py-1.5 tracking-widest cursor-default">
              {t('home.hero.since')}
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase mb-8 tracking-tighter text-white"
          >
            {t('home.hero.title1')} <br/>
            <span className="text-primary">{t('home.hero.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-12 font-medium"
          >
            {t('home.hero.desc1')} <br/>
            <span className="opacity-50 text-base">{t('home.hero.desc2')}</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/products" className="btn-primary w-full sm:w-auto px-10 py-5 text-lg group cursor-pointer">
              {t('home.hero.btn_catalog')} <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#pricing" className="bg-transparent border-2 border-white text-white font-headline font-bold uppercase py-[1.125rem] px-8 flex items-center justify-center gap-2 transition-all hover:bg-white hover:text-black w-full sm:w-auto text-lg group cursor-pointer">
              {t('home.hero.btn_pricing')} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="products" className="py-0 bg-surface-light border-b border-surface-border">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Photo Side */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <img 
              src="/fotos/syp_lumber.png" 
              alt="Southern Yellow Pine Lumber" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white">
            <div className="max-w-xl">
              <span className="inline-block bg-[#FACC15] text-black font-mono text-[10px] font-bold px-3 py-1 mb-6 uppercase tracking-widest">
                {t('home.featured.tag')}
              </span>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl uppercase leading-none text-text-main mb-4">
                {t('home.featured.headline')}
              </h2>
              <p className="text-xl font-headline text-text-muted mb-6 italic">
                {t('home.featured.subhead')}
              </p>
              <p className="text-text-muted mb-8 text-base leading-relaxed">
                {t('home.featured.body')}
              </p>
              
              <ul className="space-y-4 mb-12">
                {[1, 2, 3].map((num) => (
                  <li key={num} className="flex items-center gap-3 text-text-main font-medium text-sm uppercase font-headline tracking-wide">
                    <ShieldCheck className="text-[#FACC15] w-5 h-5" />
                    {/* @ts-ignore */}
                    {t(`home.featured.spec${num}`)}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-[#FACC15] text-black font-headline font-bold uppercase py-4 px-8 hover:bg-yellow-500 transition-colors cursor-pointer w-full sm:w-auto"
              >
                {t('home.featured.btn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Items Grid - What We Carry */}
      <section className="py-24 bg-surface-card border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-4xl uppercase text-text-main mb-4">{t('home.inventory.title')}</h2>
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
            <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">{t('home.gallery.portfolio')}</p>
            <h2 className="font-headline font-extrabold text-5xl uppercase leading-none text-text-main">{t('home.gallery.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <Link
                key={i}
                to="/gallery"
                className="block cursor-pointer"
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
                      {t('home.gallery.view_project')}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-primary inline-flex items-center gap-2 px-12 py-5 cursor-pointer">
              {t('home.gallery.view_full')} <ArrowRight size={20} />
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
                <div className="inline-block bg-primary text-black font-mono text-[10px] font-bold px-3 py-1 mb-8 uppercase tracking-widest">{t('home.contact.connect')}</div>
                <h2 className="font-headline font-extrabold text-5xl uppercase leading-[0.85] mb-6">{t('home.contact.title1')} <br/><span className="text-primary italic">{t('home.contact.title2')}</span></h2>
                <p className="text-neutral-400 mb-12 text-sm leading-relaxed">{t('home.contact.desc')}</p>
                
                <div className="flex flex-col gap-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div className="font-headline uppercase">
                      <p className="text-[10px] text-neutral-500 mb-1 tracking-widest font-mono">{t('home.contact.hub')}</p>
                      <p className="text-xl">9400 Airline Dr, <br/>Houston TX 77037</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 h-fit">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div className="font-headline uppercase">
                      <p className="text-[10px] text-neutral-500 mb-1 tracking-widest font-mono">{t('home.contact.phone')}</p>
                       <div className="flex flex-col">
                          <a href="tel:8326148466" className="text-xl hover:text-primary transition-colors cursor-pointer">832-614-8466</a>
                          <a href="tel:3176191190" className="text-xl hover:text-primary transition-colors cursor-pointer">317-619-1190</a>
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
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.name')}</label>
                  <input 
                    type="text" 
                    placeholder={t('home.contact.form.name_ph')}
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    placeholder={t('home.contact.form.phone_ph')}
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                  />
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.email')}</label>
                  <input 
                    type="email" 
                    placeholder={t('home.contact.form.email_ph')}
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main"
                  />
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.details')}</label>
                  <textarea 
                    rows={6}
                    placeholder={t('home.contact.form.details_ph')}
                    className="w-full bg-surface-card border border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase placeholder:text-neutral-300 text-text-main resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button className="btn-primary w-full py-6 text-2xl flex items-center justify-center gap-4 group cursor-pointer">
                    {t('home.contact.form.submit')} <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-text-muted text-[10px] mt-4 font-mono uppercase tracking-tighter opacity-50">{t('home.contact.form.terms')}</p>
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
                  {t('home.pricing.title')}
              </h2>
              <p className="text-black/70 mb-12 text-lg font-medium leading-relaxed px-4">
                  {t('home.pricing.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="bg-black text-white font-headline font-bold text-xl px-12 py-5 uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      {t('home.pricing.btn_list')} <ArrowUpRight size={24} />
                  </Link>
                  <a href="#contact" className="border-2 border-black text-black font-headline font-bold text-xl px-12 py-5 uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-center cursor-pointer">
                      {t('home.pricing.btn_sales')}
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
  const { language, toggleLanguage, setLanguage, t } = useTranslation();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface-light flex flex-col selection:bg-primary selection:text-black">
        {/* Top Info Bar */}
        <div className="bg-neutral-900 text-neutral-400 w-full fixed top-0 z-[60] h-8 flex justify-center md:justify-between items-center px-6 font-mono text-[9px] font-bold uppercase tracking-widest border-b border-black">
          <div className="hidden md:flex items-center gap-3">
            <Clock size={12} className="text-primary" /> {t('header.hours')}
          </div>
          <a href="mailto:materialesventura@outlook.com" className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer">
            <Mail size={12} className="text-primary" /> materialesventura@outlook.com
          </a>
        </div>
        
        {/* Navigation */}
        <nav className="fixed w-full top-8 z-50 bg-white border-b border-surface-border">
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
                    {t(`nav.${item.toLowerCase()}`)}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="font-mono text-xs font-bold border border-surface-border px-3 py-1 hover:border-black transition-colors text-text-main cursor-pointer"
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
              <Link to="/contact" className="hidden md:flex bg-primary text-black font-headline font-bold text-sm px-6 py-3 hover:bg-black hover:text-primary transition-all shadow-sm cursor-pointer">
                {t('nav.get_quote')}
              </Link>
              <button 
                className="lg:hidden text-text-main p-2 cursor-pointer"
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

        <main className="flex-grow pt-28">
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
                  {t('footer.desc')}
                </p>
                <div className="mt-8 flex flex-col items-center md:items-start gap-4 font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                  <a href="mailto:materialesventura@outlook.com" className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer">
                    <Mail size={14} className="text-primary" /> materialesventura@outlook.com
                  </a>
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-primary" /> {t('header.hours')}
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-headline font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">{t('footer.supply')}</h5>
                <ul className="space-y-4 text-xs text-neutral-500 font-headline uppercase font-bold tracking-widest">
                  <li><Link to="/products" className="hover:text-primary transition-colors cursor-pointer">{t('footer.supply.lumber')}</Link></li>
                  <li><Link to="/gallery" className="hover:text-primary transition-colors cursor-pointer">{t('footer.supply.gallery')}</Link></li>
                  <li><Link to="/pricing" className="hover:text-primary transition-colors cursor-pointer">{t('footer.supply.rates')}</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors cursor-pointer">{t('footer.supply.quote')}</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-headline font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">{t('footer.compliance')}</h5>
                <ul className="space-y-4 text-xs text-neutral-500 font-headline uppercase font-bold tracking-widest">
                  <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{t('footer.compliance.privacy')}</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{t('footer.compliance.terms')}</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{t('footer.compliance.sds')}</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="font-headline font-bold text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
                {t('footer.rights')}
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`font-mono text-[10px] font-bold border px-4 py-2 hover:border-primary transition-colors uppercase cursor-pointer ${language === 'en' ? 'border-primary text-white' : 'border-white/10 text-neutral-500'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('es')}
                  className={`font-mono text-[10px] font-bold border px-4 py-2 hover:border-primary transition-colors uppercase cursor-pointer ${language === 'es' ? 'border-primary text-white' : 'border-white/10 text-neutral-500'}`}
                >
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
