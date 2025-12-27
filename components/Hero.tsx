
import React from 'react';
import { useLanguage } from '../App';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-xs font-semibold text-blue-400 mb-8 border border-blue-500/20">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t.hero.status}
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          {t.hero.title1} <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all shadow-xl shadow-white/5">
            {t.hero.ctaWork}
          </a>
          <a href="#ai-twin" className="w-full sm:w-auto px-8 py-4 glass-card text-white font-bold rounded-xl hover:bg-white/10 transition-all">
            {t.hero.ctaChat}
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-slate-500 hover:text-white transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
