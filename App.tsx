
import React, { useState, createContext, useContext, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import DigitalTwinChat from './components/DigitalTwinChat';
import Footer from './components/Footer';
import { Language } from './types';
import { UI_STRINGS } from './constants';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = UI_STRINGS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen relative">
        <Navigation />
        <main>
          <Hero />
          <section id="about" className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10 animate-pulse"></div>
                <img
                  src="https://picsum.photos/seed/profile/600/800"
                  alt="Profile"
                  className="w-full h-auto rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">{t.about.badge}</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {t.about.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {t.about.desc}
                </p>
                <div className="mb-8">
                  <a
                    href="https://mp.weixin.qq.com/s/57ZddMBqXFTP89YJs3lR9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <span className="font-semibold underline underline-offset-4">{t.about.more}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="flex space-x-12">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">8+</div>
                    <div className="text-slate-500 text-sm">{t.about.stats[0]}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">120+</div>
                    <div className="text-slate-500 text-sm">{t.about.stats[1]}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-slate-500 text-sm">{t.about.stats[2]}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Projects />
          <Skills />
          <DigitalTwinChat />
        </main>
        <Footer />

        {/* Back to Top FAB */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 glass-card rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:bg-blue-600 ${showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
            }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
