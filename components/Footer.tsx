
import React, { useState } from 'react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "hello@example.com";

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-16 bg-[#0a0a0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">{t.footer.cta}</h2>
        <button 
          onClick={copyEmail}
          className="relative inline-block text-2xl md:text-3xl text-gradient font-bold hover:scale-105 transition-transform mb-12 group"
        >
          {email}
          <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs rounded transition-all duration-300 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            {lang === 'zh' ? '已复制！' : 'Copied!'}
          </span>
          <span className="block text-xs text-slate-600 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            {lang === 'zh' ? '(点击复制)' : '(Click to copy)'}
          </span>
        </button>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Dribbble</a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 Your Name. {t.footer.copyright}</p>
          <p className="mt-4 md:mt-0 flex items-center">
            {t.footer.built}
            <span className="mx-2 text-red-500">❤️</span> 
            React & Gemini
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
