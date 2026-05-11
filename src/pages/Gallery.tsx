import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Layout, Maximize2, Camera, ArrowRight } from 'lucide-react';

const categories = ["All", "Residential", "Commercial", "Inventory", "Logistics"];

const galleryItems = [
  {
    id: 1,
    category: "Residential",
    title: "Luxury Framing Project",
    location: "Sugar Land, TX",
    image: "/fotos/7fce9ae7-2b20-4ad1-b3fc-928c7e67ea37.webp"
  },
  {
    id: 2,
    category: "Commercial",
    title: "Warehouse Expansion",
    location: "Katy, TX",
    image: "/fotos/WhatsApp%20Image%202026-05-07%20at%2012.19.24%20PM.webp"
  },
  {
    id: 3,
    category: "Inventory",
    title: "Douglas Fir Stockpile",
    location: "Main Distribution Center",
    image: "/fotos/a096b76b-65e7-4d7e-ba85-ef6f62dcb971.webp"
  },
  {
    id: 4,
    category: "Residential",
    title: "Modern Home Siding",
    location: "The Woodlands, TX",
    image: "/fotos/ae78c1de-039e-4dfd-8ae4-6a64fdfc372e.webp"
  },
  {
    id: 5,
    category: "Logistics",
    title: "Rapid Jobsite Delivery",
    location: "Houston Metro Area",
    image: "/fotos/b4da9cbf-a60f-429f-85ca-75ccc64c1402.webp"
  },
  {
    id: 6,
    category: "Inventory",
    title: "Precision Cut Beams",
    location: "Bespoke Orders",
    image: "/fotos/bbf34c3d-a282-43c9-8437-f72077b2baee.webp"
  },
  {
    id: 7,
    category: "Residential",
    title: "Roofing Installation",
    location: "Pearland, TX",
    image: "/fotos/bd2b94fd-37a6-4a0b-92b9-dfa8e645c547.webp"
  },
  {
    id: 8,
    category: "Commercial",
    title: "Office Complex Structure",
    location: "Downtown Houston",
    image: "/fotos/c827f073-35e3-43e4-8d74-b68be66b3e54.webp"
  },
  {
    id: 9,
    category: "Inventory",
    title: "Engineered Wood Joists",
    location: "Central Warehouse",
    image: "/fotos/dbac4834-c21e-4c20-9e71-0679857344bd.webp"
  }
];

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center md:text-left">
          <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">{t('gallery.portfolio')}</p>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl uppercase leading-[0.95] text-text-main tracking-tighter mb-8">
            {t('gallery.title1')} <br/> <span className="text-primary italic">{t('gallery.title2')}</span>
          </h1>
          <p className="max-w-2xl text-text-muted text-lg">
            {t('gallery.desc')}
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 font-headline font-bold uppercase tracking-widest text-sm transition-all border cursor-pointer ${
                activeCategory === cat 
                ? 'bg-black text-primary border-black' 
                : 'bg-white text-text-muted border-surface-border hover:border-text-main'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={item.id}
                className="group relative aspect-square bg-surface-card overflow-hidden border border-surface-border cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-mono text-[10px] text-primary font-bold uppercase tracking-widest mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-headline font-extrabold text-2xl text-white uppercase leading-tight mb-4">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs font-mono uppercase tracking-widest">
                        {item.location}
                      </span>
                      <Maximize2 size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal/Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-6xl w-full flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
                <motion.img 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="max-h-[78vh] w-full object-contain shadow-2xl"
                />
                <div className="text-center">
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-[0.3em] mb-3">
                    {selectedImage.category} / {selectedImage.location}
                  </p>
                  <h2 className="font-headline font-extrabold text-3xl md:text-5xl text-white uppercase tracking-tighter leading-none">
                    {selectedImage.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact CTA */}
        <section className="mt-32 p-12 bg-surface-card border border-surface-border text-center">
          <Camera size={48} className="text-primary mx-auto mb-8" />
          <h2 className="font-headline font-extrabold text-4xl uppercase text-text-main mb-6">{t('gallery.featured.title')}</h2>
          <p className="text-text-muted mb-12 max-w-xl mx-auto">{t('gallery.featured.desc')}</p>
          <a href="#contact" className="inline-block font-headline font-bold uppercase tracking-[0.2em] text-sm hover:text-primary transition-colors cursor-pointer">
            {t('gallery.featured.btn')} <ArrowRight size={16} className="inline ml-2" />
          </a>
        </section>
      </div>
    </div>
  );
}
