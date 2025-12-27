
import React from 'react';
import { PROJECTS } from '../constants';
import { useLanguage } from '../App';

const Projects: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.projects.title}</h2>
          <p className="text-slate-400 max-w-xl">{t.projects.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 text-slate-400 rounded border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title[lang]}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description[lang]}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 text-sm transition-colors"
                >
                  {t.projects.more}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Projects;
