import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Layout, Maximize2, X, ArrowRight, Camera } from 'lucide-react';

const categories = ["All", "Residential", "Commercial", "Inventory", "Logistics"];

const galleryItems = [
  {
    id: 1,
    category: "Residential",
    title: "Luxury Framing Project",
    location: "Sugar Land, TX",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Commercial",
    title: "Warehouse Expansion",
    location: "Katy, TX",
    image: "https://images.unsplash.com/photo-1503387762-5929c69d398d?q=80&w=1631&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Inventory",
    title: "Douglas Fir Stockpile",
    location: "Main Distribution Center",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Residential",
    title: "Modern Home Siding",
    location: "The Woodlands, TX",
    image: "https://images.unsplash.com/photo-1584622781564-1d9876a13399?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Logistics",
    title: "Rapid Jobsite Delivery",
    location: "Houston Metro Area",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "Inventory",
    title: "Precision Cut Beams",
    location: "Bespoke Orders",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop"
  },
  {
    id: 7,
    category: "Residential",
    title: "Roofing Installation",
    location: "Pearland, TX",
    image: "https://images.unsplash.com/photo-1632759145351-1d5929a9f291?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 8,
    category: "Commercial",
    title: "Office Complex Structure",
    location: "Downtown Houston",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 9,
    category: "Inventory",
    title: "Engineered Wood Joists",
    location: "Central Warehouse",
    image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=1470&auto=format&fit=crop"
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center md:text-left">
          <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">GALERIA DE PROYECTOS</p>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl uppercase leading-[0.95] text-text-main tracking-tighter mb-8">
            Built With <br/> <span className="text-primary italic">Ventura Supply</span>
          </h1>
          <p className="max-w-2xl text-text-muted text-lg">
            See our materials in action across Houston. From large-scale commercial structures to custom residential builds, we provide the backbone for excellence.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 font-headline font-bold uppercase tracking-widest text-sm transition-all border ${
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
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={48} strokeWidth={1.5} />
              </button>
              
              <div className="max-w-6xl w-full flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
                <motion.img 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-full object-contain shadow-2xl border border-white/10"
                />
                <div className="text-center">
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-[0.3em] mb-4">
                    {selectedImage.category} / {selectedImage.location}
                  </p>
                  <h2 className="font-headline font-extrabold text-4xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
                    {selectedImage.title}
                  </h2>
                  <button className="btn-primary !px-10 !py-4 flex items-center gap-3">
                    INQUIRE ABOUT THIS PROJECT <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact CTA */}
        <section className="mt-32 p-12 bg-surface-card border border-surface-border text-center">
          <Camera size={48} className="text-primary mx-auto mb-8" />
          <h2 className="font-headline font-extrabold text-4xl uppercase text-text-main mb-6">Want your project featured?</h2>
          <p className="text-text-muted mb-12 max-w-xl mx-auto">We love seeing what our customers build. Send us your project photos and we might feature them in our next catalog update.</p>
          <a href="#contact" className="inline-block font-headline font-bold uppercase tracking-[0.2em] text-sm hover:text-primary transition-colors">
            Contact Project Support <ArrowRight size={16} className="inline ml-2" />
          </a>
        </section>
      </div>
    </div>
  );
}
