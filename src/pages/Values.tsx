import { 
  Building2, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  MessageSquare, 
  BarChart3,
  Trees,
  Truck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from '../contexts/TranslationContext';

const coreValues = [
  {
    title: "Houston Rooted",
    desc: "We don't just ship to Houston; we are part of it. Based in Airline Dr, our inventory is physically here, ready for same-day or next-day turnaround.",
    icon: <MapPin size={32} className="text-primary" />
  },
  {
    title: "Bilingual Operations",
    desc: "English or Spanish — clear communication is the foundation of a safe jobsite. Our entire team is bilingual to ensure orders are correct every time.",
    icon: <Globe size={32} className="text-primary" />
  },
  {
    title: "Structural Integrity",
    desc: "We source Douglas Fir and Engineered Wood that exceeds Texas building codes. We don't stock 'economy' grade framing materials.",
    icon: <ShieldCheck size={32} className="text-primary" />
  },
  {
    title: "Speed of Supply",
    desc: "In construction, time is profit. Our logistics department is optimized for speed, minimizing downtime for your crew.",
    icon: <Zap size={32} className="text-primary" />
  }
];

export default function Values() {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-24 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Building2 size={400} className="text-text-main" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-xs font-bold text-primary mb-4 tracking-widest uppercase">{t('values.mission')}</p>
            <h1 className="font-headline font-extrabold text-6xl md:text-8xl uppercase leading-[0.85] text-text-main tracking-tighter mb-8 italic">
              {t('values.title1')} <br/> <span className="text-primary">{t('values.title2')}</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              {t('values.desc')}
            </p>
          </div>
        </header>

        {/* Core Values Grid */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-border border border-surface-border shadow-2xl">
            {coreValues.map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 flex flex-col gap-6 hover:bg-surface-card transition-colors group"
              >
                <div className="group-hover:scale-110 transition-transform origin-left">{v.icon}</div>
                <h3 className="font-headline font-extrabold text-2xl uppercase text-text-main leading-tight">{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cultural Statement */}
        <section className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="aspect-square bg-surface-card overflow-hidden border border-surface-border relative">
            <img 
               src="/fotos/e7244979-edc0-42a8-94a1-34ffda9e57a6.webp"
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
               alt="Teamwork"
            />
            <div className="absolute bottom-8 left-8 bg-primary p-6 text-black font-headline font-extrabold text-3xl uppercase tracking-tighter italic shadow-xl">
               HOUSTON PRIDE <br/> DESDE 2024
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-primary">
              <Users size={48} />
              <div className="h-px bg-primary flex-grow" />
            </div>
            <h2 className="font-headline font-extrabold text-5xl uppercase leading-none text-text-main">{t('values.culture.title1')} <span className="text-primary italic">{t('values.culture.title2')}</span></h2>
            <p className="text-text-muted text-lg leading-relaxed">
              {t('values.culture.desc')}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold">01</span>
                </div>
                <p className="font-headline font-bold uppercase text-text-main">{t('values.culture.list1')}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold">02</span>
                </div>
                <p className="font-headline font-bold uppercase text-text-main">{t('values.culture.list2')}</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold">03</span>
                </div>
                <p className="font-headline font-bold uppercase text-text-main">{t('values.culture.list3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Numbers */}
        <section className="bg-[#111111] p-16 text-white text-center md:text-left overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 -mb-40 -mr-40 rounded-full" />
          <div className="relative z-10 grid md:grid-cols-4 gap-12">
            <div>
              <p className="font-headline font-extrabold text-6xl text-primary mb-2">150+</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">{t('values.stats.contractors')}</p>
            </div>
            <div>
              <p className="font-headline font-extrabold text-6xl text-primary mb-2">1.2M</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">{t('values.stats.board')}</p>
            </div>
            <div>
              <p className="font-headline font-extrabold text-6xl text-primary mb-2">100%</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">{t('values.stats.bilingual')}</p>
            </div>
            <div>
              <p className="font-headline font-extrabold text-6xl text-primary mb-2">4HR</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">{t('values.stats.quote')}</p>
            </div>
          </div>
        </section>

        <div className="mt-24 text-center">
           <button className="btn-primary !px-12 !py-6 text-xl flex items-center gap-4 mx-auto group cursor-pointer">
              {t('values.btn_network')} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
}
