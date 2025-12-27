
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white group">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300" />
            <span>PORT<span className="text-blue-500">FOLIO.</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a>

            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-1 glass-card px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold hover:bg-white/5 transition-all text-white"
            >
              <span>{lang === 'en' ? 'EN' : '中'}</span>
              <span className="text-slate-600 text-[10px]">/</span>
              <span className="text-slate-500">{lang === 'en' ? '中' : 'EN'}</span>
            </button>

            <a href="#contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all">
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-[#0a0a0c] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 text-2xl font-bold">
          <a href="#about" onClick={toggleMenu} className="text-slate-400 hover:text-white">{t.nav.about}</a>
          <a href="#projects" onClick={toggleMenu} className="text-slate-400 hover:text-white">{t.nav.projects}</a>
          <a href="#skills" onClick={toggleMenu} className="text-slate-400 hover:text-white">{t.nav.skills}</a>
          <button
            onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); toggleMenu(); }}
            className="text-blue-500"
          >
            {lang === 'en' ? '切换至 中文' : 'Switch to English'}
          </button>
          <a href="#contact" onClick={toggleMenu} className="px-8 py-3 bg-blue-600 text-white rounded-full">
            {t.nav.contact}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
