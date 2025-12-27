
import React from 'react';
import { SKILLS } from '../constants';
import { useLanguage } from '../App';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.skills.title}</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              {t.skills.desc}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-blue-500">
                <div className="text-2xl mb-2">Frontend</div>
                <div className="text-slate-400 text-sm">React, TypeScript, Next.js, Tailwind, GSAP</div>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-purple-500">
                <div className="text-2xl mb-2">Backend</div>
                <div className="text-slate-400 text-sm">Node.js, PostgreSQL, Redis, GraphQL, Docker</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium flex items-center">
                    <span className="mr-3">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-slate-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
