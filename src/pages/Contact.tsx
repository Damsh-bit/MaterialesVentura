import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Globe,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export default function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <div className="pt-32 pb-24 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center md:text-left">
          <p className="font-mono text-xs font-bold text-primary mb-2 tracking-widest uppercase">{t('contact.direct')}</p>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl uppercase leading-[0.85] text-text-main tracking-tighter mb-8">
            {t('contact.title1')} <br /> <span className="text-primary italic">{t('contact.title2')}</span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-px bg-surface-border border border-surface-border shadow-2xl">
          {/* Left Column: Form */}
          <div className="bg-white p-12">
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <MessageSquare size={40} />
                </div>
                <h2 className="font-headline font-extrabold text-4xl uppercase text-text-main">{t('contact.success.title')}</h2>
                <p className="text-text-muted max-w-sm mx-auto">
                  {t('contact.success.desc')}
                </p>
                <button
                  onClick={() => setFormStatus(null)}
                  className="font-headline font-bold uppercase tracking-widest text-sm text-primary hover:text-black transition-colors cursor-pointer"
                >
                  {t('contact.success.btn')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.name')}</label>
                    <input
                      required
                      type="text"
                      placeholder={t('home.contact.form.name_ph')}
                      className="w-full bg-surface-card border-b-2 border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase text-text-main bg-transparent"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.phone')}</label>
                    <input
                      required
                      type="tel"
                      placeholder={t('home.contact.form.phone_ph')}
                      className="w-full bg-surface-card border-b-2 border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase text-text-main bg-transparent"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.email')}</label>
                    <input
                      required
                      type="email"
                      placeholder={t('home.contact.form.email_ph')}
                      className="w-full bg-surface-card border-b-2 border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase text-text-main bg-transparent"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{t('home.contact.form.details')}</label>
                    <textarea
                      required
                      rows={6}
                      placeholder={t('home.contact.form.details_ph')}
                      className="w-full bg-surface-card border-b-2 border-surface-border p-4 font-headline font-bold text-lg focus:outline-none focus:border-primary transition-colors uppercase text-text-main bg-transparent resize-none"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full !py-6 text-2xl group cursor-pointer">
                  {t('home.contact.form.submit')} <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact info & Map */}
          <div className="bg-[#111111] p-12 text-white flex flex-col gap-12">
            <div className="space-y-12">
              <div>
                <p className="font-mono text-[10px] text-neutral-500 mb-6 uppercase tracking-[0.3em]">{t('contact.base')}</p>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={32} />
                  <div>
                    <h3 className="font-headline font-extrabold text-3xl uppercase leading-[0.85] mb-2 tracking-tighter italic">{t('contact.hub')}</h3>
                    <p className="text-xl font-headline font-bold uppercase text-neutral-400">9400 Airline Dr, <br /> Houston TX 77037</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-neutral-500 mb-6 uppercase tracking-[0.3em]">{t('contact.connect')}</p>
                <div className="space-y-6">
                  <a href="tel:8326148466" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                      <Phone size={24} />
                    </div>
                    <span className="font-headline font-extrabold text-3xl uppercase tracking-tighter group-hover:text-primary transition-colors">832-614-8466</span>
                  </a>
                  <a href="tel:3176191190" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                      <Phone size={24} />
                    </div>
                    <span className="font-headline font-extrabold text-3xl uppercase tracking-tighter group-hover:text-primary transition-colors">317-619-1190</span>
                  </a>
                  <a href="mailto:materialesventura@outlook.com" className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                      <Mail size={24} />
                    </div>
                    <span className="font-headline font-bold text-xl uppercase tracking-widest break-all group-hover:text-primary transition-colors">materialesventura@outlook.com</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-neutral-500 mb-6 uppercase tracking-[0.3em]">{t('contact.hours')}</p>
                <div className="flex gap-4">
                  <Clock className="text-primary mt-1" size={24} />
                  <div className="font-headline font-bold uppercase text-sm space-y-1">
                    <div className="flex justify-between w-48"><span className="text-neutral-500">{t('contact.hours.mon')}</span> <span>7AM - 6PM</span></div>
                    <div className="flex justify-between w-48"><span className="text-neutral-500">{t('contact.hours.sat')}</span> <span>7AM - 6PM</span></div>
                    <div className="flex justify-between w-48 text-primary/50"><span className="text-neutral-500">{t('contact.hours.sun')}</span> <span>{t('contact.hours.closed')}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social / Map Placeholder */}
            <div className="mt-auto pt-12 border-t border-white/5">
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Integration Placeholder Section */}
        <section className="mt-24">
          <div className="aspect-[21/9] w-full bg-surface-card border border-surface-border relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grayscale opacity-20 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i12!2i924!3i1612!2m3!1e0!2sm!3i633045233!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')] bg-cover" />
            <div className="relative z-10 text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <h4 className="font-headline font-extrabold text-2xl uppercase text-text-main mb-2 tracking-tighter">{t('contact.map.title')}</h4>
              <a href="#" target="_blank" className="text-text-muted hover:text-primary transition-colors font-mono text-[10px] font-bold uppercase underline tracking-widest cursor-pointer">
                {t('contact.map.btn')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
